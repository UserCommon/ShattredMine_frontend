import Vue from 'vue'
import VueWow from 'vue-wow'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './registerServiceWorker'

//import store from './store'
import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuelidate from 'vuelidate'
import {UAnimateContainer, UAnimate} from 'vue-wow'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(VueWow)

new Vue({
  router,
  axios,
  render: h => h(App),
  components: {
    UAnimateContainer,
    UAnimate
  }
}).$mount('#app')
