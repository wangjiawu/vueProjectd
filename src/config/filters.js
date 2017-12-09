import Vue from 'vue';
import moment from 'moment';

//过滤器，格式化日期
Vue.filter('fmtdate',(date,fmrstr)=>{
    return moment(date).format(fmrstr);
})

