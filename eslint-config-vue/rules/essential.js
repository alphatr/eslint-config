/**
 * ESLint-Vue 5.2.0 规则
 * 必要的 Priority A: Essential
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 计算属性包含异步方法
         * @see https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
         */
        "vue/no-async-in-computed-properties": "error",

        /**
         * 重复的 Key
         * @see https://eslint.vuejs.org/rules/no-dupe-keys.html
         */
        "vue/no-dupe-keys": "warn",

        /**
         * 重复的属性
         * @see https://eslint.vuejs.org/rules/no-duplicate-attributes.html
         */
        "vue/no-duplicate-attributes": "warn",

        /**
         * 解析错误
         * @see https://eslint.vuejs.org/rules/no-parsing-error.html
         */
        "vue/no-parsing-error": "error",

        /**
         * 覆盖保留的属性
         * @see https://eslint.vuejs.org/rules/no-reserved-keys.html
         */
        "vue/no-reserved-keys": "warn",

        /**
         * data 属性的值必须是一个函数
         * @see https://eslint.vuejs.org/rules/no-shared-component-data.html
         */
        "vue/no-shared-component-data": "error",

        /**
         * 禁止在计算属性中对属性修改
         * @see https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
         */
        "vue/no-side-effects-in-computed-properties": "error",

        /**
         * 禁止 <template> 使用 key 属性
         * @see https://eslint.vuejs.org/rules/no-template-key.html
         */
        "vue/no-template-key": "error",

        /**
         * <textarea> 使用 v-model="message" 来绑定
         * @see https://eslint.vuejs.org/rules/no-textarea-mustache.html
         */
        "vue/no-textarea-mustache": "error",

        /**
         * 禁止组件定义未使用
         * @see https://eslint.vuejs.org/rules/no-unused-components.html
         */
        "vue/no-unused-components": "error",

        /**
         * v-for 中禁止定义未使用的变量
         * @see https://eslint.vuejs.org/rules/no-unused-vars.html
         */
        "vue/vue/no-unused-vars": "error",

        /**
         * 禁止在同一节点上使用 v-for 和 v-if
         * @see https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
         */
        "vue/no-use-v-if-with-v-for": "error",

        /**
         * 动态组件必须绑定 is
         * @see https://eslint.vuejs.org/rules/require-component-is.html
         */
        "vue/require-component-is": "error",

        /**
         * Props 属性必须指定类型为构造器
         * @see https://eslint.vuejs.org/rules/require-prop-type-constructor.html
         */
        "vue/require-prop-type-constructor": "error",

        /**
         * render 函数必须有返回值
         * @see https://eslint.vuejs.org/rules/require-render-return.html
         */
        "vue/require-render-return": "error",

        /**
         * v-for 指令必须指定 key
         * @see https://eslint.vuejs.org/rules/require-v-for-key.html
         */
        "vue/require-v-for-key": "error",

        /**
         * prop 的默认值必须匹配类型
         * @see https://eslint.vuejs.org/rules/require-valid-default-prop.html
         */
        "vue/require-valid-default-prop": "error",

        /**
         * 计算属性必须有返回值
         * @see https://eslint.vuejs.org/rules/return-in-computed-property.html
         */
        "vue/return-in-computed-property": "error",

        /**
         * v-on 属性描述符和非描述符不能混用
         * @see https://eslint.vuejs.org/rules/use-v-on-exact.html
         */
        "vue/use-v-on-exact": "error",

        /**
         * template 的根节点必须合法
         * @see https://eslint.vuejs.org/rules/valid-template-root.html
         */
        "vue/valid-template-root": "error",

        /**
         * v-bind 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-bind.html
         */
        "vue/valid-v-bind": "error",

        /**
         * v-cloak 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-cloak.html
         */
        "vue/valid-v-cloak": "error",

        /**
         * v-else-if 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-else-if.html
         */
        "vue/valid-v-else-if": "error",

        /**
         * v-else 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-else.html
         */
        "vue/valid-v-else": "error",

        /**
         * v-for 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-for.html
         */
        "vue/valid-v-for": "error",
        /**
         * v-html 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-html.html
         */
        "vue/valid-v-html": "error",
        /**
         * v-if 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-if.html
         */
        "vue/valid-v-if": "error",
        /**
         * v-model 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-model.html
         */
        "vue/valid-v-model": "error",
        /**
         * v-on 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-on.html
         */
        "vue/valid-v-on": "error",
        /**
         * v-once 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-once.html
         */
        "vue/valid-v-once": "error",
        /**
         * v-pre 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-pre.html
         */
        "vue/valid-v-pre": "error",
        /**
         * v-show 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-show.html
         */
        "vue/valid-v-show": "error",
        /**
         * v-text 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-text.html
         */
        "vue/valid-v-text": "error"
    }
};
