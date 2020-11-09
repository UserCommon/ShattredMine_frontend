import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './registerServiceWorker'

import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuelidate from 'vuelidate'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
