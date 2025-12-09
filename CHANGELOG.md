# kodebase

## 0.3.0

### Minor Changes

- [`643f5cf`](https://github.com/kodebaseai/kodebase/commit/643f5cfc724ea61fca62941bcd9514a4d3db27c3) Thanks [@migcarva](https://github.com/migcarva)! - Bundle the `kb` CLI into the kodebase npm package. Users now get both commands from a single install:
  - `kodebase` - MCP server for AI assistants
  - `kb` - CLI for project management (init, start, status, etc.)

## 0.2.1

### Patch Changes

- [`bea1938`](https://github.com/kodebaseai/kodebase/commit/bea1938119b36358b2e926d9c2abd264fac058d2) Thanks [@migcarva](https://github.com/migcarva)! - Fix ESM dynamic require error when running `kodebase` CLI

  - Disable tsup shims to prevent esbuild from generating a broken require shim
  - Add createRequire banner to provide proper require() support for dependencies that need it (like yaml's binary tag handler)
  - This fixes the "Dynamic require of X is not supported" error that occurred when running the globally installed CLI

## 0.2.0

### Minor Changes

- [#412](https://github.com/kodebaseai/kodebase/pull/412) [`84aaca6`](https://github.com/kodebaseai/kodebase/commit/84aaca6174877661895627314d00a29f2cdd0cc7) Thanks [@migcarva](https://github.com/migcarva)! - Initial release of kodebase npm wrapper package for frictionless distribution.

  - Bundles @kodebase/mcp-server and all dependencies into single file
  - Enables `npx kodebase` for quick MCP server start
  - Auto-detects project root from current working directory
