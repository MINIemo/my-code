
const reg = {
    username: /^[a-zA-Z0-9_]{4,16}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

const vm = new Vue({
    el: '#app',
    data: {
        user: {
            name: '',
            email: '',
            list: []
        },
        validate: {}
    },
    watch: {
        "user.name"() {
            if (this.user.name) {
                this.validate.userName = !reg.username.test(this.user.name);
            }
        },
        "user.email"() {
            if (this.user.email) {
                this.validate.email = !reg.email.test(this.user.email);
            }
        }
    },
    methods: {
        add() {
            if (this.user.name && this.user.email) {
                if (!this.validate.userName && !this.validate.email) {
                    this.user.list.push({
                        userName: this.user.name,
                        email: this.user.email
                    });
                    this.user.name = '';
                    this.user.email = '';
                }
            }
        },
        del(index) {
            this.user.list.splice(index, 1);
        }
    }
});