# sort方法
- 根据一个知道如何对两个数组元素进行比较的函数 对数字进行排序
- 改变原数组，返回重新排序后的数组
- 传递给sort方法的函数必须返回下面其中一个值，大于0，等于0，小于0
```
var arr=[3,5,22,72,19]
arr.sort(function(a,b){
    return a-b //3,5,19,22,72
    return b-a //72,22,19,5,3
})
```