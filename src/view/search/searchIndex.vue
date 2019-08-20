<template>
	<div>
		<div class="content">
				<h3>热门搜索</h3>
				<table class="content_tab">
					<tr>
						<td><span class="focus">1</span> 晓年签</td>
						<td><span class="second">2</span> 烈火军校</td>
					</tr>
					<tr>
						<td><span class="second">3</span> 张召忠开讲2019</td>
						<td><span>4</span> 向松祚</td>
					</tr>
					<tr>
						<td><span>5</span> 九州缥缈录</td>
						<td><span>6</span> 老沈问典</td>
					</tr>
					<tr>
						<td><span>7</span> 你好呀！故宫</td>
						<td><span>8</span> 坏球时报胡锡进</td>
					</tr>
					<tr>
						<td><span>9</span>百家讲坛</td>
						<td><span>10</span>叶文有话要说</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		}
	}
</script>

<style scoped="scoped">
	.content h3{
		font-size:.15rem;
		padding-left:.13rem;
	}
	
	
	.content_tab{
		font-size: .15rem;
	}
	.content_tab span{
		float: left;
		margin-right: .18rem;
	}
	.content_tab .focus{
		color: #bf363d;
	}
	.content_tab .second{
		color: #d99647;
	}
	.content tr{
		height:.33rem;
		/* padding-left: .2rem; */
	}
	.content td{
		width: 50%;
		padding-left: .2rem;
		line-height: .19rem;
		height: .19rem;
	}
	.search_img{
		width: .1rem;
		height: .1rem;
		position: absolute;
		top: .19rem;
		left: .78rem;
	}
</style>
