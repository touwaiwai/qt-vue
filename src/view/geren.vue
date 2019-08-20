<template>
	<div>
		 <div class="sz-box">
        <header>
            <img class="one" src="../assets/img/li/otherpay_back.png" @click="back">
            <h2>个人资料</h2>
        </header>


        <div class="sz-chunk">
            <p id="blass">修改头像</p>
            <div class="sz-sbox">
                <img id="sz-tx" src="../assets/img/li/sz-touwaiwai.jpg" alt="">
                <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
            </div>
        </div>
        
        <div class="sz-chunk mtop" >
            <p>昵称</p>
            <div class="sz-sbox">
                <span>嘿！小伙</span>
                <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
            </div>
        </div>
        <div class="sz-chunk">
            <p>性别</p>
            <div class="sz-sbox">
                <span>男</span>
                <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
            </div>
        </div>
        <div class="sz-chunk">
            <p>生日</p>
            <div class="sz-sbox">
                <span>去填写吧</span>
                <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
            </div>
        </div>
        <div class="sz-chunk">
            <p>地区</p>
            <div class="sz-sbox">
                <span>去填写</span>
                <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
            </div>
        </div>
        <div class="sz-chunk">
            <p>简介</p>
            <div class="sz-sbox">
                <span>介绍一下自己吧</span>
                <img class="sz-jt" src="../assets/img/li/search_item_cat_next.png" alt="">
            </div>
        </div>
       
        
        <div class="sz-foot">
            <p>退出登录</p>
        </div>
    </div>

	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.push("setting");
			}
		}
	}
</script>

<style scoped="scoped">
	.sz-box{
	}
	header{
	  width: 100%;
	  height: .5rem;
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;
	  background: #ffffff;
	
	  /* margin-top: .5rem; */
	}
	
	header img{
	
	  width: .19rem;
	  height: .19rem;
	}
	header .one{
	  padding-left: .16rem;
	  padding-right: .17rem;
	
	
	}
	
	header h2{
	  font-size: .22rem;  
	}
	.sz-chunk{
	  height: .54rem;
	  width: 100%;
	  height: .5rem;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  background: #ffffff;
	margin-top: 1.5px;
	
	  /* border-top: 1px solid #c7c7c7; */
	
	}
	.sz-chunk p{
	  font-size: .2rem;
	  color: #666666;
	  padding-left: .32rem;
	
	}
	.sz-sbox{
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	}
	.sz-chunk img{
	  width: .13rem;
	  height: .13rem;
	  padding-right: .19rem;
	}
	#sz-tx{
	  width: .39rem;
	  height: .39rem;
	  padding-right: .05rem;
	}
	#blass{
	  color:black;
	}
	.mtop{
	  margin-top: .09rem;
	}
	.mbttom{
	  margin-bottom: .09rem;
	}
	.sz-sbox span{
	  font-size: .17rem;
	  color: #9c9c9c;
	  padding-right: .05rem;
	}
	
	.anniu img{
	   width: .42rem;
	   height: .26rem;
	}
	.update{
	  height: .74rem
	}
	
	.sz-box .update img{
	  width: .42rem;
	   height: .26rem;
	
	}
	
	.matter{
	  flex-direction: column;
	  justify-content: flex-start;
	  align-items: flex-start;
	}
	.matter span{
	  font-size: .15rem;
	  color: #9b9b9b;
	  padding-left: .32rem;
	
	}
	
	
	.sz-foot{
	  height: .6rem;
	  margin-top: .17rem;
	  background: #ffffff;
	}
	.sz-foot p{
	  font-size: .18rem;
	  color: #f25b60;
	  line-height: .6rem;
	  text-align: center;
	  white-space: 2px;
	}
</style>
