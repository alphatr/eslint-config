/**
 * ESLint 5.15.0 规则
 * 潜在的错误 Possible Errors
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 在 for 循环中计数器必须向正确的方向移动
         * @see https://eslint.org/docs/rules/for-direction
         */
        "for-direction": "error",

        /**
         * 在 Getter 函数中必须包含返回值
         * @see https://eslint.org/docs/rules/getter-return
         */
        "getter-return": "error",

        /**
         * 不能将 Async 函数当作 Promise 的执行函数
         * @see https://eslint.org/docs/rules/no-async-promise-executor
         */
        "no-async-promise-executor": "error",

        /**
         * 禁止在循环中使用 Await 操作
         * @see https://eslint.org/docs/rules/no-await-in-loop
         */
        "no-await-in-loop": "error",

        /**
         * 禁止和 -0 做比较
         * @see https://eslint.org/docs/rules/no-compare-neg-zero
         */
        "no-compare-neg-zero": "error",

        /**
         * 在 if, for 等判断条件中禁止赋值
         * @see http://eslint.org/docs/rules/no-cond-assign
         */
        "no-cond-assign": ["error", "except-parens"],

        /**
         * 禁止调用 console
         * @see http://eslint.org/docs/rules/no-console
         */
        "no-console": "warn",

        /**
         * 禁止在条件中使用常量表达式
         * @see http://eslint.org/docs/rules/no-constant-condition
         */
        "no-constant-condition": "error",

        /**
         * 禁止在正则表达式中使用控制字符
         * @see http://eslint.org/docs/rules/no-control-regex
         */
        "no-control-regex": "error",

        /**
         * 禁用 debugger
         * @see http://eslint.org/docs/rules/no-debugger
         */
        "no-debugger": "error",

        /**
         * 禁止出现重名参数
         * @see http://eslint.org/docs/rules/no-dupe-args
         */
        "no-dupe-args": "error",

        /**
         * 禁止出现 key 重复
         * @see http://eslint.org/docs/rules/no-dupe-keys
         */
        "no-dupe-keys": "error",

        /**
         * switch 中禁止重复的 case 标签
         * @see http://eslint.org/docs/rules/no-duplicate-case
         */
        "no-duplicate-case": "error",

        /**
         * 禁止空语句
         * @see http://eslint.org/docs/rules/no-empty
         */
        "no-empty": ["error", {"allowEmptyCatch": true}],

        /**
         * 正则中禁止空的选择符 "[]"
         * @see http://eslint.org/docs/rules/no-empty-character-class
         */
        "no-empty-character-class": "error",

        /**
         * 禁止对 catch 子句的参数重新赋值
         * @see http://eslint.org/docs/rules/no-ex-assign
         */
        "no-ex-assign": "error",

        /**
         * 禁止不必要的布尔转换
         * @see http://eslint.org/docs/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": "error",

        /**
         * 禁止不必要的括号
         * @see http://eslint.org/docs/rules/no-extra-parens
         */
        "no-extra-parens": "error",

        /**
         * 禁止不必要的分号
         * @see http://eslint.org/docs/rules/no-extra-semi
         */
        "no-extra-semi": "error",

        /**
         * 禁止给函数类型的变量重新赋值
         * @see http://eslint.org/docs/rules/no-func-assign
         */
        "no-func-assign": "error",

        /**
         * 禁止在 if 等内部进行声明函数，变量
         * @see http://eslint.org/docs/rules/no-inner-declarations
         */
        "no-inner-declarations": ["error", "both"],

        /**
         * 禁止给正则构造函数中传递错误的正则表达式字符串和标志
         * @see http://eslint.org/docs/rules/no-invalid-regexp
         */
        "no-invalid-regexp": "error",

        /**
         * 禁止在字符串和注释之外不规则的空白
         * @see http://eslint.org/docs/rules/no-irregular-whitespace
         */
        "no-irregular-whitespace": "error",

        /**
         * 禁止在字符类语法中使用多个代码点生成的字符
         * @see https://eslint.org/docs/rules/no-misleading-character-class
         */
        "no-misleading-character-class": "error",

        /**
         * 禁止以函数方式调用  Math, JSON 等对象
         * @see http://eslint.org/docs/rules/no-obj-calls
         */
        "no-obj-calls": "error",

        /**
         * 禁止直接调用 Object.prototypes 的内置属性，如 hasOwnProperty 等方法，改用 {}.hasOwnProperty.call 调用
         * @see http://eslint.org/docs/rules/no-prototype-builtins
         */
        "no-prototype-builtins": "error",

        /**
         * 正则中禁止多个空格，请用 " {3}" 等代替
         * @see http://eslint.org/docs/rules/no-regex-spaces
         */
        "no-regex-spaces": "error",

        /**
         * 禁止稀疏数组
         * @see http://eslint.org/docs/rules/no-sparse-arrays
         */
        "no-sparse-arrays": "error",

        /**
         * 禁止在字符串中使用 `${variable}` 模板语法
         * @type {[type]}
         */
        "no-template-curly-in-string": "error",

        /**
         * 禁止出现令人困惑的多行表达式
         * @see http://eslint.org/docs/rules/no-unexpected-multiline
         */
        "no-unexpected-multiline": "warn",

        /**
         * 禁止在return、throw、continue 和 break 语句之后出现无法执行的代码
         * @see http://eslint.org/docs/rules/no-unreachable
         */
        "no-unreachable": "error",

        /**
         * 禁止在 finally 语句块中出现控制流语句
         * @see http://eslint.org/docs/rules/no-unsafe-finally
         */
        "no-unsafe-finally": "error",

        /**
         * instanceof, in 左侧禁止有其他操作符
         * @see http://eslint.org/docs/rules/no-unsafe-negation
         */
        "no-unsafe-negation": "error",

        /**
         * 禁止有异步冲突风险的赋值操作
         * @see https://eslint.org/docs/rules/require-atomic-updates
         */
        "require-atomic-updates": "error",

        /**
         * 使用 isNaN() 而禁止和 NaN 比较
         * @see http://eslint.org/docs/rules/use-isnan
         */
        "use-isnan": "error",

        /**
         * 强制 typeof 表达式与有效的字符串进行比较
         * @see http://eslint.org/docs/rules/valid-typeof
         */
        "valid-typeof": "error"
    }
};
