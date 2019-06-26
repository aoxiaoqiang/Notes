# 开篇词

前两天无意间看到一个面试题，第一反应我却答错了，后来仔细想想觉得还是对于JavaScript原生的很多API不熟悉。比如一些API的用法、参数、返回值等，这些总是模模糊糊的，所以我想要数量掌握JavaScript就必须要熟悉每个常用API，这样用起来才不会出错。九层之台起于累土，基础要牢才能走的更远。

下面一起回顾下这个题目吧：

```javascript
// 下面输出的res值是多少
var res = [1, 2, 3].map(parseInt);
console.log(res);
```

看到第一眼也没多想，觉得应该是`[1, 2, 3]`, 后来实际运行了一下发现输出的是 `[1, NaN, NaN]`。仔细想了下 `parseInt` 方法是接收两个参数的，第一个参数是要解析的字值，第二个只是字符串的基数，这个值通常默认是10。

```javascript
// string	要解析的字符串
// radix	基数，默认是10
parseInt(string, radix);


// 例如将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
parseInt('123', 5)；

```

**返回解析后的整数值。 如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN。**



再看下 JavaScript中 `map`的方法，有两个参数。第一个参数是一个方法，而这个方法接收3个参数：正在处理的当前元素、正在处理的当前元素索引、`map` 方法被调用的数组。

```javascript
var new_array = arr.map(function callback(currentValue[, index [, array]]) {
	// currentValue   当前处理的元素
	// index					当前处理的元素索引
	// array 					map方法被调用是的数组，这里也就是 arr 数组
}[, thisArg])
```

熟悉了`map`和`parseInt` 这两个API之后，结果就显而易见了。map的时候执行的 parseInt就是
```javascript
parseInt(1, 0); // 1
parseInt(2, 1); // NaN
parseInt(3, 2);	// NaN
```

所以最后输出的就是 `[1, NaN, NaN]`。




因此我计划最近将一些基础的 JavaScript API 整理一遍， 梳理一下自己对基础知识的掌握程度，查漏补缺。




参考地址：

+ [https://segmentfault.com/a/1190000015895317](https://segmentfault.com/a/1190000015895317)
+ [map文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
+ [parseInt文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)



