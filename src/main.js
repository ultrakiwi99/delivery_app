import Vue from 'vue';
import App from './App.vue';
import Api from './utils/Api';

Vue.config.productionTip = false;

Vue.prototype.$api = new Api();

new Vue({
  render: h => h(App),
}).$mount('#app');
