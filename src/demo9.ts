// 类的使用
// 三种访问类型 private、protected和public

// class Person {
//     protected name: string = '1';
//     private age: string = '1';
//     public sayHello(){
//         console.log(this.name + 'say Hello')  //此处不报错
//     }
// }

// class Teacher extends Person{
//     public sayBye(){
//         this.name;
//     }
// }

/**
 * //类的构造函数
 */


// class Person1{
//     public name :string;
//     constructor(name:string){
//         this.name=name
//     }

// }

// 上面的简化写法
// class Person{
//     constructor(public name:string){
//     }
// }

// const person= new Person('jspang')
// console.log(person.name)



// const person1= new Person1('jspang')
// console.log(person.name)

/**
 * // 继承类构造器写法
 */

// class Person{
//     protected age:Number = NaN
//     constructor(public name:string){}
//     public seyHello() {
//         console.log('helo,boy')
//     }
// }

// class Teacher extends Person{
//     //简化写法，上下两段等值
//     constructor(public age:number){
//         super('jspang') //调用父类的构造函数
//     }
//     // constructor( age:number){
//         // this.age = age
//     //     super('jspang') //调用父类的构造函数
//     // }
// }

// const teacher = new Teacher(18)
// console.log(teacher.age)
// console.log(teacher.name)
// console.log(teacher.seyHello())

/**
 * class get set  使用
 * */
// class xiaojiejie3 {
//     //_age代表私有写法
//     constructor(private _age:number) {

//     }
//     get age(){
//         console.log('调用了小姐姐3的get')
//         return this._age
//     }
//     set age(age:number) {
//         this._age = age +1
//     }
// }

// const dajiao1 = new xiaojiejie3(28)
// console.log(dajiao1.age)  //get 用法

// dajiao1.age = 30     //set 用法
// console.log(dajiao1.age)

/**
 * 静态类
 */

// class Girl {
//     static seyLove(){
//         return 'i lov u static'
//     }
//     //  seyLove(){
//     //     return 'i lov u'
//     // }
// }

// // const gril = new Girl()
// console.log(Girl.seyLove())

/** 
 * readonly
 * 只读属性
*/
// class Person {
//     public readonly _name:string
//     constructor(name:string) {
//         this._name = name
//     }
//     // constructor( public name:string) {
//     //     this.name = name
//     // }
// }
// const person1 = new Person('zhaog')
// console.log(person1._name)
// // person1._name = 'me'
// console.log(person1._name)


/**
 * 抽象类
 * 与父类相似，需要继承
 * 继承抽象类的类 必须实现抽象类中声明的抽象方法
 */

//抽象父类只剩吗一个方法
abstract class Girl {
    abstract skill():any
}
// 子类来实现抽象类业务逻辑
class Waiter extends Girl {
    skill(){
        console.log('大爷，请喝水')
    }
}








