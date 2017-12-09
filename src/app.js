//加载Vue模块，是从事node_modules中加载
import Vue from 'vue';
import path from 'path';
//使用vue-router模块
import VueRouter from 'vue-router';
//1.引用组件
import home from './components/Home/home.vue';
import member from './components/member/member.vue';
import shopcar from './components/shopcar/shopcar.vue';
import search from './components/search/search.vue';

import news from './components/Home/News/news.vue';
import buy from './components/Home/Buy/buy.vue';
import contact from './components/Home/Contact/contact.vue';
import feedback from './components/Home/Feedback/feedback.vue';
import share from './components/Home/Share/share.vue';
import vedio from './components/Home/Vedio/vedio.vue';

import newsDetail from './components/Home/News/detail.vue';
//加载组件模块
import app from './app.vue';
import '../statics/css/mui.css';

//引用时间插件
import moment from 'moment';
//过滤器，格式化日期
Vue.filter('fmtdate',(date,fmrstr)=>{
    return moment(date).format(fmrstr);
})
//vue使用插件
Vue.use(VueRouter);

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8899/api';

Vue.prototype.$http = axios;

//2.创建路由对象
let router = new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {path:'/',component:home},
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},

        {path:'/news',component:news},
        {path:'/buy',component:buy},
        {path:'/contact',component:contact},
        {path:'/feedback',component:feedback},
        {path:'/share',component:share},
        {path:'/vedio',component:vedio},
        {name:'newsDetail',path:'/news/:id',component:newsDetail,props: true}



    ]
});

//3.吧路由挂载到vue实例上
let vm = new Vue({
    el:'#app',
    router,
    render : c =>c(app)
})