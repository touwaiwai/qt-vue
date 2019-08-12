import Vue from 'vue'
import Router from 'vue-router'
import foot from '@/components/public/foot'
// import 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foot',
      component: foot
    }
  ]
})
