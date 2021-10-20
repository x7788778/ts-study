
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