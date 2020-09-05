function invalidCodeTest(code, errorMessage) {
  return {
    code: code,
    errors: [errorMessage],
  }
}

module.exports = {
  invalidCodeTest: invalidCodeTest,
}
