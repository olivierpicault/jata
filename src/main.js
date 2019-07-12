import Vue from 'vue'
import App from './components/App.vue'

/*
**  App
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
