import express from "express";
import pino from "pino";
import createWriteStream from "pino-elasticsearch";

const stream = createWriteStream({
  node: "http://elasticsearch:9200",
  index: "node-logs",
  flushBytes: 1000,
});

const logger = pino({}, stream);
const app = express();

app.get("/", (req, res) => {
  logger.info("Home page visited");
  res.send("Hello world");
});

app.get("/error", (req, res) => {
  logger.error("Something bad happened");
  res.status(500).send("Oops");
});

app.listen(8081, () => {
  logger.info("Server started on 8081");
});
