// Shared <img>/<picture> markup for ResponsiveImage (server) and
// PriorityImage (client). No hooks, no directive: importable from both.

const FILL_STYLE = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  color: "transparent",
};

export function ImageMarkup({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  webpSet,
  avifSet,
  eager,
  className,
  style,
}) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={webpSet}
      sizes={webpSet ? sizes : undefined}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={className}
      style={fill ? { ...FILL_STYLE, ...style } : style}
    />
  );
  if (!avifSet) return img;
  return (
    <picture>
      <source type="image/avif" srcSet={avifSet} sizes={sizes} />
      {img}
    </picture>
  );
}
