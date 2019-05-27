/**
 * ESLint 5.15.0 规则
 * ECMAScript 6
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 箭头函数体的风格
         * @see http://eslint.org/docs/rules/arrow-body-style
         */
        "arrow-body-style": "off",

        /**
         * 箭头函数头的风格
         * @see http://eslint.org/docs/rules/arrow-parens
         */
        "arrow-parens": ["error", "as-needed"],

        /**
         * 箭头函数的空格
         * @see http://eslint.org/docs/rules/arrow-spacing
         */
        "arrow-spacing": ["warn", {before: true, after: true}],

        /**
         * super 调用的校验
         * @see http://eslint.org/docs/rules/constructor-super
         */
        "constructor-super": "error",

        /**
         * generator 的风格
         * @see http://eslint.org/docs/rules/generator-star-spacing
         */
        "generator-star-spacing": ["error", {before: false, after: true}],

        /**
         * class 重复赋值
         * @see http://eslint.org/docs/rules/no-class-assign
         */
        "no-class-assign": "error",

        /**
         * 在条件判断中禁止箭头函数，=> 和 >= 容易混淆
         * @see http://eslint.org/docs/rules/no-confusing-arrow
         */
        "no-confusing-arrow": ["error", {allowParens: true}],

        /**
         * const 的重复赋值
         * @see http://eslint.org/docs/rules/no-const-assign
         */
        "no-const-assign": "error",

        /**
         * 重复的 class 方法名
         * @see http://eslint.org/docs/rules/no-dupe-class-members
         */
        "no-dupe-class-members": "error",

        /**
         * 禁止重复的 imports 引用
         * @see http://eslint.org/docs/rules/no-duplicate-imports
         */
        "no-duplicate-imports": "error",

        /**
         * 禁止通过 new 调用 Symbol
         * @see http://eslint.org/docs/rules/no-new-symbol
         */
        "no-new-symbol": "error",

        /**
         * 禁止 imports 限制的模块
         * @see http://eslint.org/docs/rules/no-restricted-imports
         */
        "no-restricted-imports": "off",

        /**
         * 在 this 之前调用 super
         * @see http://eslint.org/docs/rules/no-this-before-super
         */
        "no-this-before-super": "error",

        /**
         * 禁止没必要的计算 key
         * @see http://eslint.org/docs/rules/no-useless-computed-key
         */
        "no-useless-computed-key": "error",

        /**
         * 禁止没必要的构造函数
         * @see http://eslint.org/docs/rules/no-useless-constructor
         */
        "no-useless-constructor": "error",

        /**
         * 禁止不必要的重命名
         * @see http://eslint.org/docs/rules/no-useless-rename
         */
        "no-useless-rename": "error",

        /**
         * 在 es6 中禁止使用 var
         * @see http://eslint.org/docs/rules/no-var
         */
        "no-var": "error",

        /**
         * 对象的缩写
         * @see http://eslint.org/docs/rules/object-shorthand
         */
        "object-shorthand": ["error", "always", {avoidQuotes: true, ignoreConstructors: false}],

        /**
         * 优先回调中使用箭头函数
         * @see http://eslint.org/docs/rules/prefer-arrow-callback
         */
        "prefer-arrow-callback": ["error", {"allowNamedFunctions": true}],

        /**
         * 优先使用 const
         * @see http://eslint.org/docs/rules/prefer-const
         */
        "prefer-const": ["error", {destructuring: "all", ignoreReadBeforeAssign: true}],

        /**
         * 优先使用数组和对象解构
         * @see https://eslint.org/docs/rules/prefer-destructuring
         */
        "prefer-destructuring": "off",

        /**
         * 优先使用数字字面量
         * @see http://eslint.org/docs/rules/prefer-numeric-literals
         */
        "prefer-numeric-literals": "error",

        /**
         * 优先使用不定参数 ...argu 形式
         * @see http://eslint.org/docs/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",

        /**
         * 优先使用 spread
         * @see http://eslint.org/docs/rules/prefer-spread
         */
        "prefer-spread": "error",

        /**
         * 优先使用模板
         * @see http://eslint.org/docs/rules/prefer-template
         */
        "prefer-template": "off",

        /**
         * 在 generate 中使用 yield 关键字
         * @see http://eslint.org/docs/rules/require-yield
         */
        "require-yield": "off",

        /**
         * 解构的空格
         * @see http://eslint.org/docs/rules/rest-spread-spacing
         */
        "rest-spread-spacing": ["error", "never"],

        /**
         * imports 排序
         * @see http://eslint.org/docs/rules/sort-imports
         */
        "sort-imports": "off",

        /**
         * Symbol 调用添加描述
         * @see http://eslint.org/docs/rules/symbol-description
         */
        "symbol-description": "error",

        /**
         * 模板变量的空白符
         * @see http://eslint.org/docs/rules/template-curly-spacing
         */
        "template-curly-spacing": ["error", "never"],

        /**
         * yield 的 * 空白符
         * @see http://eslint.org/docs/rules/yield-star-spacing
         */
        "yield-star-spacing": ["error", {"before": false, "after": true}]
    }
};
