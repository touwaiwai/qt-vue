<template>
	<!-- 横三 -->
	<div class="kind">
		<div class="wenzi">
			<h3>热销新品</h3>
			<span>></span>
		</div>
		<div class="threekind">
			<azsmallBox></azsmallBox>
			<azsmallBox></azsmallBox>
			<azsmallBox></azsmallBox>
		</div>
	</div>


</template>

<script>
	import azsmallBox from './azsmallBox';

	export default {
		name: "azKindThree",

		data: function() {
			return {

			}

		},
		components: {
			azsmallBox
		}
	}
</script>

<style scoped="scoped">
	.kind {
		background: white;
	}

	.wenzi h3 {
		font-size: 0.24rem;
		margin-left: 0.16rem;

	}

	.wenzi span {

		font-size: 20px;
		color: #949494;
		margin-left: 0.1rem;
		margin-top: 0.05rem;
	}

	.wenzi {
		display: -webkit-flex;
		margin-bottom: 0.16rem;
	}

	.threekind {
		display: -webkit-flex;
		justify-content: space-around;
	}
</style>
