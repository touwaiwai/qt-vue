<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in imglist"><img :src="item"></div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import '../../assets/css/swiper.min.css';
	import '../../assets/js/swiper.min.js';
	export default {
		props:['imglist'],
		name: 'mybanner',
		data() {
			return {}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				}
			});
		}
	}
</script>

<style scoped="scoped">
	.swiper-container{
		margin-top: .95rem;
		margin-bottom: .1rem;
		
	}
	
	.swiper-slide{
		width: 375px;
	}
	.swiper-slide img{
		margin-left:.15rem;
		width:345px;
		height: 1.32rem;
		border-radius:5px;
		
	}
	
	.swiper-pagination-bullet{
		background: gray;
	}

</style>
