import { createServer } from "@agentai/mcp-server";

const PORT = process.env.PORT || 10000;

createServer().listen(PORT, () => {
  console.log(`✅ MCP Server is running on port ${PORT}`);
});
