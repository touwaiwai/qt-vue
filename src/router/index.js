import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import VIP from '@/view/VIP'

import listen from '@/view/listen'
import xiazai from '@/view/xiazai'
import shoucang from '@/view/shoucang'
import stlishi from '@/view/stlishi'



import denglu from '@/view/denglu'
import sjhdenglu from '@/view/sjhdenglu'
import xgmima from '@/view/xgmima'


import help from '@/view/help'
import setting from '@/view/setting'
import lishi from '@/view/index/lishi'
import allNav from '@/view/allNav'
import geren from '@/view/geren'
import searchContent from '@/view/searchContent'
import searchIndex from '@/view/search/searchIndex'
import searchDetail from '@/view/search/searchDetail'
import tuijian from '@/view/index/tuijian'
import xiaoshuo from '@/view/xiaoshuo'

import aztuijian from '@/view/xiaoshuo/aztuijian'
import reting from '@/view/xiaoshuo/reting'
import xiaoshuoman from '@/view/xiaoshuo/xiaoshuoman'
import xiaoshuowomen from '@/view/xiaoshuo/xiaoshuowomen'
import womentuijian from '@/view/xiaoshuo/womentuijian'
import womentchangxiao from '@/view/xiaoshuo/womentchangxiao'

import detail from '@/view/detail'
import detailjiemu from '@/view/detail/detailjiemu'
import detailtuijian from '@/view/detail/detailtuijian'

import ertong from '@/view/index/ertong'
import wenhua from '@/view/wenhua'
import jiaoyu from '@/view/jiaoyu'
import pingshu from '@/view/index/pingshu'
import qinggan from '@/view/index/qinggan'
import helpshow from '@/view/help/helpshow'
import elses from '@/view/help/elses'
import loop from '@/view/help/loop'
import buy from '@/view/help/buy'
import sup from '@/view/help/sup'
import user from '@/view/help/user'
import xsxp from '@/view/index/xsxp'

import open from '@/view/open/open'
import otuijian from '@/view/open/otuijian'
import opinglun from '@/view/open/opinglun'

