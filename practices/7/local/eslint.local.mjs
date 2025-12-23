import base from "./eslint.base.mjs";

export default [
  ...base,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      eqeqeq: "warn",
      curly: "warn",
    },
  },
];
