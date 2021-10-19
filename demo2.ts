/*
    静态类型
*/

const num:number = 1 

/*
    自定义静态类型
    interface
*/

interface qiuyuan {
    name: string,
    num: number
}

const messi: qiuyuan  = {
    name :"梅西",
    num : 10 
}

interface clock  {
    //不希望完全匹配 加 ‘？’标记
    //readonly 符号使 某字段不会被修改 
    readonly time?: Date,
    desc: string,
    // void 与 any类型相反，代表没有任何类型
    run?():void

}
const shijian: clock = {
    desc:'是时间'
}

//类型断言两种方式等价
// jsx语法中使用ts只有as可以用
let num2 : any = '1234'
let yiersan:number = (<string>num2).length
let siwuliu:number = (num2 as string).length
console.log(messi,'日志') 