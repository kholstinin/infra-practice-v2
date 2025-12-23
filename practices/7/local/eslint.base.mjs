import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      react: pluginReact,
      import: pluginImport,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "react/prop-types": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
