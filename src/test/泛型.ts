/*
 * @Date: 2021-10-20 01:22:17
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2024-12-28 00:40:57
 * @FilePath: /tsss-study/src/test/泛型.ts
 * @name: filename
 * @description: description
 */
/**
 * 泛型  
 */

// function join(first:string|number, second:string|Number) {
//     return `${first}+${second}`    
// }
// //
// join('11','22')

function join<T>(first:T, second:number) {
    return `${first}+${second}`    
}
//<type>泛型指定参数定义类型，即使用时再确定类型
join<string>('11',1)

//属组泛型
function myFun<T,P>(name:T[],age:P) {
    return name
}
// 执行时不使用也不报错，会类型推断
// const myfun = myFun(['123'],1)
const myfun = myFun<string,number>(['123'],1)
console.log(myfun,'myfun')

function foo<T>(name:T) {
    
}

/**
 * 泛型 在类 中的 使用
 */

//基本使用
//接口约束，必须有一个name
// interface Girl {
//     name:string
// }
// //代表泛型T必须继承name属性
// class SelectGirl<T extends Girl> {
//     constructor(private girls: T[]) {
//     }
//     getGirl(index:number):string{
//         return this.girls[index].name
//     }
// }
// //此处由于约束不了了，要用类型推断
// const selectGirl = new SelectGirl([{name:'1'},{name:'2'},{name:'3'}])
// console.log(selectGirl.getGirl(1))

//泛型约束
class SelectGirl<T extends string | number> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
      return this.girls[index];
    }
  }
  
  const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
  console.log(selectGirl.getGirl(1));



  //还有更广泛的实际应用，自己业务中感觉