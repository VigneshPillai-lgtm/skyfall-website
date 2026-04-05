import http from 'http';
import { spawn } from 'child_process';

const SSE_URL = process.argv[2] || 'http://127.0.0.1:3845/sse';

console.error(`Connecting to Figma MCP SSE bridge: ${SSE_URL}...`);

// Use a simple fetch-like approach to connect to the SSE and bridge to stdin/stdout
const req = http.request(SSE_URL, (res) => {
  res.on('data', (chunk) => {
    const lines = chunk.toString().split('\n');
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        process.stdout.write(data + '\n');
      }
    }
  });
});

req.on('error', (e) => {
  console.error(`Error connecting to SSE: ${e.message}`);
  process.exit(1);
});

process.stdin.on('data', (chunk) => {
  // Bridge stdin to the /messages endpoint if needed
  // For simplicity, we assume the official mcp-remote bridge implementation is already robust
  // But since we can't run it via npx properly, we'll try to find its local path first.
});

req.end();

// Wait, I'll try to find the actual mcp-remote script in the global npm cache if possible
