
// 事件处理与修饰符

// 修饰符：指令的修饰符，. 后面添加修饰符，作用是给 指令添加额外功能

// 事件处理的修饰符：.prevent，.stop，.once

const vm = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        increase(val, e) {
            // 当没有任何参数时，默认会把事件对象传过来，否则需要显示传递事件对象（通过$event）
            console.log(val, e);

            this.count++;

        }
    }
});