<template>
  <div>
    <vipheader></vipheader>
    <vipmain></vipmain>
  </div>
</template>

<script>
  import vipheader from'../components/zzq/vipheader';
  import vipmain from'../components/zzq/vipmain';
	export default {
		name:'VIP',
		data:function(){
			return {

			}
    },
    components:{
      vipheader,vipmain
    }
	}
</script>

<style scoped>

</style>
