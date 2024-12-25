/*
 * @Date: 2021-10-17 20:55:33
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-12-15 23:56:51
 * @FilePath: /tsss-study/src/test/接口定义类型.ts
 * @name: filename
 * @description: description
 */

// interface  接口定义类型
// 只在生产环境生效，起到约束作用

//implaments 约束 
// extends 继承


interface Gilr {
    name: string, 
    age: number, 
    bust: number, 
    yaowei?: number,
    [ropname:string]:any,
    sey?():string //返回值必须为string
    
}

// type作用就是给类型起一个新名字，支持基本类型、联合类型、元祖及其它任何你需要的手写类型,常用于联合类型
type boy  = {
    name: string, 
    age: number, 
    bust: number, 
}

interface Girl2 extends Gilr {
    teach():void
}

class xiaojiejie1 implements Gilr{
    name= 'dajiao';
    age= 17; 
    bust= 90;
    sey(){
        return ''
    }
}

const dajiao = {
    name: 'dajiao', age: 17, bust: 90,sey(){
        return ''
    }
}
const mianshi = (girl: Gilr) => {
    girl.age < 20 && 
    girl.bust > 20 ? 
    console.log(`恭喜${girl.name}选拔成功`) : console.log(`${girl.name},你已经被淘汰`)
}
const resume = (girl: Gilr) => {
    console.log(`${girl.name}的年龄是${girl.age},胸围是${girl.bust}`)
}

mianshi(dajiao)
resume(dajiao)



