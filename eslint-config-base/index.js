/**
 * ESLint 5.15.0 规则
 * ESLint 核心规则
 * @type {Object}
 */

module.exports = {
    parser: "espree",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    "extends": [
        "./rules/errors",
        "./rules/best-practices",
        "./rules/strict",
        "./rules/variables",
        "./rules/style",
        "./rules/es6"
    ].map(require.resolve)
};
