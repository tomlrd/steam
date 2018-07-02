import Vue from 'vue'

import App from './App'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
require('vuetify/dist/vuetify.min.css')

import router from './router'

Vue.use(Vuetify)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

Vue.component('loading',{ template: '<div>Loading!</div>'})