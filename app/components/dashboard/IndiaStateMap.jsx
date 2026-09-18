"use client";

// A choropleth of India's states and union territories, colored by
// State Rating Protocol tier. Clicking a state navigates to that
// state's fund grantee detail page — this map is a router, not a preview.
// Leaflet touches `window` at import time, so it can only ever render
// client-side (see IndiaStateMapSection.jsx for the ssr:false boundary),
// and the GeoJSON is fetched at runtime rather than bundled, since it's a
// ~90KB static asset the page doesn't need until this section is visible.

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MapContainer, GeoJSON } from "react-leaflet";
import { getTier } from "../../lib/rating";
import { stateIdFromGeoName } from "../../lib/state-geo";

const INDIA_CENTER = [22.9, 82];
const INDIA_BOUNDS = [
  [6, 68],
  [38, 98],
];

export default function IndiaStateMap({
  statesById,
  basePath = "/csr-tracker",
  activeTier = null,
  onHoverState,
}) {
  const router = useRouter();
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/india-states.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("geojson fetch failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setGeoData(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function styleFeature(feature) {
    const id = stateIdFromGeoName(feature.properties.ST_NM);
    const state = statesById.get(id);
    const tier = getTier(state?.score ?? 0);
    const dimmed = activeTier && tier.id !== activeTier;
    return {
      fillColor: tier.color,
      fillOpacity: !state ? 0.15 : dimmed ? 0.12 : 0.65,
      color: "#f4efe4",
      weight: 1,
    };
  }

  function onEachFeature(feature, layer) {
    const id = stateIdFromGeoName(feature.properties.ST_NM);
    const state = statesById.get(id);
    if (state?.abbr) {
      layer.bindTooltip(state.abbr, {
        permanent: true,
        direction: "center",
        className: "gsr-state-label",
      });
    }
    layer.on({
      click: () => {
        if (state) router.push(`${basePath}/${state.id}`);
      },
      mouseover: (e) => {
        e.target.setStyle({ weight: 2.5, fillOpacity: 0.92 });
        if (state) onHoverState?.(state.id);
      },
      mouseout: (e) => {
        e.target.setStyle(styleFeature(feature));
        onHoverState?.(null);
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
        {/* keyed on activeTier so the whole layer remounts and re-runs styleFeature
            when the tier filter changes — GeoJSON otherwise never re-styles */}
        <GeoJSON key={activeTier || "all"} data={geoData} style={styleFeature} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
}
