import express from "express";
import path from "node:path";
import fs from 'node:fs';
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json({ type: ["application/json", "application/csp-report"] }));

app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString("base64");
  res.locals.nonce = nonce;

  res.setHeader(
    "Content-Security-Policy",
    `
      default-src 'none';
      script-src 'nonce-${nonce}';
      style-src 'self';
      img-src 'self';
      connect-src 'self';
      report-uri /csp-report;
    `.replace(/\s+/g, " ")
  );

  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const html = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  res.send(html.replaceAll('__NONCE__', res.locals.nonce));
});

app.post("/csp-report", (req, res) => {
  console.dir(req.body, { depth: null });

  res.status(204).end();
});

app.listen(3000, () =>
  console.log("CSP demo started → http://localhost:3000")
);
