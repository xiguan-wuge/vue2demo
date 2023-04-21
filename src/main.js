import Vue from 'vue'
import App from './App.vue'
import {Area} from 'vant'

Vue.use(Area)
// Vue.use(Picker)s

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
