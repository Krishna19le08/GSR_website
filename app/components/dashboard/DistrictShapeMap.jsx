"use client";

// Renders a state's district boundaries (public/data/districts/<stateId>.json)
// as a clickable Leaflet map: hover previews the district name, click loads
// its CSR spend detail (matched from the `districts` prop — the same
// district-level CSR data as DistrictBreakdown, computed server-side by
// app/data/districts-data.js) into the panel beside the map.
//
// Boundary source (MIT licensed): github.com/guneetnarula/indian-district-boundaries.
// It doesn't cover every district exactly as CSR-report district names are
// spelled, and a few newer districts (post ~2019 splits/renames) have no
// polygon at all — see app/lib/district-geo.js for how names are matched,
// and DistrictBreakdown for the full searchable list as a fallback.

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useState } from "react";
import { GeoJSON, MapContainer, useMap } from "react-leaflet";
import { matchDistrictKey } from "../../lib/district-geo";

const inr = (n) => `₹${n.toLocaleString("en-IN")} Cr`;

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

export default function DistrictShapeMap({ stateId, districts }) {
  const [geojson, setGeojson] = useState(null);
  const [status, setStatus] = useState("loading");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setSelected(null);
    fetch(`/data/districts/${stateId}.json`)
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

  const districtNames = useMemo(() => districts.map((d) => d.name), [districts]);

  const selectedCsr = useMemo(() => {
    if (!selected) return null;
    const matchedName = matchDistrictKey(selected, districtNames);
    return districts.find((d) => d.name === matchedName) ?? null;
  }, [selected, districts, districtNames]);

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
      <div className="flex h-full min-h-[320px] animate-pulse items-center justify-center bg-paper-deep text-sm text-ink-soft">
        Loading district layout…
      </div>
    );
  }

  if (status !== "ready") {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center bg-paper-deep text-sm text-ink-soft">
        District boundaries aren&rsquo;t available for this state yet.
      </div>
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
            Click a district on the map to see its CSR fund spend by
            development sector. Districts in{" "}
            <span className="font-medium text-banyan">banyan green</span> have
            CSR data on record; districts in grey don&rsquo;t yet.
          </p>
        )}

        {selected && !selectedCsr && (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">Selected district</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">{selected}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              No CSR spend has been recorded for {selected} in the current dataset.
            </p>
          </>
        )}

        {selectedCsr && (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">Selected district</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">{selectedCsr.name}</h3>
            <span
              className={`mt-2 inline-flex items-center border px-2 py-0.5 text-xs font-medium ${
                selectedCsr.type === "Aspirational"
                  ? "border-marigold-deep/40 text-marigold-deep"
                  : "border-clay text-ink-soft"
              }`}
            >
              {selectedCsr.type}
            </span>
            <p className="mt-3 font-mono text-2xl font-semibold text-banyan">{inr(selectedCsr.totalCr)}</p>
            <p className="text-xs text-ink-soft">CSR spend, all years on record</p>
            <ul className="mt-4 space-y-1.5 border-t border-clay pt-3">
              {selectedCsr.sectors.map((sector) => (
                <li key={sector.key} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-ink-soft">{sector.label}</span>
                  <span className="font-mono tabular-nums text-ink">{inr(sector.amountCr)}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
