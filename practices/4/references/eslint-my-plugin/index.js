import customRule from "./rule.js";

const plugin = {
  meta: {
    name: "myPlugin",
  },
  rules: { "custom-rule": customRule },
};

export default plugin;
