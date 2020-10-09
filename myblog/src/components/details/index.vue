<template>
    <div>
        <el-col :span="16" class="row mr-2">
            <el-row class="container">
                <el-col :span="24" class="bgc">
                    <div class="new">
                        <span>最新文章</span>
                        <span>New Article</span>
                    </div>
                </el-col>
                <el-col :span="24" class="mt-2">
                    <div class="article-body bgc">
                        <p>js前端实现模糊查询</p><p>对于模糊查询，一般都是传关键字给后端，由后端来做。但是有时候一些轻量级的列表前端来做可以减少ajax请求，在一定程度上提高用户体验。废话不多说，直接上代码。</p>
                        <p><br></p><p>//字符串方法indexOf</p><p>var len = list.length;</p><p>var arr = [];</p><p>for(var i=0;i&lt;len;i++){</p><p>&nbsp; &nbsp; //如果字符串中不包含目标字符会返回-1</p>
                        <p>&nbsp; &nbsp; if(list[i].indexOf(keyWord)&gt;=0){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; arr.push(list[i]);</p><p>&nbsp; &nbsp; }</p><p>}</p><p>return arr;</p><p><br></p><p>//正则表达式</p>
                        <p>var len = list.length;</p><p>var arr = [];</p><p>var reg = new RegExp(keyWord);</p><p>for(var i=0;i&lt;len;i++){</p><p>&nbsp; &nbsp; //如果字符串中不包含目标字符会返回-1</p>
                        <p>&nbsp; &nbsp; if(list[i].match(reg)){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; arr.push(list[i]);</p><p>&nbsp; &nbsp; }</p><p>}</p><p>return arr;</p><p><br></p>
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <rightcontent></rightcontent>
    </div>
</template>
<script>
import leftcontent from '@/components/contentone/leftcontent.vue'
import rightcontent from '@/components/contentone/rightcontent.vue'
export default {
    name: 'detailsone',
    data() {
        return {
            
        }
    },
    mounted() {
        layui.use('element', function(){
            var element = layui.element;
            element.init()
        });
    },
    components: {
        leftcontent,
        rightcontent
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/css/index.less");
    .article-body {
        padding: 20px;
        min-height: 400px;
    }
    .row{
        margin-right: 15px;
    }
    .container{
        padding-left: 0;
        padding-right: 0;
    }
</style>