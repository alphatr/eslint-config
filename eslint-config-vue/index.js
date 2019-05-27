module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2019,
        sourceType: "module",
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true
        },
        requireConfigFile: false,
        allowImportExportEverywhere: false
    },
    plugins: ["vue"],
    "extends": [
        "@alphatr/eslint-config-base",
        "./rules/essential.js",
        "./rules/strongly-recommended.js",
        "./rules/recommended.js",
        "./rules/uncategorized.js"
    ].map(require.resolve)
};
