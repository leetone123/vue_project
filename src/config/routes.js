//路由的相关配置
import Vue from 'vue'
import VueRouter from 'vue-router'//配置全局路由插件
//下面引入创建的页面
import Home from './Home.vue'
import Me from './Me.vue'

//使用路由实例插件
Vue.use(VueRouter)

export default = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/home',component: Home},
        {path: '/me',component: Me}
    ]
})