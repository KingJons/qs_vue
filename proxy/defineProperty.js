var a = {}; //被代理或被劫持
// 精细化的操作对象的属性访问
// 三个参数 目标对象 需要定义的属性或方法的名字  目标属性所拥有的特性
// Object.defineProperty(a, "b", {
//     value: 123,
//     writable: true,
//     configurable: false
// });
// a.b = 234;
// console.log(a.b);
// Object.defineProperty(a, "b", {
//     value: 3445,
//     enumerable: true
// });
// console.log(a);
// console.log(Object.keys(a));
// for( key in a) {
//     console.log(key);
// }
var val = 0;
Object.defineProperty(a, 'b', {
    get: function() {
        console.log("你取我的值");
        return val;
    },
    set: function(newValue) {
        console.log(val);
        console.log('你要赋值给我，我的新值是' + newValue);
        val = newValue;
        // console.log(newValue);
    }
    
})
console.log('1');
console.log(a.b);
a.b = 3;
console.log(a.b);
