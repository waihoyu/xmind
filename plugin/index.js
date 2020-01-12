function compilerTest(options) {}

compilerTest.prototype.apply = function(compiler) {
    compiler.plugin("compilation", function(compilation) {
        compilation.plugin("optimize", function() {
            console.log("这里被触发了哦");
        });
    });
};

module.exports = compilerTest;
