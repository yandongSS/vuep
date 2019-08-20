<!--  -->
<template>
<div class='goodinfo-container'>
    <h2>{{dec.title}}</h2><hr>
    <div v-html="dec.content" class="contents"></div>
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
    id:this.$route.params.id,
    dec:{}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getdec(){
        this.$axios.get("api/goods/getdesc/"+this.id).then(res=>{
            this.dec=res.data.message[0]
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getdec()
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
<style>
h2{
    font-size: 15px;
    color:#226aff;
    text-align: center;
    margin: 15px 0;
}
/* img{
    width:100%;
    height: 100%;
} */
.contents{
    padding: 10px;
}
.gomeImgLoad{
    width:100%;
    height: 100%;
    margin: -4px;
}
table{
    width: 100%;
}
tr{
    height: 175px;
    margin: 0;
}


</style>