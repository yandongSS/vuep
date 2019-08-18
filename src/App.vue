<template>
<!-- git测试git -->
  <div class="container">
    <mt-header fixed title="VUE-项目"></mt-header>
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

</script>


<style lang="scss" scoped>
.container{
  padding-top:40px;
  padding-bottom: 50px; 
  overflow-x: hidden;
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
</style>
