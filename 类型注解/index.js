/**
 * 就和java一样 有一些强类型
 */
function hello(name) {
    if (name === void 0) { name = ''; }
    return "\u4F60\u597D:" + name;
}
var testName = [1, 2, 3];
//传入非 String 类型报错
console.log(hello(testName));
