- vscode ts 都是出自微软的。所以使用vscode有插件保证
通过yarn 全局安装 ts后 如果没有命令可以将 `yarn global bin`的目录添加进环境变量

 export PATH="$PATH:`yarn global bin`:$HOME/.config/yarn/global/node_modules/.bin"
## tsconfig
- `tsc init` 
生成tsconfig.json 编译配置文件
比如target : es5 可能有些es6标准库里没有的方法会不能使用
- 配置项

"include":["xxx.ts"]  xxx.ts会走编译，其他不走
"files":["xxx.ts"]  xxx.ts会走编译，其他不走
"exclude":["xxx.ts"]  与include相反
- compilerOptions
"noImplicitAny": true, any时不用特意生命可以改成false<br/>
"strictNullChecks": true,  允许与否null出现<br/>
"outDir": "./buld",  编译出口<br/>
"rootDir": "./src", 入口<br/>
 "sourceMap": true,  一般部署的时候生成<br/>
"noUnusedLocals": true, 没用的变量，编译报错提示<br/>

 [编译选项详解](https://www.tslang.cn/docs/handbook/compiler-options.html)

## ts主要特点
- 定义静态类型

- 安装ts-node typescript 
注意使用npm 全局安装 不要用yarn ，环境变量策略不同
- 注意tsconifig.json 中 "target": "es6", 如果是es5需要修改，
- ts-node 遵循tsconfig文件

### ts 基础语法
- 类型  大体与js相同
bolean nuber string array object Tuple 枚举 Any void null undefined never symbol

Tuple（元组）： 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
never: never类型表示的是那些永不存在的值的类型. 多用于自定义报错函数
void：与any相反，表示什么类型也不是

- 类型断言
尖括号或者 as

类型断言有两种形式。 其一是“尖括号”语法：

```
zlet someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

另一个为as语法：
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```