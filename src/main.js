import Vue from 'vue'

import App from './components/App.vue'
import store from './js/store'

/*
**  App
*/

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
