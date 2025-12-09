import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["esm"],
  dts: false, // No type definitions needed for CLI
  splitting: false,
  sourcemap: false, // Keep bundle small
  clean: true,
  shims: true,
  minify: true, // Minify for distribution
  target: "node22",
  platform: "node",
  // Bundle everything - no external dependencies
  noExternal: [/.*/],
  esbuildOptions(options) {
    options.banner = {
      js: "#!/usr/bin/env node",
    };
  },
});
