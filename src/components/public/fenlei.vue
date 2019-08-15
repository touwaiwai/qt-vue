<template>
	<div class="fenlei">
		<router-link v-for="(item,i) in navlist" :to="item.path" :key="i">
			<img :src="item.id" />
			<span>{{item.title}}</span>
		</router-link>
	</div>
</template>
<script>
	export default {
		props:['navlist'],
		name: "fenlei",
		data() {
			return {
			}
		}
	};
</script>
<style scoped>
	.fenlei {
		display: flex;
		align-items: center;
		padding-bottom: 0.15rem;
		padding-top: .15rem;
		justify-content: space-between;
		background-color: #fcfcfc;
	}

	img {
		width: .28rem;
		height: .28rem;
		padding-right: .25rem;
		padding-left: .22rem;
		margin-bottom: .06rem;
	}

	span {
		font-size: .15rem;
		color: #4e4e4e;
		text-align: center;
	}
</style>
