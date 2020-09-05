const RuleTester = require("eslint").RuleTester
const rule = require("../../lib/rules/no-relative-imports")
const invalidCodeTest = require("../../utils").invalidCodeTest

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
})

const requireErrorMessage =
  "paths in require statements must be absolute, not relative"

ruleTester.run("no-relative-imports", rule, {
  valid: [
    'import foo from "foo"',
    'import bar from "foo/bar"',
    "import foo from 'foo'",
    "import bar from 'foo/bar'",
  ],
  invalid: [
    invalidCodeTest('import foo from "./foo"', requireErrorMessage),
    invalidCodeTest('import foo from "../foo"', requireErrorMessage),
    invalidCodeTest('import foo from "./../foo"', requireErrorMessage),
    invalidCodeTest('import foo from "../../foo"', requireErrorMessage),
    invalidCodeTest("import foo from './foo'", requireErrorMessage),
    invalidCodeTest("import foo from '../foo'", requireErrorMessage),
    invalidCodeTest("import foo from './../foo'", requireErrorMessage),
    invalidCodeTest("import foo from '../../foo'", requireErrorMessage),
  ],
})
