
// class与style的绑定
// class的绑定语法
// 对象形式：{类名:布尔值,类名:布尔值,类名:布尔值，类名:布尔值...}
// 数组形式：[表达式,表达式，表达式，表达式....]
// 对象数组结合的形式：[对象,对象,对象...]

// style的绑定
// 对象形式：{样式名：样式值,样式名：样式值,样式名：样式值，样式名：样式值...}
// 数组形式：[样式对象,样式对象,样式对象，样式对象...]

const vm = new Vue({
    el: '#app',
    data: {
        classObj1: {
            p3: true,
            p4: false
        },
        classArray1: [
            'p3',
            'p6'
        ],
        styleObj1: {
            color: "red",
            fontSize: "60px"
        },
        styleObj2: {
            border: "1px solid green"
        }
    }
});

console.log(vm);

setTimeout(() => {
    vm.classObj1.p3 = false;
    vm.classArray1.push('p10');

    vm.styleObj1.color = "blue";
}, 2000);