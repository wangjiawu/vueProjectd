<template>
  <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in images" :key="index">
            <a :href="item.url">
                <img :src="item.img" alt="">
            </a>
        </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
data(){
    return{
      images:[]
    }
},
created(){
 this.getlunbo();
},
props:['imgUrl'],
methods:{
      //获取轮播图数据
    getlunbo(){
        this.$http
        .get(this.imgUrl)
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
    }
 }
};
</script>

<style scoped>
.mint-swipe {
    height: 250px;
}
.mint-swipe img {
    height: 100%;
    width:  100%;
}
</style>
