关于[面试题]("https://github.com/lydiahallie/javascript-questions/blob/master/README-zh_CN.md")
1. var let const
   + var 声明的变量 会被提升，值为undefined. let/const 声明变量也会提升，只是没有初始化。试图在声明前访问它们时，会抛出undefined.
2. for循环中var let setTimeout
   + 由于 JavaScript 的事件循环，setTimeout 回调会在遍历结束后才执行。因为在第一个遍历中遍历 i 是通过 var 关键字声明的，所以这个值是全局作用域下的。在遍历过程中，我们通过一元操作符 ++ 来每次递增 i 的值。当 setTimeout 回调执行的时候，i 的值等于 3。
   + 在第二个遍历中，遍历 i 是通过 let 关键字声明的：通过 let 和 const 关键字声明的变量是拥有块级作用域（指的是任何在 {} 中的内容）。在每次的遍历过程中，i 都有一个新值，并且每个值都在循环内的作用域中。
3. 常规函数&箭头函数 中的this
   + 在箭头函数中，this 是词法作用域，由上下文确定。（简单来说是包含箭头函数的常规函数，如果没有常规函数的话就是全局对象）
   + this只有在函数被调用，或者通过构造函数new Object()的形式才会有this(对象里面没有作用域，我理解的)
```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()//20
shape.perimeter()//NaN
```
4. new Number() 是一个对象而不是 number
5. 类（class）通过 static 关键字定义静态方法
   + 不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。
6. 不能像常规对象那样，给构造函数添加属性。如果你想一次性给所有实例添加特性，你应该使用原型。
7. 时间传播的三个阶段
   + 第一阶段：从window对象传导到目标节点，称为“捕获阶段”（capture phase）。
   + 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
   + 第三阶段：从目标节点传导回window对象，称为“冒泡阶段”（bubbling phase）。
   + 在捕获（capturing）阶段中，事件从祖先元素向下传播到目标元素。当事件达到目标（target）元素后，冒泡（bubbling）才开始。
8. 基本对象（base object），所有对象都有原型。基本对象可以访问一些方法和属性，比如 .tostring。这就是为什么你可以使用内置的 JavaScript 方法！所有这些方法在原型上都是可用的。虽然 JavaScript 不能直接在对象上找到这些方法，但 JavaScript 会沿着原型链找到它们，以便于你使用。
9. 隐式类型转换
   + '+'转换成字符串
   + '-'转换成数字
```
function toString(a){
    return a + ''
}
toString(21) //'21'
function toNumber(a){
    return a - 0;
}
toNumber('20'); //20
```
10. 使用标记模板字面量，第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值！
```
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old` //["", " is ", " years old"] "Lydia" 21
```
11. 测试相等性时，基本类型通过它们的值（value）进行比较，而对象通过它们的引用（reference）进行比较。
12. eval(string)
   + eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
   + 只接受原始字符串作为参数，如果 string 参数不是原始字符串，那么该方法将不作任何改变地返回。因此请不要为 eval() 函数传递 String 对象来作为参数
```
eval("x=10;y=20;document.write(x*y)")//200
```
13. 使用 var 关键字，你可以用相同的名称声明多个变量。然后变量将保存最新的值。你不能使用 let 或 const 来实现这一点，因为它们是块作用域的。(let const不能重复声明同一个变量)
14. JavaScript 全局执行上下文
15. continue 语句跳过本次迭代
16. 6 种 falsy 值
   + undefined
   + null
   + NaN
   + 0
   + ""(empty string)
   + false
17. reduce(函数[,初始值])
18. setInterval 返回一个唯一的 id。此 id 可被用于 clearInterval 函数来取消定时。
19. string 类型是可迭代的。扩展运算符将迭代的每个字符映射成一个元素。//["L", "y", "d", "i", "a"]
