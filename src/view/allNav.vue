<template>
	<div>
		<p><span @click="back"><</span><span>全部分类</span></p>
		<div class="all">
			<router-link class='tit' v-for="(item,index) in allnav" :key='index' :to='item.id'>
			{{item.title}}
			</router-link></div>
		</div>
</template>

<script>
	export default{
		data(){
			return {
				allnav:[
					{ id: "/index/tuijian", title: "推荐"},
					{ id: "/index/xiaoshuo", title: "小说" },
					{ id: "/index/pingshu", title: "评书" },
					{ id: "/index/xsxp", title: "相声小品" },
					{ id: "/index/ertong", title: "儿童" },
					{ id: "/index/qinggan", title: "情感" },
					{ id: "/index/wenhua", title: "文化" },
					{ id: "/index/jiaoyu", title: "教育" },
					{ id: "/index/lishi", title: "历史" },
					{ id: "/index/qtzs", title: "蜻蜓之声" },
					{ id: "/index/tuokouxiu", title: "脱口秀" },
					{ id: "/index/jingpin", title: "精品" ,},
					{ id: "/index/guangbo", title: "广播" },
					{ id: "/index/toutiao", title: "头条" },
					{ id: "/index/qiche", title: "汽车" },
					{ id: "/index/caijin", title: "财经" },
					{ id: "/index/yinyue", title: "音乐" },
					{ id: "/index/yule", title: "娱乐" },
					{ id: "/index/xiqu", title: "戏曲" },
					{ id: "/index/keji", title: "科技" },
					{ id: "/index/waiyu", title: "外语" },
					{ id: "/index/guangboju", title: "广播剧" },
					{ id: "/index/erciyuan", title: "二次元" },
					{ id: "/index/shenghuo", title: "生活" },
					{ id: "/index/muying", title: "母婴" },
					{ id: "/index/xiaoyuan", title: "校园" },
					{ id: "/index/cbjp", title: "出版精品" },
					{ id: "/index/zgzs", title: "中国之声" },
					{ id: "/index/dushu", title: "AI读书" },
					{ id: "/index/gaoxiao", title: "搞笑" },
					{ id: "/index/ppdt", title: "品牌电台" },
					{ id: "/index/lhzq", title: "联合专区" }
				]
			}
		},
		methods: {
			back() {
				this.$router.push('index')
			}
		},
	}
</script>

<style scoped="scoped">
	
	p{
		background: white;
		position: fixed;
		width: 100%;
		height: .4rem;
		padding: .05rem .16rem 0;
		font-size: .2rem;
		left: 0;
		top: 0;
	}
	p span{
		margin-right: 1rem;
		float: left;
		font-weight: 700;
	}
	.all{
		padding-top: .1rem;
		width: 100%;
		padding-left:.21rem;
		margin-top: .4rem;
		background: #E9E9E9;
		overflow: hidden;
		box-sizing: border-box;
	}
	.tit{
		width: 1rem;
		height: .8rem;
		text-align: center;
		line-height: .8rem;
		font-size: 16px;
		margin-bottom: .1rem;
		margin-right: .18rem;
		background: white;
		float: left;
		border-radius: 5px;
	}
</style>
