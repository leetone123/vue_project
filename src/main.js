import Vue from 'vue'
import App from './App.vue'
//下面引入路由配置组件
import router from './config/routes'

new Vue({
  el: '#app',
  //将路由实例添加到Vue实例中
  router,
  render: h => h(App)
})