import PersonalCenter from '@/view/PersonalCenter'
import dingshi from '@/view/dingshi'
import yuyue from '@/view/yuyue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hdsave',
      name: 'open',
      component: open,
			children:[
			  {
			    path: '/hdsave',
			    name: 'otuijian',
			    component: otuijian
			  },
				{
				  path: '/hdsave/opinglun',
				  name: 'opinglun',
				  component: opinglun 
				}
				]
    },
		
	{
	  path: '/mine',
	  name: 'PersonalCenter',
	  component: PersonalCenter
	},
	{
	  path: '/dingshi',
	  name: 'dingshi',
	  component: dingshi
	},
	{
	  path: '/yuyue',
	  name: 'yuyue',
	  component: yuyue
	},
	{
	  path: '/detail',
	  name: 'detail',
	  component: detail,
	  children:[
		  {
		//跳转节目
				path: 'detailjiemua',
		  	name: 'detailjiemu',
		  	component: detailjiemu
		  },
		  {
			  //跳转推荐
			  	path: 'detailtuijian',
			    name: 'detailtuijian',
			    component: detailtuijian
		  },
			{ path: '/detail', redirect: '/detail/detailjiemua' }
	  ]
	},
	{
	  path: '/searchContent',
	  name: 'searchContent',
	  component: searchContent,
	  children:[
		  {
			path: 'searchIndex',
			name: 'searchIndex',
			component: searchIndex,
		  },
		  {
		  	path: 'searchDetail',
			name: 'searchDetail',
			component: searchDetail,
		  },
		  { path: '/searchContent', redirect: '/searchContent/searchIndex' }
	  ]
	},
	{
	  path: '/VIP',
	  name: 'VIP',
	  component: VIP
	},
	
	{
	  path: '/listen',
	  name: 'listen',
	  component: listen,
		
	},
	
	{
	  path: '/xiazai',
	  name: 'xiazai',
	  component: xiazai,
		
	},
	
	{
	  path: '/shoucang',
	  name: 'shoucang',
	  component: shoucang,
		
	},
	
	{
	  path: '/stlishi',
	  name: 'stlishi',
	  component: stlishi,
		
	},
	
	
	{
	  path: '/denglu',
	  name: 'denglu',
	  component: denglu
	},
	
	{
	  path: '/sjhdenglu',
	  name: 'sjhdenglu',
	  component: sjhdenglu
	},
	
	{
	  path: '/xgmima',
	  name: 'xgmima',
	  component: xgmima
	},
	
	{
	  path: '/help',
	  name: 'help',
	  component: help,
	  children:[
		  {
		    path: 'helpshow',
		    name: 'helpshow',
		    component: helpshow
		  },
		  {
		    path: 'sup',
		    name: 'sup',
		    component: sup
		  },
		  {
		    path: 'elses',
		    name: 'elses',
		    component: elses
		  },
		  {
		    path: 'loop',
		    name: 'loop',
		    component: loop
		  },
		  {
		    path: 'user',
		    name: 'user',
		    component: user
		  },
		  {
		    path: 'buy',
		    name: 'buy',
		    component: buy
		  },
		  { path: '/help', redirect: '/help/helpshow' }
	  ]
	},
	{
	  path: '/allNav',
	  name: 'allNav',
	  component: allNav
	},
	{
	  path: '/setting',
	  name: 'setting',
	  component: setting
	},
	{
	  path: '/geren',
	  name: 'geren',
	  component: geren
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
			  component: xiaoshuo,
				children:[
					  {
						  //原始
					    path: '/index/xiaoshuo',
					    name: 'xiaoshuoman',
					    component: xiaoshuoman,
						children:[
							  {
												  //原始推荐
							  path: '/index/xiaoshuo',
							  name: 'aztuijian',
							  component: aztuijian
							},
							 {
												  //跳转推荐
							  path: '/index/xiaoshuo/aztuijian',
							  name: 'xaztuijian',
							  component: aztuijian
							},
							{
												  //跳转热听
							  path: '/index/xiaoshuo/reting',
							  name: 'reting',
							  component: reting
							}	
						]
					  },
					  {
										  //跳转男士
					  path: '/index/xiaoshuo/xiaoshuoman',
					  name: 'wxiaoshuoman',
					  component: xiaoshuoman,
						children:[
							  {
												  //原始推荐
							  path: '/index/xiaoshuo/xiaoshuoman',
							  name: 'waztuijian',
							  component: aztuijian
							},
							 {
												  //跳转推荐
							  path: '/index/xiaoshuo/xiaoshuoman',
							  name: 'maztuijian',
							  component: aztuijian
							},
							{
												  //跳转热听
							  path: '/index/xiaoshuo/reting',
							  name: 'xreting',
							  component: reting
							},
						]				
					},
					   {
					  					  //跳转女士
					    path: '/index/xiaoshuo/xiaoshuowomen',
					    name: 'xiaoshuowomen',
					    component: xiaoshuowomen,
						children:[
							{
								//原始推荐
								path: '/index/xiaoshuo/xiaoshuowomen',
								name: 'womentuijian',
								component: womentuijian
							},
								{
								//跳转推荐
								path: '/index/xiaoshuo/xiaoshuowomen/womentuijian',
								name: 'swomentuijian',
								component: womentuijian
							},
							{
								//跳转畅销
								path: '/index/xiaoshuo/xiaoshuowomen/womentchangxiao',
								name: 'womentchangxiao',
								component: womentchangxiao
							}
							
						]
					  }
				]
				
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
			{
			  path: 'wenhua',
			  name: 'wenhua',
			  component: wenhua
			},
			{
			  path: 'jiaoyu',
			  name: 'jiaoyu',
			  component: jiaoyu
			},
			{
			  path: 'lishi',
			  name: 'lishi',
			  component: lishi
			},
			{ path: '/index', redirect: '/index/tuijian' }
		]
	},
	 { path: '/', redirect: '/index/tuijian' }
  ] 
})
