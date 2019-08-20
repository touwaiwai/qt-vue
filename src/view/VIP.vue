<template>
  <div>
    <vipheader></vipheader>
    <vipmain></vipmain>
		<foot></foot>
  </div>
</template>

<script>
  import vipheader from'../components/zzq/vipheader';
  import vipmain from'../components/zzq/vipmain';
  import foot from'@/components/public/foot';
	export default {
		name:'VIP',
		data:function(){
			return {

			}
    },
    components:{
      vipheader,vipmain,foot
    }
		
	}
</script>

<style scoped>

</style>
