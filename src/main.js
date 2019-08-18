// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'

import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import axios from 'axios'


import app from './App.vue'
import router from './router.js'

let vm=new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})
axios({
    url:'http://www.liulongbin.top:3005/api/getlunbo'
}).then(res=>{
    console.log(res)
})