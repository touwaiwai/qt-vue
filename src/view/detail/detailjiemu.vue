<template>
	<div>
		<div class="heard">
			<div class="leftbox">
				<span>共1804期</span>
			</div>
			<div class="rightbox">
				<img src="../../assets/img-az/xiazai.png" alt="">
				<img src="../../assets/img-az/paixu.png" alt="">
				<img src="../../assets/img-az/xuanji.png" alt="">
			</div>
		</div>
		<ul>
			<li class="zi" v-for="(item,index) in tabList" :key="index" :class="current===index?'active':''"
			@click="bianse(index)">
				<div class="smabox">
					<span>{{item.title}}</span>
					<p class="slogo">
						<span><img src="../../assets/img-az/detaila.png">{{item.da}}</span>
						<span><img src="../../assets/img-az/detailb.png">{{item.db}}</span>
						<span><img src="../../assets/img-az/detailc.png">{{item.dc}}</span>
		
					</p>
				</div>
				<img :src= "item.img" alt="" class="xiazai">
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"detailjiemu",
		data:function(){ 
			return{
				tabList:[
				      { "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆1",da:"16:33",db:"504.8万",dc:"2016-02-03"},
				      { "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆2" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
				      { "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆3",da:"16:33",db:"504.8万" ,dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆4" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆5" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆6",da:"16:33" ,db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆7" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆8",da:"16:33" ,db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆9" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆10" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆11" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
						{ "img": "../../static/img/detail/xiazai.png", title: "斗罗大陆12" ,da:"16:33",db:"504.8万",dc:"2016-02-03"},
				    ],
				    current:0
			}
			
		},
		methods: {
			bianse(index){
				this.current = index;
			}
		}
	}
</script>

<style scoped="scoped">
	li {
		display: -webkit-flex;
		justify-content: space-between;
		border-bottom: 5px solid #fafafa;
		height: 0.65rem;
		
	}
	.smabox span{
		font-size: 0.17rem;
		font-weight: 600;
		line-height: 0.35rem;
		margin-left: 0.1rem;
		
	}
	.smabox{
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 0.16rem;
	}
	
	.xiazai{
		width:0.23rem;
		height: 0.23rem;
		margin-right: 0.19rem;
		margin-top: 0.2rem;
	}
	.slogo img{
		width: 0.11rem;
		height: 0.11rem;
		margin-top: 0.1rem;
	}
	.slogo span{
		font-size: 0.11rem;
		display: -webkit-flex;
		margin-left: 0.1rem;
		color: #949494;
	}
	.slogo{
		display: -webkit-flex;
	}
	.rightbox img{
		width: 0.29rem;
		height: 0.38rem;
		margin-right:0.1rem ;
	}
	.rightbox{
		display: -webkit-flex;
		padding-right: 0.1rem;
		
	}
	.leftbox span{
		font-size: 0.12rem;
		line-height: 0.3rem;
		margin-left: 0.3rem;
		color: #9d9d9d;
	}
	.heard{
		display: -webkit-flex;
		justify-content: space-between;
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
	}
	.active{
		color: red;
	}
</style>
