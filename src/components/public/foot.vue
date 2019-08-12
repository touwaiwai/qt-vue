<template>
  <footer>
    <router-link v-for="(item,index) in tabber" :to="item.path" :key="index" class="top">
      <i :style="{backgroundImage:($route.path==item.path?item.pic2:item.pic1)}"></i>
      <span :style="{color:($route.path==item.path?'#ff0000':'#000000')}">{{item.title}}</span>
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
          path: "/",
          pic2: "url('+ require(@/assets/img/foot/index.png')+')",
          pic1: "url(../../static/img/foot/index1.png)"
        },
        {
          title: "超级会员",
          path: "/VIP",
          pic2: "url(../../static/img/foot/VIP.png)",
          pic1: "url(../../static/img/foot/VIP1.png)"
        },
        {
          path: "/hdsave",
          pic1: "url(../../static/img/foot/video.png)",
          pic2: "url(../../static/img/foot/video1.png)"
        },
        {
          title: "我听",
          path: "/listen",
          pic2: "url(../../static/img/foot/listen.png)",
          pic1: "url(../../static/img/foot/listen1.png)"
        },
        {
          title: "个人中心",
          path: "/mine",
          pic2: "url(../../static/img/foot/mine.png)",
          pic1: "url(../../static/img/foot/mine1.png)"
        }
      ]
    };
  },
  methods: {}
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
  z-index: 1;
}
a {
	
 height: 0.5rem;
}
i {
  display: block;
  width: 0.24rem;
  height: 0.22rem;
  text-align: center;
  background-size: 0.24rem 0.22rem;
}
.top:nth-child(3)>i{
  display: block;
  width: 0.42rem;
  height: 0.4rem;
  text-align: center;
  background-size: 0.4rem 0.4rem;
}
span {
  font-size: 0.11rem;
  text-align: center;
  position: absolute;
top: 35px;
}
</style>
