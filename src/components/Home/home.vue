<template>
  <div class="mui-content">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in images" :key="index">
            <a :href="item.url">
                <img :src="item.img" alt="">
            </a>
        </mt-swipe-item>
       <!-- <mt-swipe-item>
            <a href="#">
                <img src="../../../statics/images/shuijiao.jpg" alt="">
            </a>
        </mt-swipe-item>
        <mt-swipe-item>
            <a href="#">
                <img src="../../../statics/images/yuantiao.jpg" alt="">
            </a>
        </mt-swipe-item> -->
      </mt-swipe> 
      <!-- 九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="item in menus " :key = "item.url" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="item.url">
                    <span class="mui-icon" :class="item.className"></span>
                    <div class="mui-media-body">{{item.title}}</div>
              </router-link>
            </li>
             <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon icon-share"></span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon icon-buy"></span>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon icon-feedback"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon icon-video"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon icon-contact"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li> -->
        </ul>
  </div>
</template>
  
<script>
   import Vue from 'vue';
   import 'mint-ui/lib/swipe/style.css';
   import { Swipe, SwipeItem } from 'mint-ui';

   Vue.component(Swipe.name, Swipe);
   Vue.component(SwipeItem.name, SwipeItem);   
   export default {
       data(){
           return{
            images:[],
            menus:[]
           }
       },
       created(){
         this.getlunbo();
         this.getmenus();
       },
       methods:{
           //获取轮播图数据
           getlunbo(){
               this.$http
               .get('getlunbo')
               .then((res)=>{
                   if(res.status===200 && res.data.status===0){
                       this.images = res.data.message;
                   }else{
                       console.log('服务器出错');
                   }
               })
               .catch((err)=>{
                  console.error(err);
               })
           },
           //获取九宫格数据
           getmenus(){
               this.$http
               .get('getmenus')
               .then((res)=>{
                   if(res.status ===200 && res.data.status ===0){
                       this.menus = res.data.message;
                   }else{
                       console.log('服务器出错');
                   }
               })
               .catch((err)=>{
                   console.error(err);
               })
           }
       }
   }
</script>

<style scoped>
.mint-swipe {
    height: 250px;
}
.mint-swipe img {
    height: 100%;
    width:  100%;
}
.mui-table-view{
    background-color: #fff;
}
.mui-content > .mui-table-view:first-child {
    margin-top:0px;
}
  .mui-icon {
      width: 50px;
      height: 50px;
      background-repeat: round;
  }
  .icon-news {
      background-image: url(../../../statics/images/menu1.png);
  }
   .icon-share {
      background-image: url(../../../statics/images/menu2.png);
  }
   .icon-buy {
      background-image: url(../../../statics/images/menu3.png);
  }
   .icon-feedback {
      background-image: url(../../../statics/images/menu4.png);
  }
   .icon-video {
      background-image: url(../../../statics/images/menu5.png);
  }
   .icon-contact {
      background-image: url(../../../statics/images/menu6.png);
  }
</style>
