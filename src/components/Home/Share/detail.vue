<template>
  <div class="mui-content">
         <div class="title">
            <h4>{{ detail.title }}</h4>
            <span>{{ detail.add_time | fmtdate('YYYY-MM-DD') }}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>点击次数{{detail.click}}</span>
        </div>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in images" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                   <img :src="item.src" alt="">
                </a>
            </li>
        </ul> 

        <p class="content" v-html="detail.content">
          这里是内容
        </p>
    <comment :id=id></comment>
        <!-- 评论--> 
    </div>
</template>

<script>
import comment from '../../conment/comment.vue';
export default {
  data(){
      return{
          detail:{},
          images:[]
      }
  },
  props:['id'],
  created(){
    this.getdetail();
    this.getimages();
  },
  methods:{
      getdetail(){
          var url = 'getimageInfo/'+this.id;
          this.axios
          .get(url)
          .then((res)=>{
              if(res.status === 200 && res.data.status === 0){
                   if(res.data.message.length > 0){
                       this.detail = res.data.message[0];
                   }
              }else {
                  console.log('服务器出错');
              }
          })
          .catch((err)=>{
              console.error(err);
          })
      },
      getimages(){
      var url = 'getthumimages/'+this.id;
      this.axios
      .get(url)
      .then((res)=>{
          if(res.status === 200 && res.data.status ===0){
              this.images = res.data.message;
          }else{
              console.log('服务器出错');
          }
      })
      .catch((err)=>{
          console.error(err);
      })
      }
  },
  components:{
   comment
  }
}
</script>


<style scoped>
 .mui-content {
    background-color: #fff;
  }
  .title {
        margin: 15px 5px;
    }
    
    .title h4 {
        color: dodgerblue;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .title span {
        font-size: 13px;
        color: rgba(92, 92, 92, 0.6);
    }
    /*9宫格样式*/
    
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border-left: 0px;
    }
    
    .mui-table-view-cell img {
        height: 100px;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
        padding: 0;
        margin: 0;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>


