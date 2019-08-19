<!--  -->
<template>
<div class='p-container'>
    <h3>{{item.title}}</h3>
    <p class="subtitle">
        <span>发表时间：{{item.add_time|dateFormat}}</span>
        <span>点击：{{item.click}}次</span>
    </p>
    <hr>

    <!-- 缩略图 -->
    <vue-preview :slides="slide" @close="handleClose"></vue-preview>

    <!-- 图片内容区域 -->
    <div class="content" v-html="item.content"></div>

    <!-- 评论组件 -->
    <comments :id="this.id"></comments>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
 import comments from '../childcomponent/comment.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    comments
},
data() {
//这里存放数据
return {
    id:this.$route.params.id,
    item:{},
    slide: [
          
        ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleClose () {
        console.log('close event')
      },
    getPhotoInfo(){
        this.$axios.get('api/getimageinfo/'+this.$route.params.id).then(res=>{
            this.item=res.data.message[0]
        })
    },
    getPre(){
        this.$axios.get('api/getthumimages/'+this.id).then(res=>{
            res.data.message.forEach(item=>{
                item.h=500,
                item.w=600,
                item.msrc=item.src
            })
            this.slide=res.data.message
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getPhotoInfo()
    this.getPre()

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
.p-container{
    padding: 0 10px;
}
h3{
    margin: 13px 0;
    font-size: 15px;
    color: #226aff;
    text-align: center;
}
.subtitle{
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 12px;
}
.content{
    font-size: 13px;
}
figure img{
    width:108px;
    height: 108px;
}
figure{
    width: 108px;
    margin:0 5px;
    padding: 0;
    display: inline-block;
}
.my-gallery{
    display: flex;
    flex-wrap: wrap;
}
</style>