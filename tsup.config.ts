import { defineConfig } from "tsup";

// ESM bundles need a real require() for dependencies that use dynamic require
// (e.g., yaml's binary tag handler). createRequire provides this.
const esmRequireShim = `import{createRequire as __cr}from'node:module';const require=__cr(import.meta.url);`;

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["esm"],
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  shims: false, // MUST be false - tsup's shims break dynamic require in ESM
  minify: true,
  target: "node22",
  platform: "node",
  noExternal: [/.*/],
  esbuildOptions(options) {
    options.banner = {
      ...options.banner,
      js: `#!/usr/bin/env node\n${esmRequireShim}`,
    };
  },
});
