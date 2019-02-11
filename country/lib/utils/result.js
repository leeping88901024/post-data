"use strict";

var result = function result(ret, flag) {
    if (ret === 2) {
        console.log("\u4E0A\u4F20\u81F3 " + flag + " \u7684\u6570\u636E\u96C6\u4E0A\u4F20\u6210\u529F\u3002" + new Date());
    } else {
        console.log(ret);
    }
};

module.exports = {
    result: result
};