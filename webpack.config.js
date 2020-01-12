let path = require("path");
let compilerFeTest = require("./plugin");
let compilerFeTestA = require("./pluginA");
let compilerFeTestC = require("./pluginC");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolveLoader: {
        modules: ["node_modules", "./loaders"],
    },
    module: {
        rules: [
            {
                test: /\.js1$/,
                use: [
                    {
                        loader: path.resolve(__dirname, "./loaders/replace.js"),
                        options: {
                            name: "username",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new compilerFeTest({ tip: "这里是插件接收的参数哦" }),
        new compilerFeTestA(() => {
            console.log("这里是异步");
        }),
        new compilerFeTestC({ options: 0 }),
    ],
};
