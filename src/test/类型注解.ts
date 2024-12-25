//类型注解

//注解
let count1:string
count1 ='123'
//推断
let countinterface = '123' 
// countinterface = 123  不能在给数字类

//不需要注解
let one = 1
let tow = 1
let three = 1
let fore = '4'
let sum = one + tow + three + fore

//需要注解
const total = (one:number,two:number) => {
    return one + two 
}
const totalsun = total(1,2)
/*
如果 TS 能够自动分析变量类型， 我们就什么也不需要做了

如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
*/