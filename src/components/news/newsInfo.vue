<!--  -->
<template>
<div class='newsCont'>
    <h2>{{newsInfo[0].title}}</h2>
    <p class="subTitle">
        <span>发表时间：{{newsInfo[0].add_time | dateFormat}}</span>
        <span>点击{{newsInfo[0].click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo[0].content"></div>
    <comment :id="this.id"></comment>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import comment from '../childcomponent/comment.vue'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    comment
},
data() {
//这里存放数据
return {
   id: this.$route.params.id,
   newsInfo:{}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getNewsInfo(){
        this.$axios.get('/api/getnew/'+this.id).then(res=>{
            if(res.data.status===0){
                this.newsInfo= res.data.message
            }else{
                Toast('获取新闻详情失败！')
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getNewsInfo()
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
.newsCont{
    padding: 0 8px;
}
h2{
    text-align: center;
    font-size: 15px;
    color: red;
    margin: 10px 0;
}
.subTitle{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}



</style>