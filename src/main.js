// 入口文件
import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)


import app from './App.vue'

let vm=new Vue({
    el:'#app',
    render:c=>c(app)
})