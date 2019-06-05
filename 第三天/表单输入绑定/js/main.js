
// 表单输入绑定（v-model）
// v-model：用于将 数据与表单元素的 value属性 创建 双向绑定，指令值 必须是 某个 data属性

const vm = new Vue({
    el: '#app',
    data: {
        username: '请输入用户名',
        text: '我是一段文本内容',
        password: '',
        radio: '1',
        check: ['1', '4'],
        check1: true,
        select: '3',
        select1: ['1', '4'],
        select2: '5'
    }
});