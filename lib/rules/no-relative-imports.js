/**
 * @fileoverview Rule to prevent relative paths in import and require statement
 * @author Matt Burstein
 */

"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const errorMessage = "paths in import statements must be absolute, not relative"

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow relative path in import statements",
      category: "Stylistic issues",
      recommended: true,
      url:
        "https://github.com/MatthewBurstein/eslint-plugin-no-relative-imports/blob/master/README.md",
    },
    // TODO is fixable possible?
    // fixable: "code",
    schema: [],
  },
  create: function (context) {
    function isRelative(path) {
      return (
        path &&
        path.startsWith &&
        (path.startsWith("./") || path.startsWith("../"))
      )
    }

    return {
      ImportDeclaration: function (node) {
        const path = node.source.value
        if (isRelative(path)) {
          context.report({
            node,
            message: errorMessage,
          })
        }
      },
    }
  },
}
