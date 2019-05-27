/**
 * ESLint-Vue 5.2.0 规则
 * 未分类 Uncategorized
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 数组前后的空格
         * @see https://eslint.vuejs.org/rules/array-bracket-spacing.html
         */
        "vue/array-bracket-spacing": ["warn", "never"],

        /**
         * 箭头函数的空格
         * @see https://eslint.vuejs.org/rules/arrow-spacing.html
         */
        "vue/arrow-spacing": ["warn", {before: true, after: true}],

        /**
         * 花括号内侧的空格
         * @see https://eslint.vuejs.org/rules/block-spacing.html
         */
        "vue/block-spacing": ["warn", "always"],

        /**
         * 花括号换行方式
         * @see https://eslint.vuejs.org/rules/brace-style.html
         */
        "vue/brace-style": ["warn", "1tbs", {allowSingleLine: true}],

        /**
         * 驼峰式
         * @see https://eslint.vuejs.org/rules/camelcase.html
         */
        "vue/camelcase": ["warn", {"properties": "always"}],

        /**
         * 数组或对象的尾部禁止添加逗号
         * @see https://eslint.vuejs.org/rules/comma-dangle.html
         */
        "vue/comma-dangle": "error",

        /**
         * 模板中组件名风格
         * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
         */
        "vue/component-name-in-template-casing": "warn",

        /**
         * 属性前面的 . 和属性之间禁止换行
         * @see https://eslint.vuejs.org/rules/dot-location.html
         */
        "vue/dot-location": ["error", "property"],

        /**
         * 使用 === 而不是 ==
         * @see https://eslint.vuejs.org/rules/eqeqeq.html
         */
        "vue/eqeqeq": ["error", "allow-null"],

        /**
         * 键值对的风格
         * @see https://eslint.vuejs.org/rules/key-spacing.html
         */
        "vue/key-spacing": ["warn", {"beforeColon": false, "afterColon": true}],

        /**
         * 关键字两侧空格
         * @see https://eslint.vuejs.org/rules/keyword-spacing.html
         */
        "vue/keyword-spacing": ["warn", {"before": true, after: true}],

        /**
         * 匹配组件文件名
         * @see https://eslint.vuejs.org/rules/match-component-file-name.html
         */
        "vue/match-component-file-name": "off",

        /**
         * Boolean 类型变量不设置默认值
         * @see https://eslint.vuejs.org/rules/no-boolean-default.html
         */
        "vue/no-boolean-default": "off",

        /**
         * 废弃的 scope 属性
         * @see https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
         */
        "vue/no-deprecated-scope-attribute": "warn",

        /**
         * 禁止使用空解构模式
         * @see https://eslint.vuejs.org/rules/no-empty-pattern.html
         */
        "vue/no-empty-pattern": "error",

        /**
         * 限制的语法
         * @see https://eslint.vuejs.org/rules/no-restricted-syntax.html
         */
        "vue/no-restricted-syntax": "error",

        /**
         * 对象的空格风格
         * @see https://eslint.vuejs.org/rules/object-curly-spacing.html
         */
        "vue/object-curly-spacing": ["warn", "never"],

        /**
         * Vue 对象的直接导出
         * @see https://eslint.vuejs.org/rules/require-direct-export.html
         */
        "vue/require-direct-export": "error",

        /**
         * 缩进，switch 风格
         * @see https://eslint.vuejs.org/rules/script-indent.html
         */
        "vue/script-indent": ["warn", 4, {"baseIndent": 0, "switchCase": 1}],

        /**
         * 运算符空格
         * @see https://eslint.vuejs.org/rules/space-infix-ops.html
         */
        "vue/space-infix-ops": ["warn", {"int32Hint": true}],

        /**
         * 一元运算符空格
         * @see https://eslint.vuejs.org/rules/space-unary-ops.html
         */
        "vue/space-unary-ops": "warn",

        /**
         * v-on 中函数调用风格
         * @see https://eslint.vuejs.org/rules/v-on-function-call.html
         */
        "vue/v-on-function-call": "error",

        /**
         * v-slot 风格
         * @see https://eslint.vuejs.org/rules/v-slot-style.html
         */
        "vue/v-slot-style": ["warn", {"atComponent": "v-slot", "default": "v-slot", "named": "shorthand"}],

        /**
         * v-slot 验证
         * @see https://eslint.vuejs.org/rules/valid-v-slot.html
         */
        "vue/valid-v-slot": "error"
    }
};
