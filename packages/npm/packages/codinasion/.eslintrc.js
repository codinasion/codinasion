/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@codinasion/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
};
