<template>
	<div class="tu">
		<ul>
			<li class="zi" v-for="(item,index) in tabList" :key="index">
				<div class="smabox" >
					<img class="banner" :src= "item.img" >
					<div class="tit">
						<span>{{item.title}} </span>
						<p>{{item.conter}}</p>
					<p class="slogo">
							<span><img src="../../assets/img-az/detaila.png">{{item.da}}</span>
							<span><img src="../../assets/img-az/detailb.png">{{item.db}}</span>
						</p>
					</div>
					

				</div>
			
			
			<div class="shoucang">
				收藏
			</div>
			 </li>
			 
			 
			 
		</ul>
	</div>
</template>

<script>
	export default{
		name:"detailtuijian",
		data:function(){
			return{
				tabList:[
				      { "img": "../../../static/img/banner/1.jpg", title: "遮天",da:"3.2亿",db:"144期",conter:"一个大土鳖"},
				      { "img": "../../../static/img/detail/xiazai.png", title: "斗罗大陆" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
				      { "img": "../../../static/img/detail/xiazai.png", title: "斗罗大陆3",da:"3.2亿",db:"144期" ,conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "斗罗大陆2" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "斗罗大陆1" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "神墓",da:"3.2亿" ,db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "星辰变" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "完美世界",da:"3.2亿" ,db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "斗破苍穹" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "邪神传说" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "盘龙" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
						{ "img": "../../../static/img/detail/xiazai.png", title: "圣墟" ,da:"3.2亿",db:"144期",conter:"一个大土鳖"},
				    ],
				    current:0
				
			}
			
		}
	}
</script>

<style>
	.shoucang{
		color:red;
		width: 0.85rem;
		height: 0.33rem;
		border:1px solid red;
		border-radius: 20px;
		font-size: 0.13rem;
		line-height: 0.33rem;
		text-align: center;
		margin-right:0.2rem;
		margin-top: 0.3rem;
	}
	
	
	li {
		display: -webkit-flex;
		justify-content: space-between;
		border-bottom: 5px solid #fafafa;
		height: 1rem;
		
		
	}
	
	.smabox span{
		font-size: 0.17rem;
		font-weight: 600;
		line-height: 0.35rem;
		margin-left: 0.1rem;
		
		
	}
	
	.tit p{
		font-size: 0.17rem;
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
		margin-left: 0;
		margin-right: 0.1rem;
		color: #949494;
	}
	.slogo{
		display: -webkit-flex;
	}
	
	
	
	
	
	.banner{
		width:0.7rem;
		height: 0.7rem;
		margin-left: 0.1rem;
		
	}
	
	.smabox{
		display: -webkit-flex;
		margin-top:0.15rem;
	}
	
	.tit p{
		font-size: 0.11rem;
		color: #b0b0b0;
		margin-left: 0.1rem;
	}
</style>
