<template>
  <div>
    <ul>
      <li v-for="(item,index) in tabList" :key="index" @click="add(index)" :class="{active:index==current}">
	  {{item}}
	   </li>
	   <img src="@/assets/img/classify.png">
    </ul>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import '@/assets/css/swiper.min.css'
export default {
  data() {
    return {
      tabList: ["推荐","小说","评书","相声小品","儿童","历史","蜻蜓之声","脱口秀","精品","广播","头条","情感",
			"文化","教育","汽车","财经","音乐","娱乐","戏曲","科技","外语","广播剧","二次元","生活","母婴","校园","出版精品",
			"中国之声","AI读书","搞笑","品牌电台","联合专区"],
			current:0
    }
  },
	methods: {
		add(index) {
			return this.current=index;
		}
	},
};
</script>

<style scoped="scoped">
ul{
	overflow: hidden;
	padding: 0 .16rem;
	display: -webkit-flex;
	width: 100%;
	height: .54rem;
	-webkit-flex-wrap: nowrap;
	-webkit-align-items:center;
	position: relative;
	overflow-x: auto;
}
li{
	-webkit-align-self:center;
	-webkit-flex-shrink:0;
  cursor: pointer;
	margin-right:.2rem;
	color: #949494;
	font-size: .17rem;
}
.active{
  color: rgb(255, 0, 0);
	font-size: .3rem;
}

img{
	width: .3rem;
	height: .3rem;
	position: fixed;
	right: 0;
	top: .15rem;
	background-color: white;
}
</style>
