import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import './assets/css/tzt-icon.css'
import './assets/css/tztui.min.css'
// import './config/tztui.min.js'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
