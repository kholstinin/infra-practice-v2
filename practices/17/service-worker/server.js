import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/sw.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "public/sw.js"));
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/time", (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
