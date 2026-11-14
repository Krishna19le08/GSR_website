// Node module hooks so build scripts can import the app's server-side code
// in src/lib (which uses the jsconfig aliases and extensionless imports, as
// bundled by Next.js). Registered by ./register-aliases.mjs.
//   @/x      -> src/x
//   @data/x  -> data/x
//   extensionless relative/aliased specifiers -> .js / .jsx / .mjs / index.js
//   .json    -> loaded as an ES module default export (no import attribute)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "..", "..", "..");
const ALIASES = { "@/": path.join(ROOT, "src") + path.sep, "@data/": path.join(ROOT, "data") + path.sep };
const EXTS = ["", ".js", ".jsx", ".mjs", ".json", "/index.js"];

function withExtension(base) {
  for (const ext of EXTS) {
    const p = base + ext;
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  return null;
}

export async function resolve(specifier, context, next) {
  for (const [alias, dir] of Object.entries(ALIASES)) {
    if (specifier.startsWith(alias)) {
      const file = withExtension(dir + specifier.slice(alias.length));
      if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
    }
  }
  if ((specifier.startsWith("./") || specifier.startsWith("../")) && context.parentURL?.startsWith("file:")) {
    const base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
    const file = withExtension(base);
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  }
  return next(specifier, context);
}

export async function load(url, context, next) {
  if (url.endsWith(".json")) {
    const json = fs.readFileSync(fileURLToPath(url), "utf8");
    return { format: "module", source: `export default ${json};`, shortCircuit: true };
  }
  if (url.startsWith("file:") && /\.(js|jsx)$/.test(url) && url.includes("/src/")) {
    // App code is ESM without "type": "module" in package.json.
    return { format: "module", source: fs.readFileSync(fileURLToPath(url), "utf8"), shortCircuit: true };
  }
  return next(url, context);
}
