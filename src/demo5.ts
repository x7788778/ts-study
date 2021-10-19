//参数返回类型的注解 

function getTotal(one: number, two: number):number {
    return one + two;
  }
  
const total2 = getTotal(1, 2);

const getTotal2:(one:number,two:number)=>Number = (one:number,two:number)=> {
    
    return one + two
}
// void 代表 没有返回值
function foo2():void {
    console.log(1)
}
//never 代表执行不完
function bar():never {
    //抛出错误或者死循环
    throw console.error();
}

//对象入餐方法
function foo1({a}:{a:number}) {
    return a + ''
}
foo1({a:1})



