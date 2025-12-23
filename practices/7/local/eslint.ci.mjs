import base from "./eslint.base.mjs";

export default [
  ...base,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": "error",
      "no-debugger": "error",
      eqeqeq: ["error", "always"],
      curly: "error",
      "consistent-return": "error",
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
