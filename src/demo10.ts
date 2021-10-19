/**
 * 联合类型,type|type
 * 类型保护  断言， in ，instansof，===
 *
 */
//场景，会anjiao是技士，不会就是服务元
interface Waiter {
    anjiao:boolean;
    say:()=>{}
}

interface Teacher {
    anjiao: boolean;
    skill:()=>{}
}

// function judgewho(animal:Waiter|Teacher) {
//     //as 类型断言
//     if(animal.anjiao) {
//         (animal as Teacher).skill()
//     } else {
//         (animal as Waiter).say()
//     }
// }

// function judgewhotwo(animaltwo: Waiter|Teacher) {
//     if('skill' in animaltwo) {
//         animaltwo.skill()
//     } else {
//         (animaltwo as Waiter).say()
//     }
// }



