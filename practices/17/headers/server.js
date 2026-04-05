import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import etag from "etag";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("etag", false);

app.get("/app.js", (req, res) => {
  res.setHeader("Cache-Control", "max-age=31536000");
  res.sendFile(path.join(__dirname, "public/app.js"), {
    lastModified: false,
  });
});

app.get("/main.1234.js", (req, res) => {
  // Expires: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
  res.setHeader("Expires", "Wed, 21 Oct 2026 07:28:00 GMT");
  res.sendFile(path.join(__dirname, "public/main.1234.js"), {
    cacheControl: false,
    lastModified: false,
  });
});

app.get("/", (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(__dirname, "public/index.html"), {
    cacheControl: false,
    lastModified: false,
  });
});

app.get("/api/time", (req, res) => {
  // const data = { time: new Date().toISOString() };
  const data = { time: "some time" };

  const body = JSON.stringify(data);
  const generatedEtag = etag(body);

  if (req.headers["if-none-match"] === generatedEtag) {
    return res.status(304).end();
  }

  res.setHeader("ETag", generatedEtag);
  res.setHeader("Cache-Control", "no-cache");

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running: http://localhost:3000");
});
