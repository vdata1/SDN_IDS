// vulnerable-server.ts
// Intentionally insecure demonstration — NOT for production.

const server = Bun.serve({
  hostname: "127.0.0.1",
  port: 8080,

  // VULNERABILITY: disable Bun's connection idle timeout.
  idleTimeout: 0,

  // Retain a body-size limit. This does not prevent slow,
  // incomplete uploads that stay below the limit.
  maxRequestBodySize: 1024 * 1024,

async fetch(req) {
    try {
      if (req.body) {
        const reader = req.body.getReader();

        try {
          while (true) {
            // VULNERABILITY: no request-body completion deadline.
            const { done } = await reader.read();
            if (done) break;

            // Discard received chunks rather than accumulating them.
          }
        } finally {
          reader.releaseLock();
        }
      }

      return new Response("Request completed.\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    } catch {
      return new Response("Request failed.\n", { status: 400 });
    }
  },
});

console.log(`Intentionally vulnerable: ${server.url}`);