

// 侦听器（watch）
// 用于 监听 某个data属性的变化

const vm = new Vue({
    el: '#app',
    data: {
        age: 28,
        obj: {
            name: 'Steel'
        }
    },
    methods: {
        fn1() {
            this.age = 30;
            this.obj.name = 'Bao';
        },
        fn2() {
            this.age = 42;
        }
    },
    // 通过 watch选项 来 定义 侦听器
    watch: {
        // 一旦 age属性发生变化，就会 调用age对应的 函数
        age(newVal, oldVal) {
            // this指向当前 Vue实例
            console.log(this);
            console.log(newVal, oldVal);
        },
        // 'obj.name'(newVal, oldVal) {
        //     console.log(1111);
        //     console.log(newVal, oldVal);
        // },
        obj: {
            handler(newVal, oldVal) {
                console.log(newVal, oldVal);
                console.log(newVal === oldVal);
            },
            // 设置监听对象属性的变化
            deep: true,
            // 侦听器定义好之后立即执行 侦听器函数
            immediate: true
        }
    }
});

console.log(vm);