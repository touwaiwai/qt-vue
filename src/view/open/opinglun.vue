<template>
	<div>
		<div class="oping_title">
			<h3>用户评论(30)</h3>
			<div class="oping_title_right">
			<img src="../../assets/img/weiyu/1.png" />我要评论
			</div>
		</div>
		<ul class="oping_content">
			<li>
				<img  class="username"      src="../../assets/img/weiyu/01.png"/>
				<div class="pinglun_content">
					<div class="news">
						<p class="username_news">Smile.橙</p>
						<p>还是很喜欢这个节目 声音也好听 </p>
					</div>
					<div class="news_tubiao">
						<span>2019-08-13</span>
						<div class="news_tubiao_right">
							<img src="../../assets/img/weiyu/02.png"/>
							<img src="../../assets/img/weiyu/03.png"/>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img  class="username"      src="../../assets/img/weiyu/002.png"/>
				<div class="pinglun_content">
					<div class="news">
						<p class="username_news">春城</p>
						<p>好听，认同的点赞</p>
					</div>
					<div class="news_tubiao">
						<span>2019-08-17</span>
						<div class="news_tubiao_right">
							<img src="../../assets/img/weiyu/02.png"/>
							<img src="../../assets/img/weiyu/03.png"/>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img  class="username"      src="../../assets/img/weiyu/003.png"/>
				<div class="pinglun_content">
					<div class="news">
						<p class="username_news">灯塔</p>
						<p>好听，认同的点赞</p>
					</div>
					<div class="news_tubiao">
						<span>2019-08-19</span>
						<div class="news_tubiao_right">
							<img src="../../assets/img/weiyu/02.png"/>
							<img src="../../assets/img/weiyu/03.png"/>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<p class="alert">已经到底喽~</p>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.oping_title{
		/* padding: .2rem .1rem; */
		display: flex;
		justify-content: space-around;
		font-size: .11rem;
		color: #b899a1;
	}
	.oping_title h3{
		font-size: .2rem;
		color: black;
	}
	.oping_title_right {
		display: flex;
		padding-top: .07rem;
	}
	.oping_title_right img{
		width: .14rem;
		height: .14rem;
	}
	.oping_content li{
		border-bottom: 1px solid #f4f4f4;
		height:.89rem;
		padding: .12rem .16rem;
		display: flex;
	}
	.oping_content  .username{
		width: .35rem;
		height: .35rem;
	}
	.pinglun_content{
		height:.54rem;
		margin-left:.12rem;
	}
	
	.news p{
		line-height: .23rem;
		font-size: .13rem;
	}
	.username_news,span,.alert{
		font-size: .13rem;
		color: #807e7f;
	}
	.news_tubiao{
		display: flex;
		justify-content: space-around;
		margin:.15rem auto;
		
	}
	.news_tubiao_right{
		display:flex;
		justify-content:space-around;
		margin-left:1.26rem;
	}
	.news_tubiao_right img{
		widows: .2rem;
		height: .18rem;
		margin-right: .29rem;
	}
	.alert{
		text-align:center;
		padding-top:.15rem;
	}
</style>
