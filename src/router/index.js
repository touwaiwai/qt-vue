import Vue from 'vue'
import Router from 'vue-router'
import qheader from '@/components/public/qheader'
import open from '@/components/lihaosong/open'
import PersonalCenter from '@/components/PersonalCenter/PersonalCenter'
// import 
Vue.use(Router)

export default new Router({
  routes: [
	  {
		  path:"/",
		  name:"qheader",
		  compontent:qheader
	  },
    {
      path: '/hdsave',
      name: 'open',
      component: open
    },
	{
	  path: '/mine',
	  name: 'PersonalCenter',
	  component: PersonalCenter
	},
  ]
})
