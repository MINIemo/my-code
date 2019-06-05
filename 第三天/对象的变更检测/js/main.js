


const vm = new Vue({
    el: '#app',
    data: {
        // 所有需要响应的数据 都最好 提前定义好
        a: 1,
        obj: {
            name: 'Steel',
        }
    }
});

// Vue 不能检测到 对象属性的 添加或删除
// vm.b = 100;
vm.obj.age = 28;