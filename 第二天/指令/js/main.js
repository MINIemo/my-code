

// 指令
// 作用：用于对 DOM 的操作

// 带有 ‘v-’前缀 的 称为指令，指令的值是 单个 js表达式，使用 ''或"" 包含

// 条件判断指令
// v-if：用于 删除和添加 DOM元素，根据 指令值是true或者false 决定是否删除
// v-else：必须 跟在 v-if 指令后面
// v-else-if：必须 跟在 v-if或者v-else-if指令后面

// v-show：用于 显示和隐藏 DOM元素，根据 指令值是true或者false 决定是否显示

// 当 DOM元素结构比较复杂并且会被频繁切换时，使用 v-show


// v-once：执行 一次性的 插值，当插值处的数据发生变化时，插值处的数据 不再更新

// v-html：用于向 DOM元素中 插入 html字符串
// v-text：用于向 DOM元素中 插入 普通文本


// v-bind：用于 给 DOM元素绑定某个属性，通过 v-bind:要绑定的属性名 绑定特定属性，指令名称冒号后面的值 称为 指令参数
// v-bind可以 简写为 :


// v-on：用于 给 DOM元素绑定某个事件，指令参数：事件名称
// v-on可以 简写为 @


const vm = new Vue({
    el: '#app',
    data: {
        flag: false,
        flag1: true,
        type: 'C',
        flag2: true,

        title: '我是插值处的标题1111',

        html: '<h1>我是v-html的标题</h1><p>我是v-html的内容</p>',
        text: '[1,2,3,4]',

        url: 'https://www.baidu.com'
    },
    // 通过 methods 选项来 定义 方法
    methods: {
        fn1() {
            console.log(1);
            console.log(this);
            // 方法内部的 this指向当前Vue实例
            this.fn2();

            this.title = '我是修改后的标题';
        },

        // fn1: () => {
        //     // this 指向 window
        //     console.log(this);
        // },
        fn2() {
            console.log(2);
        }
    }
});

console.log(vm);

setTimeout(() => {
    // vm.flag = false;
    vm.flag2 = false;

    vm.title = '我是插值处的标题2222';

    vm.html = '<h1>我是v-html的标题</h1>';

    vm.url = 'https://www.taobao.com'
}, 2000);