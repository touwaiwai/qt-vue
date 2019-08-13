<template>
  <div class="fenlei">
    <router-link v-for="(item,i) in tabber" :to="item.path" :key="i" >
      <img src="../../assets/img/tuijian/tuijian-1.jpg" />
      <span >{{item.title}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "fenlei",
  data() {
    return {
      tabber: [
        {
          title: "小说精品",
          path: "/",
					id:'1'
        },
        {
          title: "评书",
          path: "/VIP",
					id:'2'
        },
        {
					title: "相声小品",
          path: "/hdsave",
					id:'3'
        },
        {
          title: "必听榜单",
          path: "/listen",
					id:'4'
        },
        {
          title: "倾听陕西",
          path: "/mine",
					id:'5'
        }
      ]
    };
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
	img{
		width: .28rem;
		height: .28rem;
		padding-right:.25rem;
		padding-left: .22rem;
		margin-bottom:.06rem;
	}
		
	span {
		font-size: .15rem;
		color: #4e4e4e;
		text-align: center;
	}
</style>
