

console.dir(Vue);

// 通过 Vue 构造函数 生成 Vue实例

// 开发 Vue项目 的步骤

// 1.创建 VUe实例
// 2. 通过 向 Vue构造函数 传入配置对象 初始化 Vue实例


const vm = new Vue({
    // el：值是一个选择器字符串，将 Vue实例 与 某一个DOM元素（模板）进行绑定，一个 Vue实例绑定一个DOM元素
    // 只有 当前绑定的 DOM元素内部才会受到 Vue实例的控制
    el: '#app',
    // data：定义模板需要的数据
    // 在 data中 定义的数据 都是 响应式的（只要数据发生变化，那么所有引用这个数据的地方都会自动更新）
    data: {
        title: '我是标题11111111',
        obj: {
            name: 'Steel',
            age: 29
        },
        arr: [1, 2, 3, 4],
        flag: false
    }
});

console.log(vm);
console.log(vm.$el);
console.log(vm.title);


setTimeout(() => {
    vm.title = '我是标题222222';

    vm.flag = true;
}, 2000);