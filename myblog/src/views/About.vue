<template>
    <div class="about">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-2">
                    <div class="new colortomato">
                        <i class="layui-icon layui-icon-home"></i>
                        <span>关于我</span>
                        <span>About me</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc mb-2">
                    <div class="new col-md-12 bgc colortomato">
                        <p>博客1.0全新上线,付出总会有收获......</p>
                    </div>
                </el-col>
                <el-col :span="24" class="three bgc mb-4">
                    <div class="new">
                        <span>网站历程</span>
                    </div>
                    <div class="col-md-12 bgc">
                        <div class="block">
                            <el-timeline>
                                <el-timeline-item timestamp="2018/4/12" placement="top">
                                <el-card>
                                    <h4>更新 Github 模板</h4>
                                    <p>天堂瀑布 提交于 2019/7/12 20:46</p>
                                </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2018/4/3" placement="top">
                                <el-card>
                                    <h4>更新 Github 模板</h4>
                                    <p>天堂瀑布 提交于 2019/7/10 20:46</p>
                                </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2018/4/2" placement="top">
                                <el-card>
                                    <h4>更新 Github 模板</h4>
                                    <p>天堂瀑布 提交于 2019/6/1 20:46</p>
                                </el-card>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="8" class="row-right">
                <el-col :span="24" class="one bgc">
                    <div class="new colortomato">
                        <i class="layui-icon layui-icon-link"></i>
                        <span>个人链接</span>
                        <span>New links</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc mt-2">
                    <div class="col-md-12 ">
                        <ul class="label mt-2 pb-2">
                            <li class="layui-btn">
                                <a href="https://github.com/palesking/onepiece" target="_blank">github</a>
                            </li>
                            <li class="layui-bg-red layui-btn">
                                <a href="#" target="_blank">简历</a>
                            </li>
                            <li class="layui-bg-orange layui-btn">
                                <a href="#" target="_blank">微信</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import sectiontwo from '../components/sectiontwo'
    export default {
        name:'about',
        data() {
            return {

            }
        },
        components:{
            sectiontwo
        }
    }
</script>
<style lang="less" scoped>
    i{
        vertical-align: middle;
        font-size: 20px;
        margin-right: 5px;
    }
    @import url('../assets/css/index.less');
    .about{
        .row-left{
            padding-right: 15px;
            .two{
            }
        }
        .row-right{
            padding-left: 15px;
            .two{
                .label {
                    width: 95%;
                    overflow: hidden;
                    li{
                        margin-bottom: 10px;
                        width: 30%;
                    }
                    li:nth-child(1){
                        margin-left: 10px;
                    }
                }
            }
        }
    // width: 1400px;
    // margin: auto;
    
    // margin-top: 75px;
    // padding: 5px 0;
    // display: flex;
    // justify-content: space-between;
    // //width: 1400px;
    // //margin: auto;
    // // color: white; 
    // position: relative;
    // .about-content{
    //   // overflow: visible;
    //   height:600px;
    //   padding-left: 20px;
    //   p{
    //     margin: 10px 0px;
    //     //font-size: 24px;
    //   }
    // }
  }
</style>