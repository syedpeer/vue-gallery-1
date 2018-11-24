import "@babel/polyfill";
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'


Vue.use(BootstrapVue)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})