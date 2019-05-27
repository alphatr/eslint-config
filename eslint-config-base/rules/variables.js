/**
 * ESLint 5.15.0 规则
 * 变量 Variables
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 在声明处初始化
         * @see http://eslint.org/docs/rules/init-declarations
         */
        "init-declarations": ["warn", "always"],

        /**
         * 禁止删除变量
         * @see http://eslint.org/docs/rules/no-delete-var
         */
        "no-delete-var": "error",

        /**
         * 禁止 label 变量
         * @see http://eslint.org/docs/rules/no-label-var
         */
        "no-label-var": "error",

        /**
         * 禁止特性全局变量
         * @see http://eslint.org/docs/rules/no-restricted-globals
         */
        "no-restricted-globals": "error",

        /**
         * 禁止定义父级已有的变量
         * @see http://eslint.org/docs/rules/no-shadow
         */
        "no-shadow": "off",

        /**
         * 禁止重新定义 native 的变量，NaN，Infinity 等
         * @see http://eslint.org/docs/rules/no-shadow-restricted-names
         */
        "no-shadow-restricted-names": "error",

        /**
         * 禁止未定义的调用
         * @see http://eslint.org/docs/rules/no-undef
         */
        "no-undef": "error",

        /**
         * 禁止使用 undefined 来初始化
         * @see http://eslint.org/docs/rules/no-undef-init
         */
        "no-undef-init": "error",

        /**
         * 禁止给 undefined 定义
         * @see http://eslint.org/docs/rules/no-undefined
         */
        "no-undefined": "error",

        /**
         * 禁止定义而未使用
         * @see http://eslint.org/docs/rules/no-unused-vars
         */
        "no-unused-vars": ["error", {vars: "local", args: "after-used"}],

        /**
         * 禁止在定义前使用
         * @see http://eslint.org/docs/rules/no-use-before-define
         */
        "no-use-before-define": "error"
    }
};
