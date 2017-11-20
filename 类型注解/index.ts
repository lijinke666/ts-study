/**
 * 就和java一样 有一些强类型
 */
function hello (name: string = ''){
    return `你好:${name}`
}

const testName = [1,2,3]

console.log(hello());

//传入非 String 类型报错
console.log(hello(testName));// error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.