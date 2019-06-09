/**
 * ESLint 5.15.0 规则
 * 格式建议 Stylistic Issues
 * @type {Object}
 */

module.exports = {
    rules: {
        /**
         * 数组方括号换行风格
         * @see https://eslint.org/docs/rules/array-bracket-newline
         */
        "array-bracket-newline": "off",

        /**
         * 方括号，圆括号内侧的空格
         * @see http://eslint.org/docs/rules/array-bracket-spacing
         */
        "array-bracket-spacing": ["warn", "never"],

        /**
         * 数组元素换行风格
         * @see https://eslint.org/docs/rules/array-element-newline
         */
        "array-element-newline": "off",

        /**
         * 花括号内侧的空格
         * @see http://eslint.org/docs/rules/block-spacing
         */
        "block-spacing": ["warn", "always"],

        /**
         * 花括号换行方式
         * @see http://eslint.org/docs/rules/brace-style
         */
        "brace-style": ["warn", "1tbs", {allowSingleLine: true}],

        /**
         * 驼峰式
         * @see http://eslint.org/docs/rules/camelcase
         */
        "camelcase": ["warn", {"properties": "always"}],

        /**
         * 注释首字母大写
         * @see https://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": "off",

        /**
         * 数组或对象的尾部禁止添加逗号
         * @see http://eslint.org/docs/rules/comma-dangle
         */
        "comma-dangle": "error",

        /**
         * 逗号前后的空格
         * @see http://eslint.org/docs/rules/comma-spacing
         */
        "comma-spacing": ["warn", {before: false, after: true}],

        /**
         * 逗号的风格
         * @see http://eslint.org/docs/rules/comma-style
         */
        "comma-style": ["error", "last"],

        /**
         * 属性前后的空格
         * @see http://eslint.org/docs/rules/computed-property-spacing
         */
        "computed-property-spacing": ["warn", "never"],

        /**
         * this 变量的指代
         * @see http://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": "off",

        /**
         * 文件末尾的空行
         * @see http://eslint.org/docs/rules/eol-last
         */
        "eol-last": "error",

        /**
         * 函数名和括号中间不加空格
         * @see http://eslint.org/docs/rules/func-call-spacing
         */
        "func-call-spacing": ["warn", "never"],

        /**
         * 函数名和变量名匹配
         * @see http://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": "error",

        /**
         * 函数名称
         * @see http://eslint.org/docs/rules/func-names
         */
        "func-names": "warn",

        /**
         * 函数风格
         * @see http://eslint.org/docs/rules/func-style
         */
        "func-style": ["warn", "expression", {"allowArrowFunctions": true}],

        /**
         * 函数参数换行
         * @see http://eslint.org/docs/rules/function-paren-newline
         */
        "function-paren-newline": ["warn", "never"],

        /**
         * 参数名黑名单
         * @see http://eslint.org/docs/rules/id-blacklist
         */
        "id-blacklist": "off",

        /**
         * 变量长度
         * @see http://eslint.org/docs/rules/id-length
         */
        "id-length": "off",

        /**
         * 变量的格式
         * @see http://eslint.org/docs/rules/id-match
         */
        "id-match": "off",

        /**
         * 箭头函数换行风格
         * @see http://eslint.org/docs/rules/implicit-arrow-linebreak
         */
        "implicit-arrow-linebreak": ["warn", "beside"],

        /**
         * 缩进，switch 风格
         * @see http://eslint.org/docs/rules/indent
         */
        "indent": ["warn", 4, {"SwitchCase": 1}],

        /**
         * jsx 括号风格
         * @see http://eslint.org/docs/rules/indent
         */
        "jsx-quotes": ["error", "prefer-double"],

        /**
         * 键值对的风格
         * @see http://eslint.org/docs/rules/key-spacing
         */
        "key-spacing": ["warn", {"beforeColon": false, "afterColon": true}],

        /**
         * 关键字两侧空格
         * @see http://eslint.org/docs/rules/keyword-spacing
         */
        "keyword-spacing": ["warn", {"before": true, after: true}],

        /**
         * 行内注释位置
         * @see http://eslint.org/docs/rules/line-comment-position
         */
        "line-comment-position": "off",

        /**
         * 换行的格式
         * @see http://eslint.org/docs/rules/linebreak-style
         */
        "linebreak-style": ["error", "unix"],

        /**
         * 注释的形式
         * @see http://eslint.org/docs/rules/lines-around-comment
         */
        "lines-around-comment": "off",

        /**
         * 类方法前后的空格
         * @see http://eslint.org/docs/rules/lines-between-class-members
         */
        "lines-between-class-members": ["warn", "always"],

        /**
         * for 循环等调用深度
         * @see http://eslint.org/docs/rules/max-depth
         */
        "max-depth": ["warn", 8],

        /**
         * 单行长度
         * @see http://eslint.org/docs/rules/max-len
         */
        "max-len": ["warn", 120, 4, {"ignoreComments": true, "ignoreUrls": true, "ignoreStrings": true}],

        /**
         * 单个文件最大行数
         * @see http://eslint.org/docs/rules/max-lines
         */
        "max-lines": "off",

        /**
         * 单个函数最大行数
         * @see http://eslint.org/docs/rules/max-lines-per-function
         */
        "max-lines-per-function": "off",

        /**
         * callback 调用深度
         * @see http://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": ["warn", 5],

        /**
         * 参数个数
         * @see http://eslint.org/docs/rules/max-params
         */
        "max-params": "off",

        /**
         * 函数内的声明个数
         * @see http://eslint.org/docs/rules/max-statements
         */
        "max-statements": "off",

        /**
         * 单行声明的个数
         * @see http://eslint.org/docs/rules/max-statements-per-line
         */
        "max-statements-per-line": ["warn", {"max": 1}],

        /**
         * 多行注释的格式
         * @see http://eslint.org/docs/rules/multiline-comment-style
         */
        "multiline-comment-style": ["warn", "starred-block"],

        /**
         * 多行的三元运算符
         * @see http://eslint.org/docs/rules/multiline-ternary
         */
        "multiline-ternary": ["warn", "never"],

        /**
         * 大写用 new 调用
         * @see http://eslint.org/docs/rules/new-cap
         */
        "new-cap": "warn",

        /**
         * new 调用后面的 ()
         * @see http://eslint.org/docs/rules/new-parens
         */
        "new-parens": "error",

        /**
         * 方法调用前的换行
         * @see http://eslint.org/docs/rules/newline-per-chained-call
         */
        "newline-per-chained-call": ["warn", {ignoreChainWithDepth: 4}],

        /**
         * 数组构造函数
         * @see http://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": "error",

        /**
         * 不使用位运算
         * @see http://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": "error",

        /**
         * 不使用 continue
         * @see http://eslint.org/docs/rules/no-continue
         */
        "no-continue": "off",

        /**
         * 不使用行后面的行内注释
         * @see http://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": "off",

        /**
         * else 内不使用单独的 if
         * @see http://eslint.org/docs/rules/no-lonely-if
         */
        "no-lonely-if": "off",

        /**
         * 禁止混用的运算符
         * @see http://eslint.org/docs/rules/no-mixed-operators
         */
        "no-mixed-operators": ["error", {
            "groups": [
                ...["+", "-", "*", "/", "**"].map(x => [x, "%"]),
                ...["+", "-", "*", "/", "%"].map(x => [x, "**"]),
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": false
        }],

        /**
         * 禁止混用空格和 tab
         * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * 禁止连续赋值
         * @see http://eslint.org/docs/rules/no-multi-assign
         */
        "no-multi-assign": "off",

        /**
         * 多行连续的空行
         * @see http://eslint.org/docs/rules/no-multiple-empty-lines
         */
        "no-multiple-empty-lines": ["warn", {"max": 1, "maxEOF": 1}],

        /**
         * 禁止否定的判断在前
         * @see http://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": "off",

        /**
         * 禁止嵌套的三元表达式
         * @see http://eslint.org/docs/rules/no-nested-ternary
         */
        "no-nested-ternary": "error",

        /**
         * 禁止调用 new Object
         * @see http://eslint.org/docs/rules/no-new-object
         */
        "no-new-object": "error",

        /**
         * 禁止使用 ++ 和 --;
         * @see http://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": "off",

        /**
         * 限制的语法
         * @see http://eslint.org/docs/rules/no-restricted-syntax
         */
        "no-restricted-syntax": ["error", "WithStatement"],

        /**
         * 禁止在文件中使用 tab
         * @see http://eslint.org/docs/rules/no-tabs
         */
        "no-tabs": "error",

        /**
         * 三元运算符
         * @see http://eslint.org/docs/rules/no-ternary
         */
        "no-ternary": "off",

        /**
         * 行尾的空白符
         * @see http://eslint.org/docs/rules/no-trailing-spaces
         */
        "no-trailing-spaces": "error",

        /**
         * 变量名头部的 _
         * @see http://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": "off",

        /**
         * 不必要的三元运算符
         * @see http://eslint.org/docs/rules/no-unneeded-ternary
         */
        "no-unneeded-ternary": "error",

        /**
         * 禁止属性前的空格
         * @see http://eslint.org/docs/rules/no-whitespace-before-property
         */
        "no-whitespace-before-property": "error",

        /**
         * 单行声明格式
         * @see http://eslint.org/docs/rules/nonblock-statement-body-position
         */
        "nonblock-statement-body-position": ["warn", "below"],

        /**
         * JS 对象内部换行风格
         * @see http://eslint.org/docs/rules/object-curly-newline
         */
        "object-curly-newline": "off",

        /**
         * 对象的空格风格
         * @see http://eslint.org/docs/rules/object-curly-spacing
         */
        "object-curly-spacing": ["warn", "never"],

        /**
         * 对象属性换行风格
         * @see http://eslint.org/docs/rules/object-property-newline
         */
        "object-property-newline": "off",

        /**
         * 单 var 声明
         * @see http://eslint.org/docs/rules/one-var
         */
        "one-var": "off",

        /**
         * var 声明在同一行
         * @see http://eslint.org/docs/rules/one-var-declaration-per-line
         */
        "one-var-declaration-per-line": ["error", "always"],

        /**
         * 赋值运算符
         * @see http://eslint.org/docs/rules/operator-assignment
         */
        "operator-assignment": ["error", "always"],

        /**
         * 运算符换行
         * @see http://eslint.org/docs/rules/operator-linebreak
         */
        "operator-linebreak": ["error", "none"],

        /**
         * 块级作用域前后的空行
         * @see http://eslint.org/docs/rules/padded-blocks
         */
        "padded-blocks": "off",

        /**
         * 声明前后的空行
         * @see http://eslint.org/docs/rules/padding-line-between-statements
         */
        "padding-line-between-statements": ["warn", {"blankLine": "always", "prev": "directive", "next": "*"}],

        /**
         * 优先使用对象展开而不是 `Object.assign`
         * @see https://eslint.org/docs/rules/prefer-object-spread
         */
        "prefer-object-spread": "warn",

        /**
         * 属性的引号
         * @see http://eslint.org/docs/rules/quote-props
         */
        "quote-props": ["error", "as-needed", {"keywords": true, "numbers": true, "unnecessary": false}],

        /**
         * 引号类型
         * @see http://eslint.org/docs/rules/quotes
         */
        "quotes": ["error", "double", {avoidEscape: true}],

        /**
         * 分号
         * @see http://eslint.org/docs/rules/semi
         */
        "semi": ["error", "always"],

        /**
         * 分号空白
         * @see http://eslint.org/docs/rules/semi-spacing
         */
        "semi-spacing": ["error", {"before": false, "after": true}],

        /**
         * 分号风格
         * @see http://eslint.org/docs/rules/semi-style
         */
        "semi-style": ["warn", "last"],

        /**
         * 对象 key 排序
         * @see http://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": "off",

        /**
         * var 排序
         * @see http://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": "off",

        /**
         * 块级的空格
         * @see http://eslint.org/docs/rules/space-before-blocks
         */
        "space-before-blocks": ["warn", {"functions": "always", "keywords": "always"}],

        /**
         * 函数的空格
         * @see http://eslint.org/docs/rules/space-before-function-paren
         */
        "space-before-function-paren": ["warn", {"anonymous": "always", "named": "never"}],

        /**
         * 函数调用内部空格
         * @see http://eslint.org/docs/rules/space-in-parens
         */
        "space-in-parens": ["warn", "never"],

        /**
         * 运算符空格
         * @see http://eslint.org/docs/rules/space-infix-ops
         */
        "space-infix-ops": ["warn", {"int32Hint": true}],

        /**
         * 一元运算符空格
         * @see http://eslint.org/docs/rules/space-unary-ops
         */
        "space-unary-ops": "warn",

        /**
         * 注释的空格
         * @see http://eslint.org/docs/rules/spaced-comment
         */
        "spaced-comment": ["warn", "always", {exceptions: ["-", "+", "*"], markers: ["!", "*!"]}],

        /**
         * Switch 语句冒号风格
         * @see http://eslint.org/docs/rules/switch-colon-spacing
         */
        "switch-colon-spacing": ["warn", {"after": true, "before": false}],

        /**
         * 模板标记和字面量之间空格
         * @see http://eslint.org/docs/rules/template-tag-spacing
         */
        "template-tag-spacing": ["warn", "never"],

        /**
         * Unicode BOM 检测
         * @see http://eslint.org/docs/rules/unicode-bom
         */
        "unicode-bom": "error",

        /**
         * 正则直接量的使用
         * @see http://eslint.org/docs/rules/wrap-regex
         */
        "wrap-regex": "off"
    }
};
