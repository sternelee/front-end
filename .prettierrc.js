// https://prettier.io/docs/en/options.html
// prettier.config.js or .prettierrc.js
module.exports = {
    // 指定打印机将换行的行长度
    printWidth: 80,
    // 指定每个缩进级别的空格数
    tabWidth: 4,
    // 使用制表符缩进行而不是空格
    useTabs: true,
    // 在语句末尾打印分号
    semi: false,
    // 使用单引号而不是双引号
    singleQuote: true,
    // jsx使用单引号
    jsxSingleQuote: true,
    // 多行时尽可能打印尾随逗号
    trailingComma: "none",
    // 在对象文字中打印括号之间的空格
    bracketSpacing: true,
    // 将标签结束符/>多行JSX元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）
    jsxBracketSameLine: true,
    // 在唯一箭头函数参数周围包括括号
    arrowParens: "avoid",
    // 指定要使用的解析器
    parser: "flow",
    // 按markdown文本原样包装散文
    proseWrap: "preserve",
    // 行末结束格式
    endOfLine: "auto"
};