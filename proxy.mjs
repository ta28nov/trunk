import http from "node:http";

const TARGET_PORT = 3001;
const LISTEN_PORT = 3000;

const server = http.createServer((clientReq, clientRes) => {
  const options = {
    hostname: "localhost",
    port: TARGET_PORT,
    path: clientReq.url,
    method: clientReq.method,
    headers: {
      ...clientReq.headers,
      host: `localhost:${TARGET_PORT}`,
    },
  };

  const proxyReq = http.request(options, (targetRes) => {
    clientRes.writeHead(targetRes.statusCode, targetRes.headers);
    targetRes.pipe(clientRes, { end: true });
  });

  proxyReq.on("error", (err) => {
    console.error("Proxy error:", err.message);
    clientRes.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    clientRes.end("Đang khởi động máy chủ Next.js trên cổng 3001, vui lòng làm mới trang sau giây lát...");
  });

  clientReq.pipe(proxyReq, { end: true });
});

server.listen(LISTEN_PORT, () => {
  console.log(`[Proxy] Chuyển tiếp cổng http://localhost:${LISTEN_PORT} -> http://localhost:${TARGET_PORT}`);
});
