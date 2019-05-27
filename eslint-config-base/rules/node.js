/**
 * ESLint 5.15.0 规则
 * Node.js 和 CommonJS 中使用
 * @type {Object}
 */

module.exports = {
    env: {
        node: true
    },

    rules: {
        /**
         * 必须返回 callback
         * @see http://eslint.org/docs/rules/callback-return
         */
        "callback-return": ["warn", ["callback", "cb", "next"]],

        /**
         * 必须在全局中使用 require
         * @see http://eslint.org/docs/rules/global-require
         */
        "global-require": "off",

        /**
         *  必须对 error 进行处理
         * @see http://eslint.org/docs/rules/handle-callback-err
         */
        "handle-callback-err": ["warn", "^(err|error)$"],

        /**
         *  `Buffer` 不允许使用 `new Buffer()` 来调用，请使用 `Buffer.alloc`、`Buffer.from` 等方法
         * @see https://eslint.org/docs/rules/no-buffer-constructor
         */
        "no-buffer-constructor": "warn",

        /**
         * 不能混用 require
         * @see http://eslint.org/docs/rules/no-mixed-requires
         */
        "no-mixed-requires": "warn",

        /**
         * 不能在 require 上直接调用 new
         * @see http://eslint.org/docs/rules/no-new-require
         */
        "no-new-require": "off",

        /**
         * 对 path 不能使用直接拼接
         * @see http://eslint.org/docs/rules/no-path-concat
         */
        "no-path-concat": "warn",

        /**
         * node 中禁止直接调用 process.env ，建议使用配置的方式
         * @see http://eslint.org/docs/rules/no-process-env
         */
        "no-process-env": "warn",

        /**
         * 禁止使用 process.exit()
         * @see http://eslint.org/docs/rules/no-process-exit
         */
        "no-process-exit": "off",

        /**
         * 禁止使用的模块
         * @see http://eslint.org/docs/rules/no-restricted-modules
         */
        "no-restricted-modules": "off",

        /**
         * 禁止使用同步函数
         * @see http://eslint.org/docs/rules/no-sync
         */
        "no-sync": "warn"
    }
};
