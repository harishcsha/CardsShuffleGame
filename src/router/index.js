import Vue from 'vue'
import Router from 'vue-router'
import Udaan from '@/components/Udaan.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Udaan',
      component: Udaan
    }
  ]
})
