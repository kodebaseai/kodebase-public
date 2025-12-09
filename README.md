# Kodebase

AI-powered project planning and implementation guidance through the Model Context Protocol (MCP).

## Quick Start

```bash
# Start the MCP server in your project directory
npx kodebase

# Or install globally
npm i -g kodebase
kodebase
```

## What is Kodebase?

Kodebase provides MCP tools that help AI assistants (Claude, Cursor, etc.) guide you through:

- **Scout**: Planning and spec creation - transform ideas into structured artifacts
- **Sherpa**: Implementation guidance - get context, quality gates, and next steps

## Configuration

### Claude Code

Add to your `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "kodebase": {
      "command": "npx",
      "args": ["kodebase"]
    }
  }
}
```

### Cursor

Add to your `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "kodebase": {
      "command": "npx",
      "args": ["kodebase"]
    }
  }
}
```

## Environment Variables

- `KODEBASE_PROJECT_ROOT` - Project root directory (defaults to current working directory)

## Learn More

- [Documentation](https://kodebase.ai/docs)
- [GitHub](https://github.com/kodebaseai/kodebase)

## License

MIT
