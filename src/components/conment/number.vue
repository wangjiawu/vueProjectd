<template>
  <div class="number">
      <div class="number">
    <div @click="sub" class="left">-</div><div class="middle">{{ count }}</div><div class="right" @click="add">+</div>
  </div>
  </div>
</template>

<script>
export default {
    props:['stock'],
  data(){
      return{
      count:1
      }
  },
  methods:{
      sub(){
          if(this.count === 1){
             this.$toast('已经是第一个了');
             return;
          }
          this.count--;
          this.notify();
      },
      add(){
          if(this.count >= this.stock){
           this.$toast('已到库存是最大数量');
            return;
          }
          this.count++;
          //通知事件触发
           this.notify();
      },
      //
      notify(){
        this.$emit('numberchange',this.count);
      }
  }
}
</script>

<style scoped>
 .number{
   display: inline-block;
  text-align: center;
}
.number .left,
.number .middle,
.number .right{
    display: inline-block;
    width:30px;
    height: 25px;
    border:1px solid rgba(92, 92, 92, 0.5);
}
.number .middle{
   width:40px;
   border-left:0px;
   border-right:0px;
}
</style>


