import { parse } from 'acorn';
import fs from "node:fs";

const code = fs.readFileSync("./code.js", "utf-8");
const ast = parse(code);

console.log(ast);
