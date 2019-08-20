<template>
	<div class="sixbox-a">	
			<div v-for="item in sixdatas" :key='item.img'>
				<div class="qt-vip-main-shen">
				  <span>{{item.id}}</span>
				  <span class="dayu">  >   </span>
				</div>
				<div class="qt-vip-main-shen-box1">
					<div class="qt-vip-main-shen-smallbox"  v-for='(text,index) in item.content' :key='index'>
					<img :src="text.img" alt="">
					<span>{{text.title}}</span>
					</div>
				</div>
			</div>
	</div>

</template>
<script>
export default {
	props:['sixdatas'],

  name: "sixbox",
  data: function(){
	  return{
		  
	  }
  },
  components: {
	  
  }
}
</script>
<style scoped="scoped">
        .qt-vip-main-shen {
            width: 3.42rem;
            height: 0.56rem;
            margin: 0 auto;
            font-size: .23rem;
            line-height: .56rem;
        }

        .qt-vip-main-shen-box1 {
            width: 3.42rem;
            height: 1.5rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
			flex-wrap:wrap;
			margin-bottom: 1.5rem;

        }

        .qt-vip-main-rb {
            width: 3.42rem;
            height: 0.56rem;
            margin: 0 auto;
            font-size: .23rem;
            line-height: .56rem;
        }

        .qt-vip-main-shen-smallbox {
            width: 1.05rem;
            height: 100%;
            font-size: .14rem;
        }

        .qt-vip-main-shen-smallbox img {
            width: 1.05rem;
            height: 1.05rem;
        }

        .qt-vip-main-shen-box3 {
            height: 1.4rem;
        }

        .qt-vip-main-shen-box3 img {
            width: 100%;
            height: 100%;
        }
		.dayu{
			float: left;
			font-size: 0.25rem;
			margin-top: -0.57rem;
			margin-left: 1rem;
		}
		.sixbox-a{
			padding-top: 0.1rem;
		}
</style>
