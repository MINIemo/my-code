

// 计算属性（computed）
// 依赖于 某些data属性 返回新的结果

const vm = new Vue({
    el: '#app',
    data: {
        title: '我是标题',
        name: 'Steel',
        age: 28
    },
    methods: {
        reverseMsg() {
            console.log(2);
            return this.title.split('').reverse().join('');
        }
    },
    // 通过 computed 选项来 定义 计算属性
    computed: {
        // getMsg: {
        //     get() { },
        //     // set() { }
        // },
        // 没有 set函数时，可以简写
        // 1.计算属性会 依赖某些data属性，一旦 依赖的data属性发生变化，计算属性的 get函数被会再次调用
        // 2.只要 依赖的data属性不发生变化，计算属性的 get函数就不会被调用
        // 3.计算属性的值 会依赖于 data属性 进行缓存，多次访问同一个计算属性不会 调用它的 get函数
        getMsg() {
            // this 指向 当前 Vue实例
            console.log(1);
            return this.title.split('').reverse().join('');
        },
        getPerson() {
            console.log(3);
            return `${this.name}今年${this.age}岁`;
        }
    }
});

// 当 某个操作性能开销较大的时候，就使用 计算属性
// 如果不想 缓存值，就使用 方法

console.log(vm);

setTimeout(() => {
    vm.name = 'Bao';
    vm.title = 'hello';
}, 2000);