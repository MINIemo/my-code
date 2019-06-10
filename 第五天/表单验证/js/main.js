

const reg = {
    username: /^[a-zA-Z0-9_]{4,16}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

const vm = new Vue({
    el: '#app',
    data: {
        user: {
            username: '',
            email: ''
        },
        // verification: {
        //     username: false,
        //     email: false
        // },
        list: [

        ]
    },
    // watch: {
    //     'user.username'() {
    //         this.verification.username = !reg.username.test(this.user.username);
    //     },
    //     'user.email'() {
    //         this.verification.email = !reg.email.test(this.user.email);
    //     }
    // },

    computed: {
        verification() {
            const obj = {};
            if (this.user.username) {
                obj.username = !reg.username.test(this.user.username);
            }
            if (this.user.email) {
                obj.email = !reg.email.test(this.user.email);
            }
            return obj;
        }
    },
    methods: {
        add() {
            if (this.user.username && this.user.email) {
                if (!this.verification.username && !this.verification.email) {
                    this.list.push({
                        username: this.user.username,
                        email: this.user.email
                    });
                    this.user.username = '';
                    this.user.email = '';
                }
            }
        }
    }
});















