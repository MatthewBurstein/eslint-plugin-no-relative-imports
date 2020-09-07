const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-relative-imports")
const invalidCodeTest = require("../../utils").invalidCodeTest

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
})

const errorMessage = "paths in import statements must be absolute, not relative"

ruleTester.run("no-relative-imports", rule, {
  valid: [
    'import foo from "foo"',
    'import bar from "foo/bar"',
    "import foo from 'foo'",
    "import bar from 'foo/bar'",
  ],
  invalid: [
    invalidCodeTest('import foo from "./foo"', errorMessage),
    invalidCodeTest('import foo from "../foo"', errorMessage),
    invalidCodeTest('import foo from "./../foo"', errorMessage),
    invalidCodeTest('import foo from "../../foo"', errorMessage),
    invalidCodeTest("import foo from './foo'", errorMessage),
    invalidCodeTest("import foo from '../foo'", errorMessage),
    invalidCodeTest("import foo from './../foo'", errorMessage),
    invalidCodeTest("import foo from '../../foo'", errorMessage),
  ],
})
