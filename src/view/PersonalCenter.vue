<template>
	<div class="PersonalCenter">
		<!-- 头部 -->
		<div class="PerHeard">
			<span class="iconfont icon-xiaoxitixing"></span>
			<span class="iconfont icon-richscan_icon"></span>
		</div>
		<!-- 个人信息 -->
		<div class="personal" @click="godenglu">
			<img src="../assets/img-person/dlLogo.png" alt="">
			<div class="logn">
				<h3>立刻登录</h3>
				<span>登录后同步您的收藏</span>
			</div>
			<img src="../assets/img-person/qdyl.png" alt="">
		</div>
		<!-- menu -->
		<div class="menu">
			<div class="smallLog">
				<img src="../assets/img-person/azlogo1.png" alt="">
				<span>蜻蜓币</span>
			</div>
			<div class="smallLog">
				<img src="../assets/img-person/azlogo2.png" alt="">
				<span>金豆豆</span>
			</div>
			<div class="smallLog">
				<img src="../assets/img-person/azlogo3.png" alt="">
				<span>已购项目</span>
			</div>
			<div class="smallLog">
				<img src="../assets/img-person/azlogo4.png" alt="">
				<span>优惠卷</span>
			</div>
		</div>
		<img src="../assets/img-person/azvip.png" alt="" class="vip">
		<!-- 选项 -->
		<div class="Option">
			<div class="azbox">
				<span>夜间模式</span>
				<img src="../assets/img-person/azbutton.png" alt="">
			</div>
			<router-link to='/dingshi'>
			<div class="azbox">
				<span>定时关闭</span>
				<span>></span>
			</div>
			</router-link>
			</router-link>
			<div class="azbox">
				<span>闹钟</span>
				<span>></span>
			</div>
			<router-link to="/yuyue">
			<div class="azbox">
				<span>预约</span>
				<span>></span>
			</div>
			</router-link>
			<div class="azbox">
				<span>任务中心</span>
				<span>做任务领现金></span>
			</div>
			<div class="azbox">
				<span>我要当主播</span>
				<span>申请成为主播></span>
			</div>
			<hr>
			<router-link to="/help">
				<div class="azbox">
				<span>帮助与反馈</span>
				<span>></span>
			</div>
			</router-link>

			<router-link to="/setting">
			<div class="azbox">
				<span>设置</span>
				<span>></span>
			</div>
			</router-link>

		</div>
		<img src="../assets/img-person/azfooterfx.png" alt="" class="azfooterfx">
		<div class="bootommenu">
			<div class="boobtn">
				<img src="../assets/img-person/azfooter1.png" alt="">
				<span>互联网专区</span>
			</div>
			<div class="boobtn">
				<img src="../assets/img-person/azfooter2.png" alt="">
				<span>校园成长包</span>
			</div>
			<div class="boobtn">
				<img src="../assets/img-person/azfooter3.png" alt="">
				<span>天天中红包</span>
			</div>
		</div>
		<div class="bg"></div>
		<foot></foot>
	</div>
</template>

<script>
	import foot from'@/components/public/foot';
	export default {
		name: "PersonalCenter",
		data: function() {
			return {

			}
		},
		methods:{
			godenglu(){
				this.$router.push("/denglu")
			}
		},
		components:{
				foot
			}
	}
</script>


<style scoped="scoped">
	@import "../assets/font_1344570_013fp9a60oe7f/iconfont.css";
	
			.PersonalCenter {
				height: 100%;
				background: white;
			}
	
			/* PERson */
			.PerHeard {
				height: 10%;
				background: white;
				position: fixed;
				width: 100%;
				    display: flex;
			}
	
			.iconfont {
				font-size: 0.3rem;
				position: relative;
				top:.18rem;
			}
	
			.icon-richscan_icon {
				left: 3.0rem;
			}
	
			.icon-xiaoxitixing {
				left: 0.2rem;
				top: 0.18rem;
			}
	
			/* 个人信息 */
			.personal {
				padding-top: 18%;
				display: -webkit-flex;
				justify-content: space-between;
			}
	
			.logn {
				display: -webkit-flex;
				flex-direction: column;
				padding-right: 0.7rem;
				margin-top: 0.08rem;
			}
	
			.logn h3 {
				font-size: 0.2rem;
			}
	
			.logn span {
				font-size: 0.08rem;
				letter-spacing: 2px;
			}
	
			.personal img:nth-child(1) {
				width: 0.71rem;
				height: 0.65rem;
				padding-left: 0.12rem;
			}
	
			.personal img:nth-child(3) {
				width: 0.92rem;
				height: 0.4rem;
				margin-top: 0.08rem;
			}
	
			/* menu */
			.smallLog {
				width: 0.5rem;
				height: 0.45rem;
				display: -webkit-flex;
				flex-flow: column;
				justify-content: space-around;
				text-align: center;
				margin-bottom: 0.2rem;
			}
	
			.smallLog img {
				width: 0.25rem;
				height: 0.21rem;
				margin: 0 auto;
			}
	
			.smallLog span {
				font-size: 0.1rem;
				color: #848283;
			}
	
			.menu {
				display: -webkit-flex;
				justify-content: space-around;
				margin-top: 0.25rem;
			}
	
			.vip {
				margin: auto;
				width: 3.4rem;
				height: 0.44rem;
			}
	
			.azbox {
				display: -webkit-flex;
				justify-content: space-between;
				margin-top: 0.25rem;
				width: 83%;
				margin-left: 0.3rem;
				margin-bottom: 0.1rem;
	
			}
	
			.azbox span {
				font-size: 0.21rem;
				/* margin-right:0.1rem; */
				color: #5b5b5d;
			}
	
			.azbox img {
				width: 0.4rem;
				height: 0.26rem;
	
			}
	
			.azbox span:nth-child(2) {
				font-size: 0.15rem;
				float: right;
				width:1.5rem;
				text-align: right;
			}
			
			.azfooterfx{
				width:100%;
				height:0.23rem;
			}
			
			/* 底部按钮 */
			.bootommenu{
				display: -webkit-flex;
				
			}
			.bootommenu div:nth-child(1){
				margin-left: 0.2rem;
			}
			.boobtn{
				display: -webkit-flex;
				flex-flow: column;
				margin:0.1rem;
				margin-right:0.2rem;
			}
			.boobtn img{
				width: 0.49rem;
				height: 0.31rem;
				display: block;
				margin: 0 auto;
				margin-bottom: 0.05rem;
				
			}
			.boobtn span{
				font-size: 0.13rem;
				text-align: center;
			}
			
			.bg{
				background: url(../assets/img-person/azqtfmbg.png);
				background-size: 100% 100%;
				width:100%;
				height: 1.25rem;
			}
</style>
