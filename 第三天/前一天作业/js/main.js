
const vm = new Vue({
    el: '#app',
    data: {
        list: [
            {
                title: '我是标题1',
                isDone: true
            },
            {
                title: '我是标题2',
                isDone: false
            },
            {
                title: '我是标题3',
                isDone: false
            },
            {
                title: '我是标题4',
                isDone: true
            }
        ]
    },
    methods: {
        del(index) {
            this.list.splice(index, 1);
        },
        setStatus(index) {
            this.list[index].isDone = !this.list[index].isDone;
        }
    }
});