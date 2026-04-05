const app = require("express")();
const pino = require("pino-http")();

app.use(pino);

app.get("/", function (req, res) {
  req.log.info("something");
  res.send("hello world");
});

app.listen(4000);

[10, 10, 10, 100, 10, 1000];
