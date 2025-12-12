const rule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of console.log",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        const { callee } = node;

        if (
          callee &&
          callee.type === "MemberExpression" &&
          callee.object.name === "console" &&
          callee.property.name === "log"
        ) {
          context.report({ node, message: "Console call is forbidden!"});
        }
      },
    };
  },
};

export default rule;
