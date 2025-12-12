const rule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of console.log",
    },
    schema: ["string"],
    fixable: "code",
  },
  create(context) {
    console.log(context.options);

    return {
      CallExpression(node) {
        const { callee } = node;

        if (
          callee &&
          callee.type === "MemberExpression" &&
          callee.object.name === "console" &&
          callee.property.name === "log"
        ) {
          context.report({
            node,
            message: "Console call is forbidden!",
            fix: (fixer) => {
              return fixer.removeRange(node.parent.range);
            },
          });
        }
      },
    };
  },
};

export default rule;
