// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale})

import routes from './router/index.js'
const router = new Router({
  routes: routes,
  mode: 'history'
})

import {navStore} from './store/modules/navStore'
import {mdStore} from './store/modules/mdStore'
import {buttonStore} from './store/modules/buttonStore'
import {formPersonStore} from './store/modules/formPersonStore'
const store = new Vuex.Store({
  modules: {
    navStore: navStore,
    mdStore: mdStore,
    buttonStore: buttonStore,
    formPersonStore: formPersonStore
  },
  debug: true
})

import axios from 'axios'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  store: store
})
