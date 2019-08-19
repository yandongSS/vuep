// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/js/mui.min.js'

/* import {Header,Swipe,SwipeItem,Button,LazyLoad} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.component(Button.name,Button)
Vue.use(LazyLoad) */

import MintUi from "mint-ui"
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import axios from 'axios';
 
axios.defaults.baseURL='http://www.liulongbin.top:3005'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
 
Vue.prototype.$axios=axios 

//过滤器
import moment from "moment"
Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
     return moment(dataStr).format(pattern)
})

import app from './App.vue'
import router from './router.js'

let vm=new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})
