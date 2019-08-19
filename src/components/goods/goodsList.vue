<!--  -->
<template>

   
    <div class="good-list">
      <router-link :to="'/home/goodInfo/'+item.id" class="good-item" v-for="item in goodList" :key="item.id">
        <img :src="item.img_url" :alt="item.title">
        <p>{{item.title}}</p>
        <div class="detail">
            <div class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </div>
            <div class="hot">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </div>
        </div>
      </router-link>
      <mt-button type="primary" size="large" plain class="button" @click="getMoreGoods">加载更多..</mt-button>
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
    pageindex:1,
    goodList:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getGoods(){
        this.$axios.get('api/getgoods?pageindex='+this.pageindex).then(res=>{
            this.goodList=this.goodList.concat(res.data.message)
        })
    },
    getMoreGoods(){
        this.pageindex++
        this.getGoods()
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getGoods()
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
<style scoped>
.good-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 7px;
}
.good-item{
    border: 1px solid #ddd;
    width: 49%;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction:column;
    justify-content: space-between; 
    min-height: 293px;
}
img{
    width: 100%;
}
.detail{
    background-color: #ddd;
    padding:5px 9px;
    
    bottom: 2px;
}
p{
    font-size: 15px;
    font-weight: bold;
    color:black;
    padding: 0 5px;
}
.now{
    color:red;
    font-size: 17px;
    font-weight: bold;
}
.old{
    font-size: 13px;
    text-decoration: line-through;
    color:#777;
    margin-left: 10px;
}
.hot{
    font-size: 14px;
    color:#666;
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
    margin-top: 5px;
}
.button{
    margin-top: 15px;
    border: 1px solid #666;
}
</style>