const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

const html = fs.readFileSync("./index.html", "utf-8");

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
