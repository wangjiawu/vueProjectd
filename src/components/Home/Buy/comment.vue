<template>
  <div class="mui-content">
    <comment :id="id"></comment>
  </div>
 
</template>

<script>
import comment from '../../conment/comment.vue';
export default {
    components:{
     comment
    },
    props:['id'],
  data(){
    return{
     
    }
  }
}
</script>

<style scoped>

</style>


