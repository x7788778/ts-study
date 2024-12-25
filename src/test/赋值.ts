/*
 * @Date: 2021-10-17 20:47:57
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-12-15 23:48:01
 * @FilePath: /tsss-study/src/test/demo7.ts
 * @name: filename
 * @description: description
 */
// 元组   ,可以理解为属组的加强版 ，业务场景不多


//正常赋值
const xiaojiejie: (string|number)[] = ['a',1,'b']
console.log(xiaojiejie)

//元组赋值
const xiaojiejie2:[string,string,number] = ['a','a',1]

//属组内嵌元组
const xiaojiejies: [string, string, number][] = [
    ["dajiao", "teacher", 28],
    ["liuying", "teacher", 18],
    ["cuihua", "teacher", 25],
  ];