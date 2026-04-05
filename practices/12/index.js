import express from "express";

const app = express();

const path = import.meta.dirname;
const port = 8080;

app.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

app.get("/", function (req, res) {
  res.send('hello world');
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
