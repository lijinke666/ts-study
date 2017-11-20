/**
 * 感觉和 es6 class  没啥区别..
 * public 代表公用字段
 */

 class ljk{
     info:string
     constructor(public name:string, public age:number){
         this.info = `我是:${name},今年:${age}`
     }
 }

 const user = new ljk('李金珂',18)