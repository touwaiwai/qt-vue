<template>
  <div class="tab-head">
    <ul class="tab-list">
      <li v-for="(item,index)  in tabList" :key="index" v-on:click="addClass(index)" v-bind:class="{ active:index==current}">
	  {{item.title}}
	   </li>
	   <img src="../../assets/img/classify.png">
    </ul>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import '../../assets/css/swiper.min.css';
	import '../../assets/js/swiper.min.js';
export default {
  data() {
    return {
      tabList: [
        { id: 0, title: "推荐" },
        { id: 1, title: "小说" },
        { id: 2, title: "评书" },
		{ id: 3, title: "相声小品" },
		{ id: 4, title: "儿童" },
		{ id: 5, title: "直播" },
		{ id: 6, title: "历史" },
		{ id: 7, title: "蜻蜓之声" },
		{ id: 8, title: "脱口秀" },
		{ id: 9, title: "短音频" },
		{ id: 10, title: "精品" },
		{ id: 11, title: "广播" },
		{ id: 12, title: "头条" },
		{ id: 13, title: "情感" },
		{ id: 14, title: "文化" },
		{ id: 15, title: "教育" },
		{ id: 16, title: "汽车" },
		{ id: 17, title: "财经" },
		{ id: 18, title: "音乐" },
		{ id: 19, title: "娱乐" },
		{ id: 20, title: "戏曲" },
		{ id: 21, title: "科技" },
		{ id: 22, title: "外语" },
		{ id: 23, title: "广播剧" },
		{ id: 24, title: "二次元" },
		{ id: 25, title: "生活" },
		{ id: 26, title: "母婴" },
		{ id: 27, title: "校园" },
		{ id: 28, title: "出版精品" },
		{ id: 29, title: "中国之声" },
		{ id: 30, title: "AI读书" },
		{ id: 31, title: "搞笑" },
		{ id: 32, title: "品牌电台" },
		{ id: 33, title: "联合专区" }
      ],
      current:0
    };
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    }
  }
};
</script>

<style scoped="scoped">
	.tab-list{
background:white;
padding-left:.17rem;
/* padding-right:.17rem; */
  width: 100%;
  height: 65px;
  position: absolute;
  top: 0;
  left: 0;
 display: -webkit-box;
 -webkit-box-align: center;
  align-items: center;
  z-index: 1000;
}
.tab-list li{
  float: left;
  cursor: pointer;
margin-right:.2rem;
color: #949494;
font-size: .17rem;
overflow:hidden;
}
.tab-list li:hover{
  color: rgb(255, 0, 0);
}
.tab-list li.active{
   color: rgb(255, 0, 0);
    font-size:.3rem;
}
img{
	width: .3rem;
	height: .3rem;
	/* display: inline-block; */
	position: absolute;
	right: .17rem;
	top: .15rem;
	z-index: 9999;
	background-color: white;
}
</style>
