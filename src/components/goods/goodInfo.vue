<!--  -->
<template>
<div class=''>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						 <swiper :lunboList="banner" :isFull="false"></swiper>
					</div>
				</div>
			</div>

    <div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">市场价：<del>{{info.market_price}}</del>&nbsp;&nbsp;&nbsp;销售价：<span class="red">￥{{info.sell_price}}</span></p>
                        <div class="numberbox">购买数量：<goodInfo-numbox></goodInfo-numbox></div>    
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger"> 加入购物车</mt-button>
					</div>
				</div>
			
			</div> 
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{info.goods_no}}</p>
						<p>库存情况：{{info.stock_quantity}}</p>
						<p>上架时间：{{info.add_time|dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                        <mt-button type="primary" size="large" plain @click="dec(info.id)">图文介绍</mt-button>
                        <mt-button type="danger" size="large" plain @click="comment(info.id)">商品评论</mt-button>
                </div>
			</div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
 import swiper from '../childcomponent/swiper.vue'
 import goodInfoNumbox from '../childcomponent/goodInfo_numbox.vue'
 import mui from  '../../lib/mui/js/mui.min.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    swiper,
    goodInfoNumbox
},
data() {
//这里存放数据
return {
    id:this.$route.params.id,
    banner:[],
    info:{}
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        getGoodLunbo(){
            this.$axios.get('api/getthumimages/'+this.id).then(res=>{
                res.data.message.forEach(item => {
                    item.img=item.src
                })
                this.banner=res.data.message
            })
        },
        getGoodsInfo(){
            this.$axios('api/goods/getinfo/'+this.id).then(res=>{
                this.info=res.data.message[0]
            })
        },
        dec(id){
            this.$router.push({name:'dec',params:{id}})
        },
        comment(id){
            this.$router.push({name:'comment',params:{id}})
        }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getGoodLunbo()
    this.getGoodsInfo()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    mui('.mui-numbox').numbox()
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
.numberbox{
    margin-bottom: 10px;
}
.price{
    font-size: 13px;
    color:black;
}
.red{
    color:red;
    font-size: 16px;
}
.mui-card-footer{
    justify-content: space-evenly;
}
</style>