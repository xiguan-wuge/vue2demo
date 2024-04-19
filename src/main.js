







import Vue from 'vue';
import App from './App.vue';
import './directives/index';
// import { Area } from 'vant';

// Vue.use(Area);
// Vue.use(Picker)s
import mConsole from './components/mConsole';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Select
} from 'element-ui'
console.log('Select.name', Select.name);
Vue.component(Select.name, Select);
console.log('main');

Vue.config.productionTip = false;
import './assets/style/global.css';


import Guide from './components/guide'
Vue.use(Guide)
// Vue.component('mConsole', mConsole);
new Vue({
  render: h => {
    return h(App);
  },
}).$mount('#app');
