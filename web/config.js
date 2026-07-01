// Per-site configuration. Only this file (plus the <title>/meta in index.html)
// differs between the Codex and Claude sites.
window.SITE = {
  client: "Codex",
  title: "Awesome Codex MCP Servers",
  tagline: "A searchable catalog of Model Context Protocol servers for OpenAI Codex — CLI, IDE extension, and cloud.",
  repo: "https://github.com/Kuberwastaken/awesome-codex-mcp-servers",
  accent: "#10a37f",
  sibling: {
    prompt: "On Claude?",
    label: "awesome-claude-mcp-servers",
    href: "https://github.com/Kuberwastaken/awesome-claude-mcp-servers",
  },
  // A ready-to-adapt config skeleton for a given server. Placeholders are
  // intentional — the exact command/URL lives in each server's repo.
  snippet(server) {
    const remote = (server.runs || "").includes("remote");
    if (remote) {
      return [
        `# ~/.codex/config.toml — remote (streamable HTTP)`,
        `[mcp_servers.${server.id}]`,
        `url = "<server-url>"   # see ${server.url}`,
      ].join("\n");
    }
    return [
      `# ~/.codex/config.toml — local (stdio)`,
      `[mcp_servers.${server.id}]`,
      `command = "npx"`,
      `args = ["-y", "<package>"]   # see ${server.url}`,
    ].join("\n");
  },
  badge:
    "https://img.shields.io/badge/Awesome-Codex%20MCP-10a37f?style=flat-square",
};
