<!--  -->
<template>
<div class=''>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-item">
            <div class="cmt-title">
                第{{i+1}}楼&nbsp; {{item.user_name}}&nbsp; 发表时间:{{item.add_time | dateFormat}}
            </div>
            <div class="cmt-body">
                {{item.content===''?"我是机器人~~~":item.content}}
            </div>
        </div>
      
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {Toast} from 'mint-ui';
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    comments:[],
    pageindex:1,
    msg:''
}
},
props:["id"],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getComments(){
        this.$axios.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(res=>{
            if(res.data.status===0){
                this.comments=this.comments.concat(res.data.message)
            }else{
                Toast('获取评论失败')
            }
        })
    },
    getMore(){
        this.pageindex++
        this.getComments()
    },
    postComment(){
        if(this.msg.trim().length==0){
            return Toast('评论不能为空！')
        }
        this.$axios.post('api/postcomment/'+this.$route.params.id,
            {
                content:this.msg.trim()
             }).then(res=>{
                 if(res.data.status===0){
                     let cmt={
                              user_name:'匿名用户',
                              add_time:Date.now(),
                              content:this.msg.trim()
                     }
                     this.comments.unshift(cmt)
                     this.msg=""

                 }
             })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getComments()
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
    h3{
        font-size:18px;
    }
    textarea{
        height: 110px;
        font-size: 13px;
    }
    .cmt-list{
        margin: 20px 0;
    }
    .cmt-item{
        margin: 10px 0;
        
    }
    .cmt-title{
        background-color: #ccc;
        height: 30px;
        line-height: 33px;
        font-size: 13px;
        padding-left: 20px;
    }
    .cmt-body{
        padding: 10px 0;
        text-indent: 2em;
    }
</style>