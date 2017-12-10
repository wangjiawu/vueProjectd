//使用vue-router模块
import Vue from 'vue';
import VueRouter from 'vue-router';
//vue使用插件
Vue.use(VueRouter);
//1.引用组件
import home from '../components/Home/home.vue';
import member from '../components/member/member.vue';
import shopcar from '../components/shopcar/shopcar.vue';
import search from '../components/search/search.vue';

import news from '../components/Home/News/news.vue';
import buy from '../components/Home/Buy/buy.vue';
import contact from '../components/Home/Contact/contact.vue';
import feedback from '../components/Home/Feedback/feedback.vue';
import share from '../components/Home/Share/share.vue';
import vedio from '../components/Home/Vedio/vedio.vue';

import newsDetail from '../components/Home/News/detail.vue';

import shareDetail from '../components/Home/Share/detail.vue';


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
        {name:'newsDetail',path:'/news/:id',component:newsDetail,props: true},
        {name:'shareDetail', path:'/share/:id',component:shareDetail,props:true},
        
    ]
});

export default router;