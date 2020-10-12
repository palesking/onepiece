<template>
    <div class="community">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-2">
                    <div class="new">
                        <span>学习无止境</span>
                        <span>Don't stop</span>
                    </div>
                </el-col>
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>Vue基础知识</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc mb-2">
                    <div>
                        <ul>
                            <li>
                                <a href="">Vue入门基础</a>
                            </li>
                            <li>
                                <a href="">Vue自定义指令</a>
                            </li>
                            <li><a href="">Vue实例对象的数据选项</a></li>
                            <li><a href="">Vue实例的生命周期</a></li>
                            <li><a href="">Vue响应式原理</a></li>
                            <li><a href="">Vue渲染函数</a></li>
                            <li><a href="">Vue精简版风格指南</a></li>
                            <li><a href="">Vue命令行工具vue-cli</a></li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>Vue模板语法</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc mb-2">
                    <div>
                        <ul>
                            <li>
                                <a href="">Vue事件处理</a>
                            </li>
                            <li>
                                <a href="">Vue表单控件绑定</a>
                            </li>
                            <li><a href="">Vue数组更新及过滤排序</a></li>
                            <li><a href="">Vue模板内容</a></li>
                            <li><a href="">Vue模板逻辑</a></li>
                        </ul>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="8" class="row-right">
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>知识总结</span>
                        <span>Knowledge summary</span>
                    </div>
                </el-col>
                <el-row class="six bgc mt-5">
                    <el-col :span="24">
                        <div class="new new-right">
                            <span><i class="layui-icon layui-icon-link"></i>标签云</span>
                            <small>New Article</small>
                        </div>
                        <div class="col-md-12 ">
                            <ul class="label mt-2 pb-4">
                                <li class="layui-btn">
                                    <a href="#">vue</a>
                                </li>
                                <li class="layui-bg-red layui-btn">
                                    <a href="#" >js</a>
                                </li>
                                <li class="layui-bg-orange layui-btn">
                                    <a href="#" >css</a>
                                </li>
                                <li class="layui-bg-green layui-btn">
                                    <a href="#">http</a>
                                </li>
                                <li class="layui-bg-cyan layui-btn">
                                    <a href="#">html</a>
                                </li>
                                <li class="layui-bg-blue layui-btn">
                                    <a href="#">文章月统计</a>
                                </li>
                                <li class="layui-bg-black layui-btn">
                                    <a href="#">时间戳</a>
                                </li>
                                
                                <li class="layui-btn">
                                    <a href="#">生活</a>
                                </li>
                                <li class="layui-bg-red layui-btn ">
                                    <a href="#" >模糊查询</a>
                                </li>
                                <li class="layui-bg-orange layui-btn ">
                                    <a href="#" >二维数组</a>
                                </li>
                                <li class="layui-bg-green layui-btn ">
                                    <a href="#">Mui</a>
                                </li>
                                <li class="layui-bg-cyan layui-btn ">
                                    <a href="#">随机</a>
                                </li>
                                <li class="layui-bg-blue layui-btn ">
                                    <a href="#">文章</a>
                                </li>
                                <li class="layui-bg-black layui-btn ">
                                    <a href="#">时间戳</a>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'community'
}
</script>
<style lang="less" scoped>
    @import url('../assets/css/index.less');
    .community{
        .row-left{
            padding-right: 15px;
            .two{
                // height: 80px;
                .two-img{
                    width: 10%;
                    height: 100%;
                    background-image: url('../assets/images/vueicon.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                ul{
                    li{
                        // cursor: pointer;
                        padding: 10px 15px ;
                        border-bottom: 1px solid #999;
                        margin-left: 20px;
                        margin-right: 20px;
                        a{
                            // font-size: 20px;
                            color: #515a6e;
                        }
                        a:hover{
                            color: tomato;
                        }
                    }
                    li:last-child{
                        border-bottom: 0;
                    }
                }
            }
        }
        .row-right{
            padding-left: 15px;
            .six{
                .label {
                    width: 95%;
                    overflow: hidden;
                    li{
                        margin-bottom: 10px;
                        width: 30%;
                        // padding: 0.1em 0.5em 0.1em 0.5em;
                        // float: left;
                        // text-align: center;
                        // margin: 0.3em 1% 0.3em 1%;
                        // -moz-transition: all 0.5s;
                        // -webkit-transition: all 0.5s;
                        // -o-transition: all 0.5s;
                        // transition: all 0.5s;
                        // a{
                        //     color: #FFF;
                        //     font-size: 12px;
                        //     text-decoration: none;
                        // }
                    }
                    li:nth-child(1){
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>