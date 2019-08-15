                                                                                                                                                                                                                                                                                                                                                                                                           <template>
  <div>
    <ul>
      <router-link class="zi" v-for="(item,index) in tabList" :to="item.id" :key="index" 
			@click="add(index)" activeClass="active">
	  {{item.title}}                                           
	   </router-link>
	   <img src="@/assets/img/classify.png">
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
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
      ],
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
.zi{
	-webkit-align-self:center;
	-webkit-flex-shrink:0;
  cursor: pointer;
	margin-right:.2rem;
	color: #949494;
	font-size: .17rem;
}
.active{
  color: red;
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
