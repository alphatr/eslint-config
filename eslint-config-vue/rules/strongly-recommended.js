/**
 * ESLint-Vue 5.2.0 规则
 * 强烈推荐 Priority B: Strongly Recommended
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 自定义组件的属性风格
         * @see https://eslint.vuejs.org/rules/attribute-hyphenation.html
         */
        "vue/attribute-hyphenation": "warn",

        /**
         * HTML 标签闭合换行风格
         * @see https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
         */
        "vue/html-closing-bracket-newline": ["warn", {
            "singleline": "never",
            "multiline": "always"
        }],

        /**
         * HTML 标签空格风格
         * @see https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
         */
        "vue/html-closing-bracket-spacing": ["warn", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "always"
        }],

        /**
         * html 的结束标签必须符合规定
         * @see https://eslint.vuejs.org/rules/html-end-tags.html
         */
        "vue/html-end-tags": "warn",

        /**
         * html 的缩进风格
         * @see https://eslint.vuejs.org/rules/html-indent.html
         */
        "vue/html-indent": ["warn", 4],

        /**
         * html 属性值引号风格
         * @see https://eslint.vuejs.org/rules/html-quotes.html
         */
        "vue/html-quotes": "warn",

        /**
         * HTML 标签自闭和属性
         * @see https://eslint.vuejs.org/rules/html-self-closing.html
         */
        "vue/html-self-closing": ["warn", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "never",
            "math": "never"
        }],

        /**
         * 限制每行允许的最多属性数量
         * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
         */
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 5,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],

        /**
         * 组件元素的换行风格
         * @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
         */
        "vue/multiline-html-element-content-newline": "warn",

        /**
         * 模板语法的空格风格
         * @see https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
         */
        "vue/mustache-interpolation-spacing": "warn",

        /**
         * 组件 name 属性的值的风格
         * @see https://eslint.vuejs.org/rules/name-property-casing.html
         */
        "vue/name-property-casing": "warn",

        /**
         * 禁止出现连续空格
         * @see https://eslint.vuejs.org/rules/no-multi-spaces.html
         */
        "vue/no-multi-spaces": "warn",

        /**
         * 模板属性名值之间的空格
         * @see https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
         */
        "vue/no-spaces-around-equal-signs-in-attribute": "warn",

        /**
         * 模板变量复用父级变量名
         * @see https://eslint.vuejs.org/rules/no-template-shadow.html
         */
        "vue/no-template-shadow": "warn",

        /**
         * 属性名风格
         * @see https://eslint.vuejs.org/rules/prop-name-casing.html
         */
        "vue/prop-name-casing": "warn",

        /**
         * Prop 属性必须有默认值
         * @see https://eslint.vuejs.org/rules/require-default-prop.html
         */
        "vue/require-default-prop": "error",

        /**
         * Prop 必须有类型限制
         * @see https://eslint.vuejs.org/rules/require-prop-types.html
         */
        "vue/require-prop-types": "warn",

        /**
         * HTML 换行风格
         * @see https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
         */
        "vue/singleline-html-element-content-newline": "off",

        /**
         * v-bind 风格
         * @see https://eslint.vuejs.org/rules/v-bind-style.html
         * @reason 没必要限制
         * @fixable
         */
        "vue/v-bind-style": "warn",

        /**
         * v-on 风格
         * @see https://eslint.vuejs.org/rules/v-on-style.html
         */
        "vue/v-on-style": "warn"
    }
};
