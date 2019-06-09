/**
 * ESLint 5.15.0 规则
 * 最佳实践 Best Practices
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * Getter/Setter 成对出现，允许只有 Getter 没 Setter
         * @see http://eslint.org/docs/rules/accessor-pairs
         */
        "accessor-pairs": ["error", {"getWithoutSet": true}],

        /**
         * 数组回调返回值判断
         * @see http://eslint.org/docs/rules/array-callback-return
         */
        "array-callback-return": "error",

        /**
         * 将 var 看作是块级作用域
         * @see http://eslint.org/docs/rules/block-scoped-var
         */
        "block-scoped-var": "error",

        /**
         * 在方法中不使用 this 可以声明为 static
         * @see http://eslint.org/docs/rules/class-methods-use-this
         */
        "class-methods-use-this": "off",

        /**
         * 过于复杂的函数
         * @see http://eslint.org/docs/rules/complexity
         */
        "complexity": "off",

        /**
         * 一致的 return 返回
         * @see http://eslint.org/docs/rules/consistent-return
         */
        "consistent-return": "off",

        /**
         * if 等强制添加花括号
         * @see http://eslint.org/docs/rules/curly
         * @example
         */
        curly: ["error", "multi-line"],

        /**
         * while 中强制添加 default 块
         * @see http://eslint.org/docs/rules/default-case
         */
        "default-case": ["error", {commentPattern: "^no default$"}],

        /**
         * 属性前面的 . 和属性之间禁止换行
         * @see http://eslint.org/docs/rules/dot-location
         */
        "dot-location": ["error", "property"],

        /**
         * 对象优先使用 . 号调用
         * @see http://eslint.org/docs/rules/dot-notation
         */
        "dot-notation": ["error", {allowKeywords: true}],

        /**
         * 使用 === 而不是 ==
         * @see http://eslint.org/docs/rules/eqeqeq
         */
        eqeqeq: ["error", "allow-null"],

        /**
         * for in 中 使用 hasOwnProperty 判断
         * @see http://eslint.org/docs/rules/guard-for-in
         */
        "guard-for-in": "off",

        /**
         * 每个文件中定义的 Class 数量
         * @see https://eslint.org/docs/rules/max-classes-per-file
         */
        "max-classes-per-file": "warn",

        /**
         * 禁止调用 alert、confirm 和 prompt
         * @see http://eslint.org/docs/rules/no-alert
         */
        "no-alert": "error",

        /**
         * 禁止使用 arguments.caller 和 arguments.callee
         * @see http://eslint.org/docs/rules/no-caller
         */
        "no-caller": "error",

        /**
         * switch 语句中的 case 中禁止直接使用块级声明（使用花括号括起来）
         * @see http://eslint.org/docs/rules/no-case-declarations
         */
        "no-case-declarations": "error",

        /**
         * 对正则中的 "/=/" 使用转义 "/\=/"，防止看起来像除法
         * @see http://eslint.org/docs/rules/no-div-regex
         */
        "no-div-regex": "warn",

        /**
         * 禁止 else 中使用 return，建议直接 return
         * @see http://eslint.org/docs/rules/no-else-return
         */
        "no-else-return": "error",

        /**
         * 禁止空函数
         * @see http://eslint.org/docs/rules/no-empty-function
         */
        "no-empty-function": "error",

        /**
         * 禁止使用空解构模式
         * @see http://eslint.org/docs/rules/no-empty-pattern
         */
        "no-empty-pattern": "error",

        /**
         * 禁止和 null 进行 == 的比较
         * @see http://eslint.org/docs/rules/no-eq-null
         */
        "no-eq-null": "off",

        /**
         * 禁止使用 eval
         * @see http://eslint.org/docs/rules/no-eval
         */
        "no-eval": "error",

        /**
         * 禁止扩展 native 的对象
         * @see http://eslint.org/docs/rules/no-extend-native
         */
        "no-extend-native": "error",

        /**
         * 禁止不必要的 .bind() 调用
         * @see http://eslint.org/docs/rules/no-extra-bind
         */
        "no-extra-bind": "error",

        /**
         * 禁止不必要的 label
         * @see http://eslint.org/docs/rules/no-extra-label
         */
        "no-extra-label": "error",

        /**
         * switch 中必须添加 break，禁止多个 case
         * @see http://eslint.org/docs/rules/no-fallthrough
         */
        "no-fallthrough": "error",

        /**
         * 禁止省略浮点数的 0，eg：.12 => 0.12
         * @see http://eslint.org/docs/rules/no-floating-decimal
         */
        "no-floating-decimal": "error",

        /**
         * 禁止给内部对象或者全局变量赋值
         * @see http://eslint.org/docs/rules/no-global-assign
         */
        "no-global-assign": "error",

        /**
         * 禁止使用奇怪的类型转换
         * @see http://eslint.org/docs/rules/no-implicit-coercion
         */
        "no-implicit-coercion": ["error", {"boolean": false, "number": false, "string": false}],

        /**
         * 禁止隐式的定义全局变量
         * @see http://eslint.org/docs/rules/no-implicit-globals
         */
        "no-implicit-globals": "error",

        /**
         * 禁止使用隐式的 eval，如 setTimeout(), setInterval() 中传入字符串
         * @see http://eslint.org/docs/rules/no-implied-eval
         */
        "no-implied-eval": "error",

        /**
         * 禁止在 class 之外使用 this
         * @see http://eslint.org/docs/rules/no-invalid-this
         */
        "no-invalid-this": "off",

        /**
         * 禁止使用 __iterator__ 作为原型方法
         * @see http://eslint.org/docs/rules/no-iterator
         */
        "no-iterator": "error",

        /**
         * 禁止使用 label
         * @see http://eslint.org/docs/rules/no-labels
         */
        "no-labels": "error",

        /**
         * 禁止使用无意义的块级作用域
         * @see http://eslint.org/docs/rules/no-lone-blocks
         */
        "no-lone-blocks": "error",

        /**
         * 禁止在循环中定义函数，而返回循环计数
         * @see http://eslint.org/docs/rules/no-loop-func
         */
        "no-loop-func": "error",

        /**
         * 禁止魔术数字
         * @see http://eslint.org/docs/rules/no-magic-numbers
         */
        "no-magic-numbers": "off",

        /**
         * 禁止连续的空格
         * @see http://eslint.org/docs/rules/no-multi-spaces
         */
        "no-multi-spaces": ["error", {"exceptions": {"VariableDeclarator": true, "ImportDeclaration": true}}],

        /**
         * 禁止字符串换行
         * @see http://eslint.org/docs/rules/no-multi-str
         */
        "no-multi-str": "error",

        /**
         * 禁止使用 new Xxx() 而不获取实例
         * @see http://eslint.org/docs/rules/no-new
         */
        "no-new": "off",

        /**
         * 禁止使用 new Function 调用
         * @see http://eslint.org/docs/rules/no-new-func
         */
        "no-new-func": "error",

        /**
         * 对于 String, Number 和 Boolean，禁止使用 new 来调用
         * @see http://eslint.org/docs/rules/no-new-wrappers
         */
        "no-new-wrappers": "error",

        /**
         * 禁止使用八进制
         * @see http://eslint.org/docs/rules/no-octal
         */
        "no-octal": "error",

        /**
         * 禁止使用八进制转义
         * @see http://eslint.org/docs/rules/no-octal-escape
         */
        "no-octal-escape": "error",

        /**
         * 形参禁止重新赋值
         * @see http://eslint.org/docs/rules/no-param-reassign
         */
        "no-param-reassign": "off",

        /**
         * 禁止使用 __proto__ 调用
         * @see http://eslint.org/docs/rules/no-proto
         */
        "no-proto": "error",

        /**
         * 禁止重复声明
         * @see http://eslint.org/docs/rules/no-redeclare
         */
        "no-redeclare": "error",

        /**
         * 禁止使用反对的属性
         * @see http://eslint.org/docs/rules/no-restricted-properties
         */
        "no-restricted-properties": "off",

        /**
         * return 语句中禁止赋值
         * @see http://eslint.org/docs/rules/no-return-assign
         */
        "no-return-assign": ["error", "always"],

        /**
         * 禁止使用没必要的 `return await`
         * @see https://eslint.org/docs/rules/no-return-await
         */
        "no-return-await": "error",

        /**
         * 禁止使用 `javascript:` 形式的伪协议
         * @see http://eslint.org/docs/rules/no-script-url
         */
        "no-script-url": "error",

        /**
         * 禁止自赋值
         * @see http://eslint.org/docs/rules/no-self-assign
         */
        "no-self-assign": "error",

        /**
         * 禁止自比较
         * @see http://eslint.org/docs/rules/no-self-compare
         */
        "no-self-compare": "error",

        /**
         * 禁止逗号运算符
         * @see http://eslint.org/docs/rules/no-sequences
         */
        "no-sequences": "error",

        /**
         * 禁止 throw 字面量
         * @see http://eslint.org/docs/rules/no-throw-literal
         */
        "no-throw-literal": "warn",

        /**
         * 禁止使用不变的循环条件
         * @see http://eslint.org/docs/rules/no-unmodified-loop-condition
         */
        "no-unmodified-loop-condition": "error",

        /**
         * 禁止未使用的表达式
         * @see http://eslint.org/docs/rules/no-unused-expressions
         */
        "no-unused-expressions": ["error", {"allowShortCircuit": true, "allowTernary": true}],

        /**
         * 禁止未使用的 label
         * @see http://eslint.org/docs/rules/no-unused-labels
         */
        "no-unused-labels": "error",

        /**
         * 禁止无必要的 .call() 和 .apply();
         * @see http://eslint.org/docs/rules/no-useless-call
         */
        "no-useless-call": "error",

        /**
         * 禁止无必要的 catch;
         * @see http://eslint.org/docs/rules/no-useless-catch
         */
        "no-useless-catch": "error",

        /**
         * 禁止无必要的字符串连接
         * @see http://eslint.org/docs/rules/no-useless-concat
         */
        "no-useless-concat": "error",

        /**
         * 禁止无必要的转义
         * @see http://eslint.org/docs/rules/no-useless-escape
         */
        "no-useless-escape": "error",

        /**
         * 禁止无必要的 return
         * @see http://eslint.org/docs/rules/no-useless-return
         */
        "no-useless-return": "error",

        /**
         * 禁止使用 void
         * @see http://eslint.org/docs/rules/no-void
         */
        "no-void": "off",

        /**
         * 禁止使用带有警告性质的注释
         * @see http://eslint.org/docs/rules/no-warning-comments
         */
        "no-warning-comments": ["warn", {"terms": ["todo", "fixme"], "location": "start"}],

        /**
         * 禁止使用 with
         * @see http://eslint.org/docs/rules/no-with
         */
        "no-with": "error",

        /**
         * 正则中优先使用命名捕获组
         * @see https://eslint.org/docs/rules/prefer-named-capture-group
         * @reason Node.js 8 中未实现
         */
        "prefer-named-capture-group": "off",

        /**
         * `Reject` 必须返回 `Error` 对象
         * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
         */
        "prefer-promise-reject-errors": "error",

        /**
         * parseInt 等必须添加基数
         * @see http://eslint.org/docs/rules/radix
         */
        "radix": "error",

        /**
         * Async 函数中必须包含 `await`
         * @see https://eslint.org/docs/rules/require-await
         */
        "require-await": "error",

        /**
         * 正则中必须使用 `u` 标记
         * @see https://eslint.org/docs/rules/require-unicode-regexp
         */
        "require-unicode-regexp": "off",

        /**
         * 在顶部声明
         * @see http://eslint.org/docs/rules/vars-on-top
         */
        "vars-on-top": "off",

        /**
         * 立即执行函数的括号必须在外边
         * @see http://eslint.org/docs/rules/wrap-iife
         */
        "wrap-iife": "off",

        /**
         * 比较的字面量放右侧
         * @see http://eslint.org/docs/rules/yoda
         */
        "yoda": "error"
    }
};
