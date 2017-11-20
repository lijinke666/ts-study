/** 
 * @name 接口 interface
 * 有点像 mongoose schema 定义字段的类型
 */

interface People {
    name: string
    age: number
}

const my = (info : People)=>{
    return `你好: 我是 ${info.name}, 今年:${info.age}`
}

console.log(my({
    name:"李金珂",
    age:18
}))