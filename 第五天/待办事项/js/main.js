

const vm = new Vue({
    el: '#app',
    data: {
        backlog: '',
        select: '1',
        list: [
            {
                title: '待办事项1',
                isFinish: true
            },
            {
                title: '待办事项2',
                isFinish: false
            },
            {
                title: '待办事项3',
                isFinish: false
            }
        ]
    },
    computed: {
        getFinish() {
            let count = 0;
            this.list.map(item => {
                if (item.isFinish) {
                    count++;
                }
            });
            return count;
        },
        getFilterList() {
            if (this.select === '1') {
                return this.list;
            }
            if (this.select === '2') {
                return this.list.filter(item => item.isFinish);
            }
            if (this.select === '3') {
                return this.list.filter(item => !item.isFinish);
            }
        }
    },
    methods: {
        del(index) {
            this.list.splice(index, 1);
        },
        add() {
            if (this.backlog) {
                this.list.push({
                    title: this.backlog,
                    isFinish: false
                });
                this.backlog = '';
            }
        }
    },
    watch: {
        select() {

        }
    }
});

