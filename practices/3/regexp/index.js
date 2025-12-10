import fs from "node:fs";

const code = fs.readFileSync("./code.js", "utf-8");

const changedCode = code.replaceAll("value", "newValue");

fs.writeFileSync("./code.js", changedCode);
