const loaderUtils = require("loader-utils");
module.exports = function(source) {
    console.log(this.query, "----");
    console.log(source, "++");
    let result = source.replace("dell", "delllee");
    console.log(result, "**");
    return result;
};
