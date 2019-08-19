<!--  -->
<template>
<div class=''>
    <!-- 顶部滑动栏 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a @click="getListById(item.id)" v-for="item in allCategory" :key="item.id" :class="['mui-control-item', item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
	<ul class="plist">
		<router-link :to="'/home/photoInfo/' + item.id"  v-for="item in list" :key="item.id" tag="li">
			<img v-lazy="item.img_url">
			<div class="info">
				<h3 class="title">{{item.title}}</h3>
				<div class="content">{{item.zhaiyao}}</div>
			</div>
		</router-link>
	</ul>



</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mui from '../../lib/mui/js/mui'
import {Toast} from 'mint-ui'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
	allCategory:[],
	list:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	getAllCategory(){
		this.$axios.get('/api/getimgcategory').then(res=>{
			if(res.data.status===0){
				res.data.message.unshift({title:'全部',id:0})
				this.allCategory=res.data.message
			}else{
				Toast('获取分类失败')
			}
		})
	},
	getListById(cateId){
		this.$axios.get('api/getimages/'+cateId).then(res=>{
			this.list=res.data.message
		})
	}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
	this.getAllCategory()
	this.getListById(0)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
})
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
<style scoped>
*{
    touch-action: pan-y;
}
img[lazy="loading"]{
	width: 40px;
	height: 300px;
	margin: auto;
	border-radius: 7px;
}
.plist{
	margin: 0;
	padding: 0;
	padding:0 10px ;
} 
.plist li{
	list-style: none;
	background-color: #ccc;
	text-align: center;
	margin: 10px 0;
	position: relative;
	box-shadow: 0 0 9px #888;
}
img{
	width: 100%;
	vertical-align: middle;
	border-radius: 7px;
}
.info{
	position:absolute;
	color: white;
	bottom: 0;
	background-color: rgba(0, 0,0, 0.4);
	height: 86px;
	overflow: hidden;
	
}
.info .title{
    font-size: 15px;
}
.content{
	font-size: 12px;

}
</style>