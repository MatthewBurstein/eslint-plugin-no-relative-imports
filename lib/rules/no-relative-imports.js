/**
 * @fileoverview Rule to prevent relative paths in import and require statement
 * @author Matt Burstein
 */

"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",

    // TODO do I need this section?
    docs: {
      description: "disallow relative path in require and import statements",
      category: "Stylistic issues",
      recommended: true,
      // TODO link to readme of this plugin?
      url: "https://eslint.org/docs/rules/no-extra-semi",
    },
    fixable: "code",
    schema: [],
  },
  create: function (context) {
    return {
      // callback functions
    }
  },
}
