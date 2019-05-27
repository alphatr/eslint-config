/**
 * ESLint-Vue 5.2.0 规则
 * 推荐 Priority C: Recommended
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 属性排序
         * @see https://eslint.vuejs.org/rules/attributes-order.html
         */
        "vue/attributes-order": "off",

        /**
         * 警告 v-html 标签以防止 XSS
         * @see https://eslint.vuejs.org/rules/no-v-html.html
         */
        "vue/no-v-html": "warn",

        /**
         * 组件方法属性排序
         * @see https://eslint.vuejs.org/rules/order-in-components.html
         */
        "vue/order-in-components": "off",

        /**
         * 模板中的 this
         * @see https://eslint.vuejs.org/rules/this-in-template.html
         */
        "vue/this-in-template": "warn"
    }
};
