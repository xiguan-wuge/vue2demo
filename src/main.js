import Vue from 'vue';
import App from './App.vue';
// import { Area } from 'vant';

// Vue.use(Area);
// Vue.use(Picker)s
import mConsole from './components/mConsole';

console.log('main');

Vue.config.productionTip = false;
import './assets/style/global.css';

Vue.component('mConsole', mConsole);
new Vue({
  render: h => {
    return h(App);
  },
}).$mount('#app');
