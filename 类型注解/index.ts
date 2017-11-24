/**
 * 就和java一样 有一些强类型
 */
function hello(name: (string | Array<any>) = '') :string{
    return `你好:${name}`
}

const testName: Array<any> = [1, 2, 3]

console.log(hello());

//传入非 String 类型报错
console.log(hello(testName));// error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.


//定义数组的两种类型, 代表 是 value 类型是number 的数组
const list: number[] = [1, 2, 3]
const list2: Array<number> = [1, 2, 3]


/**
 *元组类型
 * 意思就是 value类型可以不一样
 */

const tuple: [Array<any>, number] = [[1], 1]
const tuple2: [string, number] = ["1", 2]


/**
 * 枚举类型 enum
 */

enum Name { name1, name2}
const name1 : Name = Name.name1


/**
 * 空 void
 * 代表这个函数的返回值是空
 */
function sayName(name:string) : void{
    alert(name)
}

//当返回值不是 字符串 就会报错提示  真的挺方便 就是写起来有点麻烦..
function  sayName2(name:string): string {
    // return 1
    return "李金珂"
}
