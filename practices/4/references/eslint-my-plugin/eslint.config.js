import { defineConfig } from "eslint/config";
import MyPlugin from "./eslint-my-plugin/index.js";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      myPlugin: MyPlugin,
    },
    rules: {
      "myPlugin/custom-rule": ["error", "someArgument"],
    },
  },
]);
