//加载Vue模块，是从事node_modules中加载
import Vue from 'vue';
import path from 'path';

//加载组件模块
import app from './app.vue';

//导入路由模块
import router from './config/router';

// 导入过滤器
import  './config/filters';

//导入插件（axios，mint-ui, mui（css））
import  './config/plugins';


//3.吧路由挂载到vue实例上
let vm = new Vue({
    el:'#app',
    router,
    render : c =>c(app),
    created(){
        // 设置axios的拦截器
        // 发送请求之前
        this.axios.interceptors.request.use(function (config) {
            // console.log(this);
            // Do something before request is sent
            this.$indicator.open('正在加载...');
            return config;
          }.bind(this), function (error) {
            // Do something with request error
            return Promise.reject(error);
          });

          this.axios.interceptors.response.use(function(response){
              this.$indicator.close();
              return response;
          }.bind(this),function(error){
            return Promise.reject(error);
          })
    }

})