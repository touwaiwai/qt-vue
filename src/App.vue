<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import foot from './components/public/foot';
export default {
  name: 'App',
	components:{
	      foot
	}
}
</script>

<style >


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	width:100%;
}
/* CSS Document */
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,input,select,textarea,td{
	margin:0;
	padding:0;
}
html{
	font-size: 26.67vw;
}

html,body{
	height: 100%;
	overflow:-Scroll;
	overflow-x:hidden;
}
body{
	font-family: "黑体";
	background:white;
	display: -webkit-flex;
	-webkit-flex-direction:column;
}
ul,ol,li{
	list-style:none;
}
a{
	text-decoration: none;
}
img{
	border:0;
	display: block;
}
i,span,b{
	display: block;
}
 input,textarea,select,a:focus {
     outline: none;
 }

</style>
