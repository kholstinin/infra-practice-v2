import express from "express";
import client from "prom-client";

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.3, 0.5, 1, 1.5, 2], // 
});

const requestsCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route"],
});

register.registerMetric(httpRequestDuration);
register.registerMetric(requestsCounter);

app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on("finish", () => {
    end({ method: req.method, route: req.path, status_code: res.statusCode });
    requestsCounter.inc({ method: req.method, route: req.path });
  });
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Observability!");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
