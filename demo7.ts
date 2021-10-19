// 元组   ,可以理解为属组的加强版 ，业务场景不多


//正常肤质
const xiaojiejie: (string|number)[] = ['a',1,'b']
console.log(xiaojiejie)

//元组fuzhi
const xiaojiejie2:[string,string,number] = ['a','a',1]

//属组内嵌元组
const xiaojiejies: [string, string, number][] = [
    ["dajiao", "teacher", 28],
    ["liuying", "teacher", 18],
    ["cuihua", "teacher", 25],
  ];