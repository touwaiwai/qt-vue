import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index' 
import VIP from '@/view/VIP'//超级会员页面

import listen from '@/view/listen'//我听页面
import xiazai from '@/view/xiazai'//我听页面-->我的下载
import shoucang from '@/view/shoucang'//我听页面-->我的收藏
import stlishi from '@/view/stlishi'//我听页面-->收听历史
import wdyigou from '@/view/wdyigou'//我听页面-->我的已购



import denglu from '@/view/denglu'//登录页面
import sjhdenglu from '@/view/sjhdenglu'//手机号登录页面
import xgmima from '@/view/xgmima'//忘记密码页面


import help from '@/view/help'
import setting from '@/view/setting'//个人中心页面-->设置页面
import lishi from '@/view/index/lishi'//历史页面
import allNav from '@/view/allNav'//首页右上角的全部分类
import geren from '@/view/geren'//个人中心页面-->设置页面-->修改个人资料页面

import searchContent from '@/view/searchContent'//
import searchIndex from '@/view/search/searchIndex'//搜索页面
import searchDetail from '@/view/search/searchDetail'//搜索页面-->搜索结果页面
import tuijian from '@/view/index/tuijian'//推荐页面
import xiaoshuo from '@/view/xiaoshuo'//小说页面

import aztuijian from '@/view/xiaoshuo/aztuijian'//小说页面-->推荐（页面打开时默认的是男生页面）
import reting from '@/view/xiaoshuo/reting'//小说页面-->热听（页面打开时默认的是男生页面）
import xiaoshuoman from '@/view/xiaoshuo/xiaoshuoman'//小说页面-->男生
import xiaoshuowomen from '@/view/xiaoshuo/xiaoshuowomen'//小说页面-->女生
import womentuijian from '@/view/xiaoshuo/womentuijian'//小说页面-->女生-->推荐
import womentchangxiao from '@/view/xiaoshuo/womentchangxiao'//小说页面-->女生-->畅销

import detail from '@/view/detail'//详情页
import detailjiemu from '@/view/detail/detailjiemu'//详情页-->节目页面（二级路由）
import detailtuijian from '@/view/detail/detailtuijian'//详情页-->推荐页面（二级路由）

import ertong from '@/view/index/ertong'//儿童页面
import wenhua from '@/view/wenhua'//文化页面
import jiaoyu from '@/view/jiaoyu'//教育页面
import pingshu from '@/view/index/pingshu'//评书页面
import qinggan from '@/view/index/qinggan'//情感页面

import PersonalCenter from '@/view/PersonalCenter'//个人中心页面
import dingshi from '@/view/dingshi'//个人中心页面-->定时关闭页面
import yuyue from '@/view/yuyue'//个人中心页面-->预约节目页面
import helpshow from '@/view/help/helpshow'//个人中心页面-->帮助与反馈页面
import elses from '@/view/help/elses'//个人中心页面-->帮助与反馈页面-->其他问题页面
import loop from '@/view/help/loop'//个人中心页面-->帮助与反馈页面-->播放问题页面
import buy from '@/view/help/buy'//个人中心页面-->帮助与反馈页面-->充值或购买问题页面
import sup from '@/view/help/sup'//个人中心页面-->帮助与反馈页面-->超级会员问题页面
import user from '@/view/help/user'//个人中心页面-->帮助与反馈页面-->账号问题页面
import xsxp from '@/view/index/xsxp'//相声小品页面

import open from '@/view/open/open'//底部中间的播放页面（超级会员右边）
import otuijian from '@/view/open/otuijian'//底部中间的播放页面-->推荐页面（二级路由）
import opinglun from '@/view/open/opinglun'//底部中间的播放页面-->评论页面（二级路由）


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
	  path: '/wdyigou',
	  name: 'wdyigou',
	  component: wdyigou,
		
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
