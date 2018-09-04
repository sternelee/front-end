// prettier.config.js or .prettierrc.js
module.exports = {
    // 指定打印机将换行的行长度
    printWidth: 80,
    // 指定每个缩进级别的空格数
    tabWidth: 2,
    // 使用制表符缩进行而不是空格
    useTabs: true,
    // 在语句末尾打印分号
    semi: true,
    // 使用单引号而不是双引号
    singleQuote: true,
    // 多行时尽可能打印尾随逗号
    trailingComma: "all",
    // 在对象文字中打印括号之间的空格
    bracketSpacing: true,
    // 将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）
    jsxBracketSameLine: true,
    // 在唯一箭头函数参数周围包括括号
    arrowParens: "avoid",
    // 指定要使用的解析器
    parser: "flow",
    // 按markdown文本原样包装散文
    proseWrap: "preserve"
};