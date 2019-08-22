<template>
	<div>
		<div class="dlls">
			<p @click="godenglu">登录可同步云端已购 、收藏 、历史等记录<span>登录</span></p>
		</div>

		<div class="listgrop">
			<router-link to='/xiazai'>
			<a class="itemborder item_group itema">
				<img src="../../assets/yu-img/1.jpg" alt="">
				<span class="iteminfo">
					<span class="itemspan">我的下载</span>
					<span class="iconfont icon-dianji"></span>
				</span>
			</a>
			</router-link>
			
			<router-link to='/shoucang'>
			<a class="itemborder item_group itema">
				<img src="../../assets/yu-img/2.jpg" alt="">
				<span class="iteminfo">
					<span class="itemspan">我的收藏</span>
					<span class="iconfont icon-dianji"></span>
				</span>
			</a>
			</router-link>
			
			<router-link to='/stlishi'>
			<a class="itemborder item_group itema">
				<img src="../../assets/yu-img/3.jpg" alt="">
				<span class="iteminfo">
					<span class="itemspan">我的历史</span>
					<span class="iconfont icon-dianji"></span>
				</span>
			</a>
			</router-link>
			
			<router-link to='/wdyigou'>
			<a class="itemborder item_group itema">
				<img src="../../assets/yu-img/4.jpg" alt="">
				<span class="iteminfo">
					<span class="itemspan">我的已购</span>
					<span class="iconfont icon-dianji"></span>

				</span>
			</a>
			</router-link>

			<a class="itemborder item_group itema">
				<img src="../../assets/yu-img/5.jpg" alt="">
				<span class="iteminfo">
					<span class="itemspan">关注的主播</span>
					<span class="iconfont icon-dianji"></span>
				</span>
			</a>
		</div>


		<div class="mylisten2"><b>猜你喜欢</b></div>
		<div class="gylike">
			<div class="recommend-container">
				<router-link to='/detail'>
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/6.jpg">
					<div class="desc">【录制跟上文字进度，不定时更新】一手快...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>13.1亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>2368期</p>
						</div>
					</div>
				</div>
				</router-link>
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/10.jpg">
					<div class="desc">本评书共360回,为完整版《水浒》。本书...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>5.8亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>12025期</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="recommend-container">
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/6.jpg">
					<div class="desc">【录制跟上文字进度，不定时更新】一手快...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>13.1亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>2368期</p>
						</div>
					</div>
				</div>
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/10.jpg">
					<div class="desc">本评书共360回,为完整版《水浒》。本书...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>5.8亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>12025期</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="recommend-container">
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/6.jpg">
					<div class="desc">【录制跟上文字进度，不定时更新】一手快...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>13.1亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>2368期</p>
						</div>
					</div>
				</div>
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/10.jpg">
					<div class="desc">本评书共360回,为完整版《水浒》。本书...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>5.8亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>12025期</p>
						</div>
					</div>
				</div>
			</div>
			
						<div class="recommend-container">
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/6.jpg">
					<div class="desc">【录制跟上文字进度，不定时更新】一手快...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>13.1亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>2368期</p>
						</div>
					</div>
				</div>
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/10.jpg">
					<div class="desc">本评书共360回,为完整版《水浒》。本书...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>5.8亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>12025期</p>
						</div>
					</div>
				</div>
			</div>
			
						<div class="recommend-container">
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/6.jpg">
					<div class="desc">【录制跟上文字进度，不定时更新】一手快...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>13.1亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>2368期</p>
						</div>
					</div>
				</div>
				<div class="recommend-item">
					<img class="imgd" src="../../assets/yu-img/10.jpg">
					<div class="desc">本评书共360回,为完整版《水浒》。本书...</div>
					<div class="record">
						<div class="hits">
							<img src="../../assets/yu-img/7.jpg">
							<p>5.8亿</p>
						</div>
						<div class="catalogues">
							<img src="../../assets/yu-img/8.jpg">
							<p>12025期</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	
	</div>
</template>

<script>
	export default{
		name:"listenCenter",
		data:function(){
			return{
				
			}
		},
		methods:{
			godenglu(){
				this.$router.push("/denglu")
			}
		}
	}
</script>

<style scoped="scoped">
@import 'http://at.alicdn.com/t/font_1344490_6vwa5npof5g.css';
.dlls{
	padding-top: 0.5rem;
}
.dlls p{
	font-size:0.14rem;
	margin-left: 0.15rem;
	color: darkgray;
}

.dlls span{
	display: inline-block;
	width:0.75rem;
	height:0.3rem;
	background: red;
	background: #ff7b7f;
	text-align: center;
	line-height:0.3rem;
	margin-left:0.1rem;
	border-radius:19px;
	color: white;
}

/* list-grop */
.listgrop{
	margin-top: .15rem;
}
.listgrop img{
	width: .20rem;
	height: .18rem;
	margin-right: 0.15rem;	
}

.item_group{
	display: -webkit-flex;
	height: .5rem;
	align-items: center;
}
.myVallet{
		background-position: left 0 bottom;
}
.itemborder {
	background-color: #fff;
    color: #212121;
    font-size: .15rem;
	font-weight:800 ;
    background-image: linear-gradient(#eee,#eee);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: left bottom;
	padding: 0 .12rem;
}
.listgrop>.itemborder:last-child{
	background-image:none;
}
.iteminfo{
	 display: flex;
	 width: 100%;
	 justify-content: space-between;
	 line-height: 0.5rem;
 }
.iteminfo .icon-dianji{
	display: block;
	text-align: right;
	color: #b3b3b3;
	font-size:0.24rem;
	font-weight:100 ;
 }
.itema{
	 background-position: left .45rem bottom
 }
 
.mylisten2{
	width: 100%;
	height:0.5rem;
	font-size:0.16rem;
	line-height:0.5rem;
}
.mylisten2 b{
	margin-left: 0.15rem;
}
/* gylike */
.gylike{
	width: 100%;
}

.recommend-container{
	padding: 0.1rem;
	display: flex;
	justify-content: space-around;
	
}
.recommend-item{
	width:1.6rem;
	border-radius:0.08rem;

}
.recommend-item .imgd{
	width:1.6rem;
	border-radius:0.08rem;


}
.recommend-item .desc{
	margin-top: 0.05rem;
	font-size:0.13rem;

}
.record{
	width:1.6rem;
	display: flex;
	margin-top: 0.08rem;
}
.record p{
	font-size:0.1rem;
	color:gray;
}
.hits{
	display: flex;
	margin-right: 0.1rem;
}
.hits img{
	width: 0.1rem;
	height: 0.14rem;
	margin-right: 0.05rem;
}
.catalogues{
	display: flex;
}
.catalogues img{
	width: 0.12rem;
	height: 0.13rem;
	margin-right: 0.05rem;
}
</style>
