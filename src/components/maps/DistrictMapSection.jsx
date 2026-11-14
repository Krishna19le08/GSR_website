"use client";

import dynamic from "next/dynamic";
// Leaflet's stylesheet ships with the page CSS (not the lazily loaded map
// chunk), so it is in place before the map renders. Loaded only by the async
// chunk, the map could render unstyled for a moment and shift the layout.
import "leaflet/dist/leaflet.css";

// Leaflet touches `window` at import time — only ever render on the client.
const DistrictShapeMap = dynamic(() => import("./DistrictShapeMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] min-h-[320px] items-center justify-center bg-paper-deep text-sm text-ink-soft">
      Loading district layout…
    </div>
  ),
});

export default function DistrictMapSection({ stateId, districts }) {
  return <DistrictShapeMap stateId={stateId} districts={districts} />;
}
