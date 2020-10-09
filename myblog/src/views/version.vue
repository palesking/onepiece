<template>
    <div>
        <el-col :span="16" class="row  mr-2">
            <el-row class="container">
                <el-col :span="24" class="bgc">
                    <div class="new">
                        <span>吐槽一下</span>
                        <span>New Article</span>
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <rightcontent></rightcontent>
    </div>
</template>
<script>
import rightcontent from '@/components/contentone/rightcontent.vue'
export default {
    components: {
        rightcontent
    },
    mounted() {
        layui.use('element', function(){
            var element = layui.element;
            element.init()
        });
    },
}
</script>
<style lang="less" scoped>
    @import url("../assets/css/index.less");
    .row{
        margin-right: 15px;
    }
    .container{
        padding-left: 0;
        padding-right: 0;
    }
</style>