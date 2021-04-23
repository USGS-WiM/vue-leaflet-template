import Vue from 'vue'
import App from './App.vue'
import uswds from 'uswds/dist/js/uswds'
import leaflet from 'leaflet/dist/leaflet'

Vue.config.productionTip = false

// USWDS
Vue.use(uswds);

// Leaflet
Vue.use(leaflet);

new Vue({
  render: h => h(App),
}).$mount('#app')
