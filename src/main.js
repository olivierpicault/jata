import Vue from 'vue'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Main component
import App from './components/App.vue'

// Store
import store from './js/store'

// Font awesome
library.add(faTrash)
Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

// App
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
