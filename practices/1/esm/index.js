import { add } from "./utils.js";

import data from './data.json' with { type: 'json' };

console.log(import.meta.dirname, import.meta.filename);

console.log(add(5, 5), data);
