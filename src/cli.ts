/**
 * Kodebase MCP Server CLI
 *
 * Entry point for the `kodebase` command that starts the MCP server.
 * The server auto-detects the project root from the current working directory.
 *
 * @example
 * ```bash
 * # Start MCP server in current directory
 * npx kodebase
 *
 * # Or install globally
 * npm i -g kodebase
 * kodebase
 * ```
 */

import { startServer } from "@kodebase/mcp-server";

// Start the MCP server
// KODEBASE_PROJECT_ROOT defaults to process.cwd() in mcp-server
await startServer();
