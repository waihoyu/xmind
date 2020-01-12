function compilerTest(options) {}

compilerTest.prototype.apply = function(compiler) {
    compiler.plugin("done", function() {
        console.log("1我被调用了哦～～");
    });

    compiler.plugin("emit", function(compilation, callback) {
        // 做一些异步处理……
        console.log("2进来了");
        setTimeout(function() {
            console.log("3我是异步的哦");
            callback();
        }, 2000);

        console.log("4出去了");
    });
};

module.exports = compilerTest;
