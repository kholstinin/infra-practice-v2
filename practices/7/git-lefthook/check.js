import fs from "node:fs";

fs.writeFileSync("./result.txt", process.argv.toString().replaceAll(",", "\n"));
