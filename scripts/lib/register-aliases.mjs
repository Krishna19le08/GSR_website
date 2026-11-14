// Usage: node --import ./scripts/lib/register-aliases.mjs scripts/<script>.mjs
import { register } from "node:module";

register("./alias-hooks.mjs", import.meta.url);
