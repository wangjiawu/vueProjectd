import Vue from 'vue';
import axios from 'axios';
import '../components/conment/swipe.vue';
axios.defaults.baseURL = 'http://127.0.0.1:8899/api';
Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

// 全局引用mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
// 引用样式
import 'mint-ui/lib/style.css';


// 引用mui的css
import '../../statics/css/mui.css';
