#!/usr/bin/env node
import http from "http";
import { createReadStream, existsSync, statSync } from "fs";
import { extname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..", "dist");
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const url = req.url?.split("?")[0] ?? "/";
  const target = url === "/" ? join(root, "index.html") : join(root, url);
  if (existsSync(target) && statSync(target).isFile()) {
    const type = mime[extname(target)] ?? "text/plain";
    res.writeHead(200, { "Content-Type": type });
    createReadStream(target).pipe(res);
  } else if (existsSync(`${target}.html`)) {
    const file = `${target}.html`;
    res.writeHead(200, { "Content-Type": "text/html" });
    createReadStream(file).pipe(res);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Serving dist/ on http://localhost:${port}`);
});
