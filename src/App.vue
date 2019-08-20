<template>
<!-- git测试git -->
  <div class="container">
    <mt-header fixed title="VUE-项目"></mt-header>
    <img src="assets\img\icon_arrow_left.png" alt="" @click="back">
    <transition>
          <router-view></router-view>
    </transition>

    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-l" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-l" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-l" to="/cart">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-l" to="/profile">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
      this.$router.go(-1)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>


<style lang="scss" scoped>
.container{
  padding-top:40px;
  padding-bottom: 50px; 
  overflow-x: hidden;
  // position:relative;
}
.v-enter{
   opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position :absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

// element.style {
// }

.mui-bar-tab .mui-tab-item-l{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
    }
.mui-bar-tab .mui-tab-item-l.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-l .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-l .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
img{
    width:30px;
    height: 30px;
    position: fixed;
    top:5px;
    z-index: 99;
    left:20px;
}
</style>
