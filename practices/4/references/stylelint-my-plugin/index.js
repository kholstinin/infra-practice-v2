const stylelint = require("stylelint");

const ruleName = "myplugin/no-red-color";
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: "Usage of 'red' color is not allowed",
});

const rule = stylelint.createPlugin(
  ruleName,
  (primaryOption, secondaryOptions, context) => {
    return (root, result) => {
      const validOptions = stylelint.utils.validateOptions(result, ruleName, {
        actual: primaryOption,
        possible: [true],
      });

      if (!validOptions) return;

      root.walkDecls((decl) => {
        if (decl.value.includes("red")) {
          stylelint.utils.report({
            message: messages.rejected,
            ruleName,
            node: decl,
            result,
            word: "red",
          });
        }
      });
    };
  }
);

rule.ruleName = ruleName;
rule.messages = messages;

module.exports = rule;
