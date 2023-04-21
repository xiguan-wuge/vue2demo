import Vue from 'vue';
import App from './App.vue';
import { Area } from 'vant';

Vue.use(Area);
// Vue.use(Picker)s

console.log('main');

Vue.config.productionTip = false;
import './assets/style/global.less';

new Vue({
  render: h => {
    return h(App);
  },
}).$mount('#app');
