/*基础静态类型*/
const count :number = 123

// 对象静态类型

const gaolaozhuang: {
    zhubajie:string
} = {
    zhubajie:'猪八戒'
}
let gaolaozhuang2:string[] = ['猪八戒','孙悟空']

// 类
class person {
    source: string //es6 新写法，之前不需要在类中定义属性
    constructor(){
        this.source = ''
    }
    foo(){
        console.log('foo')
        return 1

    }
}
let zhubaje:person = new person()
zhubaje.source = '地球'
// console.log(zhubaje,zhubaje.foo(),'persion')

const wanyouxi: (who:string)=>string = (who) => {

    return who + '玩lol'
}
console.log(wanyouxi('我'))