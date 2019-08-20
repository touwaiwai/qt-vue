<template>
	<div class="xiangqingye">
		
	
	<div class="tit">
		<div class="herad">
			<span class="iconfont icon-fanhui" @click="back"></span>
			<span class="iconfont icon-fenxiang"></span>
		</div>
		<div class="book">
			<img :src= "img" alt="">
			<div class="bookname">
				<h3>{{book}}</h3>
				<span>{{zhuangtai}}</span>
			</div>
		</div>
		<p>
			<span class="iconfont icon-xinjia"></span>
			<span>收藏</span>
		</p>
		
	
	</div>
	
	<div class="jiemu">
		<router-link class="bom" to="/detail/detailjiemua" activeClass="active">节目</router-link>
		<router-link class="bom" to="/detail/detailtuijian" activeClass="active">推荐</router-link>	
	</div>
		<router-view></router-view>
	</div>
</template>

<script>
		export default {
		name: "detail",
		data: function() {
			return {
			"img":"../../../static/img/banner/1.jpg",
			book:"我的美女老婆",
			zhuangtai:"已完结"
			}
		},
		methods:{
			back(){
				history.back();
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../assets/font_az/iconfont.css";


.tit{
	background: #918070;
	position: relative;
	padding-bottom:0.2rem ;
}
.iconfont{
	color:white;
}

.herad{
	display: -webkit-flex;
	justify-content: space-between;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
}

.icon-fanhui{
	margin-left:0.2rem;
	font-size: 0.22rem;
}
.icon-fenxiang{
	margin-right: 0.2rem;
	font-size: 0.22rem;
}
.book{
	display: -webkit-flex;
}


.book img{
	 display: block;
	width: 1.05rem;
	height: 1.05rem;
	margin-left:0.2rem;
	margin-right:0.2rem;
}
.bookname h3{
	font-size: 0.14rem;
	
}

.bookname span{
	font-size: 0.1rem;
	
}
p{
	font-size: 0.1rem;
	display: -webkit-flex;
	width:0.75rem;
	height:0.3rem;
	background: #ee797f;
	border-radius: 20px;
	position: absolute;
	top:1.2rem;
	left:2.7rem;
	line-height: 0.3rem;
}
p span{
	color: white;
	margin-left: 0.1rem;
}


.jiemu{
	padding-top:0.1rem;
	display: -webkit-flex;
	font-size: 16px;
}
.bom{
	margin-left:1.05rem;
}
.active{
	font-size: .2rem;
	border-bottom: 3px solid red;
}
</style>
