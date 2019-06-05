
// 列表渲染（v-for）
// v-for：用于将 一组数据 渲染到页面中，会重复渲染当前DOM元素

// 语法：v-for='变量 of 数据'，变量：遍历的每个数组元素或对象属性，数据：被遍历的数组或对象

const vm = new Vue({
    el: '#app',
    data: {
        arr: ['列表1', '列表2', '列表3'],
        arr1: [
            {
                name: '小红',
                age: 18
            },
            {
                name: '小军',
                age: 30
            },
            {
                name: '小黄',
                age: 20
            }
        ],
        arr2: [
            {
                name: '小红',
                age: 18
            },
            {
                name: '小军',
                age: 30
            },
            {
                name: '小黄',
                age: 20
            }
        ],
        obj: {
            name: 'Steel',
            age: 28,
            run() {
                console.log('run');
            }
        }
    },
    computed: {
        getArr() {
            return this.arr1.filter(item => item.age > 18);
        }
    },
    methods: {
        modify() {
            // 只有调用数组的 变异方法(会改变原数组的方法) Vue才可以检测到变化
            // this.arr2.push({
            //     name: '小王',
            //     age: 40
            // });

            this.arr2.splice(1, 1);

            // this.arr2.pop();
        },
        del(index) {
            this.arr2.splice(index, 1);
        }
    }
});