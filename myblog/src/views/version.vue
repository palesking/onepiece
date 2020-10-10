<template>
    <div class="version">
        <el-col :span="16" class="row mr-2 version-content">
            <el-row class="container">
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>吐槽一下</span>
                        <span>New Article</span>
                    </div>
                </el-col>
                <el-col 
                    :span="24" 
                    class="two bgc mt-4 animate__animated animate__bounceIn animate__delay-0.5s"
                    v-for="item in 10"
                >
                    <ul>
                        <li class="version-list">
                            <div class="version-list-left">
                                <a href="" class="version-title">
                                    <h5>重庆从来没有魔幻，只有现实</h5>
                                </a>
                                <div class="version-title-content">
                                    如果不是重庆力帆集团突然爆出“破产在即”的消息，
                                    重庆人都快忘了曾有过尹明善这么一位开摩托、写诗歌的首富。 
                                    就连重庆曾经是中国第一“摩城”这件事，人们也快忘了。 
                                    重庆是骑在摩托车上跨入新千年的。
                                    上世纪80年代开始，嘉陵、建设、力帆、宗申、隆鑫等摩托企业群雄并起，
                                    最高峰时，全球55%的摩托车产自中国，而中国34%的摩托车都在重庆。 
                                    尹明善这样白手起家的摩帮老大，象征着那个时代的山城精神：
                                    不论出身，爬坡上坎，从不认输。一辆摩托车行驶在重庆南滨路上，
                                    远处是朝天门大桥。重庆曾是中国的摩托车之城。图/图虫创
                                </div>
                                <div class="version-title-links">
                                    <ul class="art-links">
                                        <li>
                                            <a href="/">
                                                <i class="layui-icon layui-icon-time"></i>
                                                2019-04-03
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="layui-icon layui-icon-friends"></i>
                                                天堂瀑布
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="layui-icon layui-icon-heart-fill"></i>
                                                2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="layui-icon layui-icon-praise"></i>
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="layui-icon layui-icon-template-1"></i>
                                                标签
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="version-list-right">
                                <a href="" class="version-title-img">
                                    <div class="imgcontent">

                                    </div>
                                    <img src="../assets/images/version-0.png" alt="">
                                </a>
                            </div>
                        </li>
                    </ul>
                </el-col>
                <el-col>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000"
                        class="pag mt-4"
                    >
                    </el-pagination>
                </el-col>
            </el-row>
        </el-col>
        <rightcontent></rightcontent>
    </div>
</template>
<script>
import rightcontent from '@/components/contentone/rightcontent.vue'
export default {
    name:'version',
    components: {
        rightcontent
    },
}
</script>
<style lang="less" scoped>
    @import url("../assets/css/index.less");
    .two{
        padding: 20px 20px;
    }
    .row{
        margin-left: 0;
        margin-right: 0px;
    }
    .container{
        padding-left: 0;
        padding-right: 15px;
    }
    .pag{
        padding: 0;
        ::v-deep.btn-prev{
            margin: 0;
            margin-right: 5px;
        }
    }
    .version{
        .version-content{
            .version-list{
                width: 100%;
                .version-list-left{
                    width: 80%;
                    float: left;
                    // a:visited {
                    //     color: #2d8cf0;
                    // }
                    .version-title{
                        h5{
                            font-size: 18px;
                            color: #515a6e;
                        }
                        h5:hover{
                            color: #ff6700;
                        }
                    }
                    .version-title-content{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        font-size: 12px;
                        margin-top: 4px;
                        color: #99a2aa;
                    }
                    .version-title-links{
                        height: 60px;
                        position: absolute;
                        line-height: 60px;
                        
                        .art-links{
                            li{
                                float: left;
                                margin-right: 20px;
                                a{
                                    font-size: 12px;
                                    color: #99a2aa;
                                }
                            }
                            // li:nth-child(1){
                            //     margin-right: 20px;
                            // }
                        }
                    }
                }
                .version-list-right{
                    width: 20%;
                    float: right;
                    display: inline-block;
                    overflow: hidden;
                    // width: 117px;
                    height: 88px;
                    border-radius: 4px;
                    margin: 1px 0 2px;
                    .version-title-img{
                        .imgcontent{
                            
                        }
                    }
                }
            }
        }
    }
    
    .art-content{
        width: 71%;
        float: right;
        position: relative;
        /* padding-left: 20px; */
        margin-left: 10px;
        h5{
            background: none;
            font-size: 18px;
            text-indent: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding-bottom: 5px;
            cursor: pointer;
            font-weight: bolder;
        }
        p{
            cursor: pointer;
            height: 60px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #515151;
        }
        ul{
            width: 100%;
            overflow: hidden;
            position: absolute;
            margin-top: 5px;
            // position: absolute;
            li:first-child{
                padding: 0;
            }
            li{
                float: left;
                overflow: hidden;
                padding: 0 5px;
                font-size: 12px;
                color: #888;
                max-width: 150px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                a{
                    text-decoration: none;
                    color: #999999;
                    i{
                        font-size: 16px;
                        color: #ff6700;
                    }
                }
            }
            li:last-child{
                float: right;
            }
        }
    }
</style>