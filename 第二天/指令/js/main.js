

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

const vm = new Vue({
    el: '#app',
    data: {
        flag: false,
        flag1: true,
        type: 'C',
        flag2: true,

        title:'我是插值处的标题1111'
    }
});

setTimeout(() => {
    // vm.flag = false;
    vm.flag2 = false;

    vm.title = '我是插值处的标题2222'
}, 2000);