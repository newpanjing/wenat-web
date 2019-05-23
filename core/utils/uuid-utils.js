/**
 * Created by sun on 2017/3/10.
 */
var uuid = require('node-uuid');
String.prototype.replaceAll = function (s1, s2) {
    var demo = this
    while (demo.indexOf(s1) != -1)
        demo = demo.replace(s1, s2);
    return demo;
}
exports.getUUID = function () {
    var code = uuid.v4();
    return code.replaceAll("-", "");
}

