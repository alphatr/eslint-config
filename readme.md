# eslint-config

Version: 2.1.0

自用适用于 ESLint > 5.15.0, Node.js > 6.0.0 的 ESlint 规则

### 配置原则

依照下面几个原则，定制了 ESLint 配置

1. 依据自己的代码风格(4空格缩进、双引号、分号党);
2. 避免开发中代码错误;
3. 匹配大多数情况，例外情况请代码内添加 ESLint 注释;

### 使用

##### 原生 Node.js 环境

安装

```
npm install --save-dev eslint @alphatr/eslint-config-base
```

创建 `.eslintrc.js` 文件并写入如下内容

```javascript
module.exports = {
    extends: [
        "@alphatr/eslint-config-base/node",
    ]
};
```

##### Babel + Webpack 环境

安装

```
npm install --save-dev eslint @alphatr/eslint-config-base
```

创建 `.eslintrc.js` 文件并写入如下内容

```javascript
module.exports = {
    extends: [
        "@alphatr/eslint-config-base",
    ]
};
```

##### Vue 环境

安装

```
npm install --save-dev eslint eslint-plugin-vue vue-eslint-parser @alphatr/eslint-config-vue
```

创建 `.eslintrc.js` 文件并写入如下内容

```javascript
module.exports = {
    extends: [
        "@alphatr/eslint-config-vue",
    ]
};
```

### License

MIT
