"use client";

// Leaflet touches `window` at import time, so this component can only ever
// render on the client: a flat, pannable slippy map (OpenStreetMap tiles)
// showing the GSR member directory.

import "leaflet/dist/leaflet.css";
import { useEffect, useImperativeHandle, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";

export const MIN_ZOOM = 2;
export const MAX_ZOOM = 18;
export const FOCUS_ZOOM = 14; // zoom level used when flying to a single member
export const DEFAULT_VIEW = { center: [18, 12], zoom: MIN_ZOOM }; // world-fit starting view
// Web Mercator is undefined past ±85° latitude — cap vertical panning there
// so dragging up/down never reveals blank space beyond the tiles. Longitude
// uses the real -180/180 range (not ±Infinity) because Leaflet's maxBounds
// clamping breaks with infinite values, letting drags past the pole slip
// through and reveal blank space; worldCopyJump still handles horizontal
// wrapping past ±180.
const MAX_BOUNDS = [
  [-85, -180],
  [85, 180],
];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function buildMarkerIcon(member, { selected }) {
  const html = `
    <div class="gsr-globe-marker${selected ? " gsr-globe-marker--selected" : ""}">
      <span class="gsr-globe-marker__dot" aria-hidden="true">
        <span class="gsr-globe-marker__ping"></span>
        <span class="gsr-globe-marker__core"></span>
      </span>
      <span class="gsr-globe-marker__label">
        <span class="city">${escapeHtml(member.city)}</span>
        <span class="country">${escapeHtml(member.country)}</span>
      </span>
      <span class="gsr-globe-marker__tooltip" role="tooltip">
        <strong>${escapeHtml(member.name)}</strong>
        <span>${escapeHtml(member.organization)}</span>
        <span>📍 ${escapeHtml(member.city)}, ${escapeHtml(member.country)}</span>
      </span>
    </div>
  `;
  return L.divIcon({
    html,
    className: "gsr-leaflet-icon",
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

// Bridges the imperative Leaflet map instance out to the parent's ref, since
// react-leaflet only exposes it via the useMap() hook inside <MapContainer>.
function MapController({ mapRef, onBackgroundClick, onZoomChange }) {
  const map = useMap();

  useMapEvents({
    zoomend: () => onZoomChange?.(map.getZoom(), map.getCenter()),
    moveend: () => onZoomChange?.(map.getZoom(), map.getCenter()),
  });

  useEffect(() => {
    mapRef.current = map;
    map.on("click", () => onBackgroundClick?.());
    return () => {
      map.off("click");
      if (mapRef.current === map) mapRef.current = null;
    };
  }, [map, mapRef, onBackgroundClick]);

  return null;
}

export default function LeafletMap({
  members,
  selectedId,
  onMarkerClick,
  onBackgroundClick,
  onZoomChange,
  initialView,
  ref,
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!initialView) return;
    mapRef.current?.setView(initialView.center, initialView.zoom, { animate: false });
  }, [initialView]);

  useImperativeHandle(
    ref,
    () => ({
      goTo(member, zoom = FOCUS_ZOOM, duration = 1.5) {
        const map = mapRef.current;
        if (!map || !member) return;
        map.flyTo([member.latitude, member.longitude], zoom, {
          duration,
          easeLinearity: 0.15,
        });
      },
      zoomIn() {
        mapRef.current?.zoomIn(1, { duration: 1.2, easeLinearity: 0.15 });
      },
      zoomOut() {
        mapRef.current?.zoomOut(1, { duration: 1.2, easeLinearity: 0.15 });
      },
      reset(duration = 1.5) {
        mapRef.current?.flyTo(DEFAULT_VIEW.center, DEFAULT_VIEW.zoom, {
          duration,
          easeLinearity: 0.15,
        });
      },
    }),
    [],
  );

  return (
    <MapContainer
      center={initialView?.center ?? DEFAULT_VIEW.center}
      zoom={initialView?.zoom ?? DEFAULT_VIEW.zoom}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      worldCopyJump
      zoomControl={false}
      attributionControl={false}
      maxBounds={MAX_BOUNDS}
      maxBoundsViscosity={1.0}
      className="h-full w-full bg-[#0b1120]"
    >
      <MapController mapRef={mapRef} onBackgroundClick={onBackgroundClick} onZoomChange={onZoomChange} />
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {members.map((member) => (
        <Marker
          key={member.id}
          position={[member.latitude, member.longitude]}
          icon={buildMarkerIcon(member, { selected: member.id === selectedId })}
          eventHandlers={{
            click: (event) => {
              L.DomEvent.stopPropagation(event);
              onMarkerClick?.(member);
            },
          }}
        />
      ))}
    </MapContainer>
  );
}
