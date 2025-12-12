"use strict";

import rule from "./rule.js";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester();

ruleTester.run("my-rule", rule, {
  valid: [
    {
      code: "const a = 5",
    },
  ],

  invalid: [
    {
      code: "console.log(5)",
      errors: [{ message: "Console call is forbidden!" }],
    },
  ],
});
