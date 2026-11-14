"use client";

// Choropleth of FY 2024-25 CSR spend per state / UT (data/csr/dynamic-csr-report.json),
// shaded on a sqrt scale so mid-sized states stay distinguishable next to
// Maharashtra. Leaflet needs `window`, so this is loaded with ssr:false by
// CsrSpendMapSection.jsx. Hover previews a state; click pins it.

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import { stateKey, colorFor } from "../../lib/csr-state-spend";

const INDIA_CENTER = [22.9, 82];
const INDIA_BOUNDS = [
  [6, 68],
  [38, 98],
];

export default function CsrSpendMap({ spendByKey, max, selectedKey, onSelect, onHover }) {
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/india-states.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("geojson fetch failed");
        return res.json();
      })
      .then((d) => !cancelled && setGeoData(d))
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  function styleFeature(feature) {
    const key = stateKey(feature.properties.ST_NM);
    const state = spendByKey.get(key);
    const fill = colorFor(state?.total, max);
    const selected = key === selectedKey;
    return {
      fillColor: fill ?? "#d9d2bd",
      fillOpacity: fill ? 0.9 : 0.4,
      color: selected ? "#c98a11" : "#f4efe4",
      weight: selected ? 2.5 : 1,
    };
  }

  function onEachFeature(feature, layer) {
    const key = stateKey(feature.properties.ST_NM);
    layer.on({
      click: () => onSelect?.(key),
      mouseover: (e) => {
        e.target.setStyle({ weight: 2.5, color: "#c98a11" });
        onHover?.(key);
      },
      mouseout: (e) => {
        e.target.setStyle(styleFeature(feature));
        onHover?.(null);
      },
    });
  }

  if (error) {
    return (
      <p className="flex h-full min-h-[320px] items-center justify-center text-sm text-ink-soft">
        Map data couldn&rsquo;t be loaded.
      </p>
    );
  }

  if (!geoData) {
    return (
      <div className="flex h-full min-h-[320px] animate-pulse items-center justify-center bg-paper-deep text-sm text-ink-soft">
        Loading map…
      </div>
    );
  }

  return (
    <div className="gsr-india-map h-full w-full">
      <MapContainer
        center={INDIA_CENTER}
        zoom={4}
        minZoom={4}
        maxZoom={7}
        bounds={INDIA_BOUNDS}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        attributionControl={false}
        className="h-full min-h-[420px] w-full"
      >
        {/* keyed on the pinned state (not hover, which would remount mid-hover) so the layer re-runs styleFeature (GeoJSON never re-styles on its own) */}
        <GeoJSON key={selectedKey || "none"} data={geoData} style={styleFeature} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
}
