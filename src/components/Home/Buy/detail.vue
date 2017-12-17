<template>
    <div class="mui-content">
        <div class="detail">
            <div class="top">
             <swipe :imgUrl='imgUrl'></swipe>
            </div>
        </div>
        <div class="sell">
            <h4>{{ goods.title }}</h4>
            <div class="price">
                市场价：<s>￥{{ goods.market_price }}</s> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：<span>￥{{ goods.sell_price }}</span>
            </div>
            <div class="num">
                购买数量：<number @numberchange = "numberchanged" :stock="goods.stock_quantity"></number>
                <transition 
                  v-on:before-enter="beforeEnter"
                  v-on:enter="enter"
                  v-on:after-enter="afterEnter"
                  v-on:after-leave="afterLeave"
                >
                <div v-show="isShow" class="ball"></div>
                </transition>
            </div>
            <div class="button">
                <button class="mui-btn mui-btn-primary">立刻购买</button>
                <button @click="addcart" class="mui-btn mui-btn-danger">加入购物车</button>
            </div>
        </div>

        <div class="param">
            <h5>商品参数</h5>
            <div class="info">
                <p>商品编号：{{goods.goods_no}}</p>
                <p>库存情况：{{goods.stock_quantity}}件</p>
                <p>上架时间：{{goods.add_time}}</p>
            </div>
        </div>
        
        <div class="footer">
            <a class="mui-btn mui-btn-primary mui-btn-outlined">图文介绍</a>
            <a @click= "push" class="mui-btn mui-btn-danger mui-btn-outlined">商品评论</a>
        </div>
    </div>
</template>

<script>
//导入轮播图组件
 import swipe from '../../conment/swipe.vue';
 //导入数字组件
 import number from '../../conment/number.vue';
  //导入通信组件
  import vueObj from '../../../config/communication.js'; 
  //导入操作本地存储的模块
  import { setData } from '../../../config/localstorageHelp';
    //导出组件
    export default {
        components:{
        swipe,
        number,
    },
    props:['id'],
    data() {
        return {
            imgUrl:'getthumimages/'+this.id,
            goods:{},
            count:1,
            isShow:false
        }
    },
    created(){
    this.getgoods();
    },
    methods:{
        getgoods(){
            let url = 'goods/getinfo/'+this.id;
            this.axios
            .get(url)
            .then((res)=>{
                if(res.status === 200 && res.data.status ===0){
                    if(res.data.message.length === 0){
                        return;
                    }
                    this.goods = res.data.message[0];
                }else{
                    console.log('服务器出错');
                }
            })
            .catch((err)=>{
                console.error(err);
            })
        },
        push(){
            this.$router.push({name:'buyComment',prams:{id:this.id}});
        },
         // number组件中的数字发生变化后会调用
        numberchanged(count){
           this.count = count.count;
        },
        addcart(){
        // 1 获取到number组件中值
        // this.count
        // 2 更新底部的badge
        

        this.isShow = true
        // 2.2 更新
        // 3 小球动画
        // 4 保存购物车的数据到本地存储
        setData({id:this.id,count:this.count});
        },
        //执行动画钩子函数
         beforeEnter(el) {
           el.style.transform = 'translate(0,0)';
        },
        enter(el, done) {
            //小球的位置
            let elX = el.getBoundingClientRect().left;
            let elY = el.getBoundingClientRect().top;
            //badge的位置
            let badge = document.querySelector('.mui-badge');
            let badgeX = badge.getBoundingClientRect().left;
            let badgeY = badge.getBoundingClientRect().top;

            //相减
            let x = badgeX - elX;
            let y = badgeY - elY;

            el.style.transform=`translate(${x}px,${y}px)`;
            done()
        },
        afterEnter: function (el) {
            this.isShow = false;
        },
        afterLeave:function(){
          // 2.1 点击加入购物车，要把count传递到app.vue
        vueObj.$emit('updateBadge', this.count);
        }
     }    
    }
</script>

<style scoped>

    .num {
        position: relative;
    }
    
    .ball {
        left: 115px;
        top: 3px;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        transition: all 0.5s linear;
        z-index: 1000;
        
    }
    
    .mui-content {
        background-color: #fff;
    }
    
    .top,
    .sell,
    .param,
    .footer {
        border: 1px solid rgba(92, 92, 92, 0.7);
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
    }
    
    .sell h4 {
        color: dodgerblue;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .price,
    .num,
    .button {
        margin: 10px;
        font-size: 15px;
    }
    
    .price span {
        font-size: 18px;
        color: red;
    }
    
    .param h5 {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .info {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    .info p {
        margin: 0;
    }
    
    .footer .mui-btn {
        width: 100%;
    }
    
    .footer .mui-btn-danger {
        margin-top: 10px;
    }
</style>
