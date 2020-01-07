import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import VueResource from 'vue-resource';
import VueSweetalert2 from 'vue-sweetalert2';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.use(VueResource)
Vue.use(VueRouter);
Vue.use(VueSweetalert2);

const router = new VueRouter({
  routes,
  mode: 'history'
});

// const vue_resource = new VueResource()
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
