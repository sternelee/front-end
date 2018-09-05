// https://eslint.org/docs/user-guide/configuring
// https://blog.csdn.net/mafan121/article/details/77965252
module.exports = {
    // 允许的核心规则
    extends: 'eslint:recommended',
    // 指定解析器，默认为esprima
    parser: 'babel-eslint',
    parserOptions: {
        // 启用ES6语法
        ecmaVersion: 6,
        // script 或 module（在ECMAScript模块中）
        sourceType: "module",
        // 其他语言功能
        ecmaFeatures: {
            // 允许return全局范围内的语句
            'globalReturn': false,
            // 启用全局严格模式（如果ecmaVersion为5或更高）
            'impliedStrict': true,
            // 启用JSX，想要React语义，建议使用eslint-plugin-react
            "jsx": true
        }
    },
    // 指定环境
    env: {
        // 浏览器全局变量
        'browser': true,
        // Node.js全局变量和Node.js范围
        'node': true,
        // 启用除模块之外的所有ECMAScript 6功能
        'es6': true,
        // CommonJS全局变量和CommonJS范围
        'commonjs': true
    },
    // 指定全局变量,设置为等于true允许覆盖变量或false禁止覆盖
    globals: {
        '__webpack_hash__': true,
        'jQuery': true,
        'log': true,
        '__TAG__': true,
        '__VERSION__': '',
    },
    // 配置插件,eslint-plugin-前缀可以从插件名称被省略
    // 全局安装的ESLint实例只能使用全局安装的ESLint插件，而本地安装的版本只能使用本地安装的插件
    plugins: [

    ],
    // 配置规则
    // "off"或0 - 关闭规则
    // "warn"或1 - 将规则作为警告打开（不影响退出代码）
    // "error"或2 - 将规则作为错误打开（触发时退出代码为1）
    rules: {
        // 禁止使用没有定义的变量，除非在／＊global＊／已经申明
        'no-undef': 2,
        // 缩进，以一个tab
        'indent': [1, 2],
        // 使用单引号
        'quotes': [2, 'single', 'avoid-escape'],
        // 逗号前面不需要加空格，而逗号后面需要添加空格
        'comma-spacing': [2, { 'before': false, 'after': true }],
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        'no-whitespace-before-property': 2,
        // 箭头函数中，在需要的时候，在参数外使用小括号（只有一个参数时，可以不适用括号，其它情况下都需要使用括号）
        "arrow-parens": [2,"as-needed"],
        // {}块前要有空格
        'space-before-blocks': [2, "always"],
        //大括号语法采用『1tbs』,允许单行样式
        "brace-style": [2,"1tbs",{ "allowSingleLine": true }],
        // 函数参数左括号前没有空格
        'space-before-function-paren': [2, 'never'],
        // 对象的冒号 前无空格后有空格 {a: 1}
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
        //在定义对象或数组时，最后一项不能加逗号
        "comma-dangle": [2,"never"],
        //如果逗号可以放在行首或行尾时，那么请放在行尾
        "comma-style": [ 2,"last"],
        // 一行后没有多余空格
        'no-trailing-spaces': 2,
        // return前需要空行
        'newline-before-return': 2,
        //在定义对象的时候，getter/setter需要同时出现
        "accessor-pairs": 2,
        //在constructor函数中，如果classes是继承其他class，那么请使用super。否者不使用super
        "constructor-super": 2,
        //在if-else语句中，如果if或else语句后面是多行，那么必须加大括号。如果是单行就应该省略大括号。
        "curly": [2,"multi-line"],
        //使用=== !== 代替== != .
        "eqeqeq": [2,"allow-null"],
        //构造函数首字母大写
        "new-cap": [2,{"newIsCap": true,"capIsNew": false}],
        //这就是分号党和非分号党关心的了，我们还是选择加分号
        "semi": [2,"always"],
        // 定义的变量未使用
        'no-unused-vars': 1
    }
}
