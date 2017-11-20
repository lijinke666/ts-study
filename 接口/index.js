/**
 * @name 接口 interface
 * 有点像 mongoose schema 定义字段的类型
 */
var my = function (info) {
    return "\u4F60\u597D: \u6211\u662F " + info.name + ", \u4ECA\u5E74:" + info.age;
};
console.log(my({
    name: "李金珂",
    age: 18
}));
