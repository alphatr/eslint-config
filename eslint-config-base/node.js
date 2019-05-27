/**
 * ESLint 5.15.0 规则
 * ESLint 核心规则
 * @type {Object}
 */

module.exports = {
    parser: "espree",
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: "script"
    },
    "extends": [
        "./rules/errors",
        "./rules/best-practices",
        "./rules/strict",
        "./rules/variables",
        "./rules/style",
        "./rules/node",
        "./rules/es6"
    ].map(require.resolve)
};
