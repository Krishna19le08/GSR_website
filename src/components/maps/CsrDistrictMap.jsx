"use client";

// District-level drill-down for a single state's real CSR project ledger:
// renders the state's district boundaries (public/data/geo/districts/<stateId>.json)
// as a clickable Leaflet map, shaded by how much CSR spend the csv records
// for that district. Click a district to see its total spend, project count
// and top development sectors, matched by name via district-geo.js (the
// boundary file and the csv don't always spell a district the same way).

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useState } from "react";
import { GeoJSON, MapContainer, useMap } from "react-leaflet";
import { matchDistrictKey } from "@/lib/geo/district-geo";

const cr = (n) =>
  `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Cr`;

const FILL_WITH_DATA = "#1f4a44";
const FILL_NO_DATA = "#a8a297";
const FILL_SELECTED = "#c98a11";

function FitToLayer({ geojson }) {
  const map = useMap();
  useEffect(() => {
    const layer = L.geoJSON(geojson);
    const bounds = layer.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [12, 12] });
  }, [geojson, map]);
  return null;
}

export default function CsrDistrictMap({ stateId, stateName, districts }) {
  const [geojson, setGeojson] = useState(null);
  const [status, setStatus] = useState("loading");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setSelected(null);
    fetch(`/data/geo/districts/${stateId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("district geojson fetch failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setGeojson(data);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [stateId]);

  const districtNames = useMemo(() => districts.map((d) => d.district), [districts]);

  const selectedCsr = useMemo(() => {
    if (!selected) return null;
    const matchedName = matchDistrictKey(selected, districtNames);
    return districts.find((d) => d.district === matchedName) ?? null;
  }, [selected, districts, districtNames]);

  const topSectorMax = selectedCsr?.sectors[0]?.amount || 1;

  function styleFor(feature) {
    const isSelected = feature.properties.district === selected;
    const hasData = Boolean(matchDistrictKey(feature.properties.district, districtNames));
    return {
      weight: isSelected ? 2.5 : 1,
      color: "#1f4a44",
      fillOpacity: isSelected ? 0.75 : hasData ? 0.55 : 0.25,
      fillColor: isSelected ? FILL_SELECTED : hasData ? FILL_WITH_DATA : FILL_NO_DATA,
    };
  }

  function onEachFeature(feature, layer) {
    const name = feature.properties.district;
    layer.bindTooltip(name, { sticky: true, className: "gsr-district-tooltip" });
    layer.on({
      click: () => setSelected(name),
      mouseover: () => layer.setStyle({ weight: 2.5 }),
      mouseout: () => layer.setStyle(styleFor(feature)),
    });
  }

  if (status === "loading") {
    return (
      <div className="flex h-[320px] animate-pulse items-center justify-center bg-paper-deep text-sm text-ink-soft">
        Loading {stateName} district layout…
      </div>
    );
  }

  if (status !== "ready") {
    return (
      <p className="flex h-[160px] items-center justify-center text-sm text-ink-soft">
        District boundaries aren&rsquo;t available for {stateName} yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="gsr-india-map h-[380px] w-full border border-clay bg-paper">
        <MapContainer
          center={[22.9, 82]}
          zoom={6}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          dragging={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          attributionControl={false}
          className="h-full w-full"
        >
          <FitToLayer geojson={geojson} />
          {/* Remounted on selection change so onEachFeature's closures (used
              for hover/reset styling) always see the current `selected`. */}
          <GeoJSON key={`${stateId}-${selected}`} data={geojson} style={styleFor} onEachFeature={onEachFeature} />
        </MapContainer>
      </div>

      <div className="border border-clay bg-paper-deep p-5">
        {!selected && (
          <p className="text-sm leading-6 text-ink-soft">
            Click a district on the {stateName} map to see its CSR spend by
            development sector. Districts in{" "}
            <span className="font-medium text-banyan">banyan green</span> have
            project data on record; districts in grey don&rsquo;t.
          </p>
        )}

        {selected && !selectedCsr && (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">Selected district</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">{selected}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              No CSR projects are recorded for {selected} in the current dataset.
            </p>
          </>
        )}

        {selectedCsr && (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">Selected district</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">{selectedCsr.district}</h3>
            <p className="mt-2 font-mono text-2xl font-semibold text-banyan">{cr(selectedCsr.amount)}</p>
            <p className="text-xs text-ink-soft">
              {selectedCsr.projectCount.toLocaleString("en-IN")} projects ·{" "}
              {selectedCsr.companyCount.toLocaleString("en-IN")} companies
            </p>
            <ul className="mt-4 space-y-2 border-t border-clay pt-3">
              {selectedCsr.sectors.map((s) => (
                <li key={s.sector}>
                  <div className="flex justify-between gap-3 text-xs">
                    <span className="text-ink">{s.sector}</span>
                    <span className="shrink-0 font-mono text-ink-soft">{cr(s.amount)}</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-paper">
                    <div className="h-full bg-marigold" style={{ width: `${(s.amount / topSectorMax) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
