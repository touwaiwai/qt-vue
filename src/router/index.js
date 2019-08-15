import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import VIP from '@/view/VIP'
import listen from '@/view/listen'
import tuijian from '@/view/index/tuijian'
import xiaoshuo from '@/view/xiaoshuo/tuijian'
import ertong from '@/view/index/ertong'
import pingshu from '@/view/pingshu/pingshu'
import qinggan from '@/view/qinggan/qinggan'
import xsxp from '@/view/index/xsxp'
import open from '@/components/lihaosong/open'
import PersonalCenter from '@/components/PersonalCenter/PersonalCenter'
Vue.use(Router)

export default new Router({
  routes: [
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
	{
	  path: '/VIP',
	  name: 'VIP',
	  component: VIP
	},
	{
	  path: '/listen',
	  name: 'listen',
	  component: listen
	},
	{
	  path: '/index',
	  name: 'index',
	  component: index,
		children:[
			{
			  path: 'tuijian',
			  name: 'tuijian',
			  component: tuijian
			},
			{
			  path: 'xiaoshuo',
			  name: 'xiaoshuo',
			  component: xiaoshuo
			},
			{
			  path: 'ertong',
			  name: 'ertong',
			  component: ertong
			},
			{
			  path: 'pingshu',
			  name: 'pingshu',
			  component: pingshu
			},
			{
			  path: 'qinggan',
			  name: 'qinggan',
			  component: qinggan
			},
			{
			  path: 'xsxp',
			  name: 'xsxp',
			  component: xsxp
			},
			{ path: '/index', redirect: '/index/tuijian' }
		]
	},
	 { path: '/', redirect: '/index/tuijian' }
  ] 
})
