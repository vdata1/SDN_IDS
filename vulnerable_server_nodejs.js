// Requires Node.js 18+.

"use strict";

const http = require("node:http");

const server = http.createServer(
  {
    // VULNERABILITY: no deadline for receiving complete HTTP headers.
    headersTimeout: 0,

    // VULNERABILITY: no deadline for receiving the entire request.
    requestTimeout: 0,
  },
  (req, res) => {
    // Consume incoming data without buffering it in application memory.
    req.resume();

    // A client that declares a request body but never finishes sending it
    // can leave this request pending indefinitely.
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Request completed.\n");
    });

    req.on("error", () => {
      res.destroy();
    });
  }
);

// VULNERABILITY: no socket inactivity timeout.
server.setTimeout(0);

// No application-level connection limits or per-client quotas.

server.listen(8080, "127.0.0.1", () => {
  console.log("Intentionally vulnerable: http://127.0.0.1:8080");
});
