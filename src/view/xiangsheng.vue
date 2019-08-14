<template>
  <div>
    <listen-header></listen-header>
    <listen-center></listen-center>
    <qheader></qheader>
    <foot></foot>
  </div>
</template>

<script>
  import listenHeader from '../components/yu/listenHeader'
  import qheader from '../components/public/qheader'
  import listenCenter from'../components/yu/listenCenter';
  import foot from'../components/public/foot';
  // import qheader from "../components/public/qheader";
    export default {
        name: "xiangsheng",
        data:function(){
            return{

            }
        },
        components:{

        listenHeader,listenCenter,foot,qheader
        }
    }

</script>

<style scoped>

</style>
