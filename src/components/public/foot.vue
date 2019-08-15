<template>
  <footer>
    <router-link v-for="(item,index) in tabber" :to="item.path" :key="index" class="top" activeClass="active">
			<!-- <img src="../../assets/img/foot/index.png" alt=""> -->
			<img :src="imgshow==item.path?item.pic1:item.pic2" alt="">
      <span>{{item.title}}</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      tabber: [
        {
          title: "首页",
          path: "/index",
          pic2: "../../../static/img/foot/index.png",
          pic1: "../../../static/img/foot/index1.png"
        },
        {
          title: "超级会员",
          path: "/VIP",
          pic2: "../../../static/img/foot/VIP.png",
          pic1: "../../../static/img/foot/VIP1.png"
        },
        {
          path: "/hdsave",
          pic2: "../../../static/img/foot/video.png",
          pic1: "../../../static/img/foot/video1.png"
        },
        {
          title: "我听",
          path: "/listen",
          pic2: "../../../static/img/foot/listen.png",
          pic1: "../../../static/img/foot/listen1.png"
        },
        {
          title: "个人中心",
          path: "/mine",
          pic2: "../../../static/img/foot/mine.png",
          pic1: "../../../static/img/foot/mine1.png"
        }
      ]
    };
  },
  computed:{
		imgshow(){
			return this.$route.matched[0].path;
		}
	}
};
</script>

<style scoped>
footer {
  display: flex;
  width: 100%;
  height: 0.5rem;
  justify-content: space-around;
  align-items: center;
  background: white;
  position: fixed;
  bottom: 0;
	left: 0;
  z-index: 1;
}
.top{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.active{
	color:red;
	font-size:16px;
}
span {
	display: block;
  font-size: 0.11rem;
	top: 35px;
}
img{
	width: 0.22rem;
	height: 0.22rem;
}
</style>
