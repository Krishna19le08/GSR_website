"use client";

import { preload } from "react-dom";
import { ImageMarkup } from "./responsive-image-markup";

// Priority (LCP) image: renders the image and a responsive
// <link rel="preload" as="image">. It is a client component on purpose, like
// next/image: during server rendering React still writes the preload and the
// <img> into the HTML, but the RSC payload only carries a component reference.
// An eager <img> or a preload() call inside a Server Component would add an
// image hint to the payload, so merely prefetching the route (e.g. the navbar
// links) would start downloading its hero image on unrelated pages.
export default function PriorityImage(props) {
  const { src, webpSet, avifSet, sizes } = props;
  preload(src, {
    as: "image",
    fetchPriority: "high",
    ...(avifSet || webpSet ? { imageSrcSet: avifSet ?? webpSet, imageSizes: sizes } : {}),
    ...(avifSet ? { type: "image/avif" } : {}),
  });
  return <ImageMarkup {...props} eager />;
}
