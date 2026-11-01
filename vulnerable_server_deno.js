
Deno.serve(
  {
    hostname: "127.0.0.1",
    port: 8080,
  },
  async (req) => {
    try {
      if (req.body) {
        const reader = req.body.getReader();

        try {
          while (true) {
            // VULNERABILITY: no application-level deadline.
            // A slow client can keep this handler waiting for more data.
            const { done } = await reader.read();
            if (done) break;

            // Discard chunks rather than accumulating them in memory.
            // VULNERABILITY: no total request-body size limit.
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
);