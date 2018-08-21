var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

//循环
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

//绑定时间v-on：
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

//双向绑定
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义特性。
    // 这个 prop 名为 todo。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})

var app8 = new Vue({
    el: '#app-8',
    data: {
        isButtonDisabled:false
    }
})

var vm = new Vue({
    el: '#example',
    data: {
        message :'hello',
        // computedDate :'',
        methodsDate:''
    },
    computed: {
        newMessage:function(){
            return this.message.split('').reverse().join('')
        },
        computedDate:function(){
            return Date.now();
        }
    },
    methods:{
        getNewDate:function(){
            this.message = String(Date.now());
            this.methodsDate = Date.now();
        }
    }
})

//class与style绑定
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})
var app8 = new Vue({
    el: '#app-9',
    data:{
        isActive:true,
        styleObject:{
            color:'red',
            fontSize:'30px'
        }
    }
})
