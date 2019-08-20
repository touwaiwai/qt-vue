// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.prototype.fun=function(str){
	
// 		for(let i=0;i<str.s.length;i++){
// 			ul += "<li>" + str.s[i] + "</li>";
// 		}
// 		return ul;
console.log(str);
}
