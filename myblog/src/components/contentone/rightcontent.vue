<template>
    <div>
        <el-col :span="8" class='main-right'>
            <div class="right-content">
                <author></author>
                <el-row class="one bgc">
                    <el-col :span="24" class="box-shadow">
                        <div class="new new-right">
                            <span><i class="el-icon-top"></i></span>
                            <span>网站公告</span>
                            <small>Latest announcement</small>
                        </div>
                        <div class="col-md-12 ">
                            <div class="notice">
                                <ul>
                                    <li>
                                        <p>
                                            这里是天堂瀑布的个人网站,用于分享学习使用,欢迎访问!!!
                                        </p>
                                    </li>
                                    <li>
                                        <el-tooltip class="item" effect="dark" content="228575643" placement="bottom">
                                            <a href="">
                                                <i class="layui-icon layui-icon-login-qq"></i>
                                            </a>
                                        </el-tooltip>
                                        <a href="https://github.com/palesking/onepiece" target="_blank">
                                            <!-- <img src="../../assets/images/github.png" alt=""> -->
                                        </a>
                                        <el-tooltip class="item" effect="dark" placement="bottom">
                                            <a href="">
                                                <i class="layui-icon layui-icon-login-wechat"></i>
                                            </a>
                                            <div slot="content" class="wechat">
                                                <img src="../../assets/images/wechat.png" alt="">    
                                            </div> 
                                        </el-tooltip>
                                        <el-tooltip class="item" effect="dark" placement="bottom">
                                            <a href="">
                                                <i class="layui-icon layui-icon-login-weibo"></i>
                                            </a>
                                            <div slot="content" class="wechat">
                                                <img src="../../assets/images/wechat.png" alt="">    
                                            </div> 
                                        </el-tooltip>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row class="two bgc mt-3">
                    <el-col :span="24">
                        <div class="search">
                            <input type="text" class="search-input" placeholder="First name">
                            <input class="search-submit" value=" " type="submit">
                            <i class="layui-icon layui-icon-search"></i>
                        </div>
                    </el-col>
                </el-row>
                
                <el-row class="three bgc mt-3">
                    <el-col :span="24">
                        <div class="new new-right">
                            <span><i class="el-icon-s-grid"></i>说说</span>
                            <small>New Article</small>
                        </div>
                        <div class="col-md-12 ">
                            <div class="tab-pane">
                                <ul class="art-sort">
                                    <li v-for="(item,index) in threelist">
                                        <span class='layui-badge' :class="item.color">
                                            {{index+1}}
                                        </span>
                                        <a href="#">
                                            thinkphp5随机抽取数据的方法
                                            <b>(235)</b>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="four bgc mt-4 container">
                    <el-col :span="24">
                        <div class="row bgc">
                            <div class="new new-right">
                                <span>
                                    <i class="el-asl"></i>
                                    推荐图文
                                </span>
                                <small>New Article</small>
                            </div>
                            <ul class="list-unstyled artimg-list">
                                <li class="media" v-for="item in 3">
                                    <div class="artimg-img">
                                        <img class="mr-3" src="../../assets/images/7.jpg" alt="Generic placeholder image">
                                    </div>
                                    <div class="media-body art-content">
                                        <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                                        <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端来做</p>
                                        <ul>
                                            <li>
                                                <a>
                                                    <i class="el-icon-time"></i>
                                                    2019-04-03
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="" title="查看分类">
                                                    <i class="el-fire"></i>
                                                    天堂瀑布
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </el-col>
                </el-row>
                <el-row class="five bgc mt-5">
                    <el-col :span="24">
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="用户管理" name="first" class="five-title">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <ul class="hd-ul">
                                        <li v-for=" item in 5">
                                            <div class="art-hd-list-left">
                                                <a href="#"><img src="../../assets/logo.jpg" alt=""></a>
                                            </div>
                                            <div class="art-hd-list-right">
                                                <span>
                                                    <i class="el-user"></i>天堂瀑布
                                                </span>
                                                <time>2020-3-7</time>
                                                <p>一般都是传关键字给后端，由后端来做...</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="任务补偿" name="second" class="five-title">
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <ul class="art-sort pb-4 mt-2">
                                        <li v-for="item in 5">
                                            <span class="layui-badge layui-bg-orange">1</span>
                                            <a href="#">thinkphp5随机抽取数据的方法
                                                <b>(235)</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
                <el-row class="six bgc mt-5">
                    <el-col :span="24">
                        <div class="new new-right">
                            <span><i class="layui-icon layui-icon-link"></i>标签云</span>
                            <small>New Article</small>
                        </div>
                        <div class="col-md-12 ">
                            <ul class="label mt-4 pb-4">
                                <li class="layui-btn layui-btn-xs" 
                                v-for="(item,index) in sixlist"
                                :class="item.color"
                                >
                                    <a href="#">{{item.title}}({{item.value}})</a>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="seven bgc mt-5">
                    <el-col :span="24">
                        <div class="new new-right">
                            <span><i class="layui-icon layui-icon-link"></i>友情连接</span>
                            <small>Friend Links</small>
                        </div>
                        <div class="col-md-12 ">
                            <ul class="links mt-4 pb-4">
                                <li class="layui-btn layui-btn-xs">
                                    <a href="https:/www.baidu.com" target="_blank">百度一下</a>
                                </li>
                                <li class="layui-btn layui-btn-xs">
                                    <a href="">博客</a>
                                </li>
                                <li class="layui-btn layui-btn-xs">
                                    <a href="">百度一下</a>
                                </li>
                                <li class="layui-btn layui-btn-xs">
                                    <a href="">百度一下</a>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </div>
</template>
<script>
import author from '@/components/contentone/author.vue'
export default {
    data() {
        return {
            activeName: 'first',
            threelist:[
                {
                    color:'layui-bg-orange'
                },
                {
                    color:'layui-bg-green'
                },
                {
                    color:'layui-bg-cyan'
                },
                {
                    color:'layui-bg-blue'
                },
                {
                    color:'layui-bg-black'
                }
            ],
            sixlist:[
                {
                    color:'layui-bg-orange',
                    title:"生活",
                    value:11
                },
                {
                    color:'layui-bg-green',
                    title:"模糊查询",
                    value:12
                },
                {
                    color:'layui-bg-cyan',
                    title:"遍历二维数组",
                    value:9
                },
                {
                    color:'layui-bg-blue',
                    title:"Mui",
                    value:5
                },
                {
                    color:'layui-bg-black',
                    title:"文章月统计",
                    value:118
                }
            ]
        }
    },
    components: {
        author
    }
}
</script>
<style lang="less" scoped>
    @import url("../../assets/css/index.less");
    .main-right{
        .right-content{
            .right-author{
                display: flex;
                position: relative;
                .auth-img{
                    img{
                        display: block;
                        margin: auto;
                        // position: absolute;
                        // top: -30px;
                        // left: 41%;
                        border-radius: 100%;
                        border: 5px solid #fff;
                        width: 60px;
                        height: 60px;
                        justify-content: center;
                        margin-top: 10px;
                        transition: all 0.8s;
                        -webkit-transition: all 0.8s;
                    }
                }
                .auth-name{
                    margin-top: 10px;
                    text-align: center;
                    margin-bottom: 20px;
                    span{
                    color: #0181da;
                    }
                    p{
                        font-size: 12px;
                    }
                }
                .auth-info{
                    li{
                        float: left;
                        width: 33%;
                        margin-bottom: 15px;
                        border-right: 1px solid #ccc;
                        strong{
                            display: block;
                            text-align: center;
                            font-weight: bolder;
                            line-height: 18px;
                        }
                        span{
                            display: block;
                            text-align: center;
                            font-size: 12px;
                            color: #555;
                        }
                    }
                    li:last-child {
                        border-right: none;
                    }
                }
            }
            .one{
                margin-top: 24px;
                
                .col-md-12{
                    padding: 0 15px;
                    .notice {
                        li {
                            line-height: 30px;
                            margin-bottom: 12px;
                            padding: 4px 12px 4px 30px;
                            background: #f6f6f6;
                            border-radius: 4px;
                            
                        }
                        li:nth-child(2){
                            display: flex;
                            justify-content: space-between;
                            position: relative;
                            align-items: center;
                            a{
                                font-size: 14px;
                                text-decoration: none;
                                // margin-left: 40px;
                                color: #515151;
                                i{
                                    font-size: 36px;
                                }
                            }
                            a:nth-child(2){
                                width: 36px;
                                height: 36px;
                                line-height: 36px;
                                margin-top: -8px;
                                background-image: url('../../assets/images/github.png');
                            }
                            a:nth-child(2):hover{
                                background-image: url('../../assets/images/githover.png');
                            }
                            a:hover{
                                color: tomato;
                            }
                        }
                    }
                }
                
            }
            .two{
                .search{
                    width: 100%;
                    height: 35px;
                    position: relative;
                    .search-input{
                        width: 80%;
                        height: 35px;
                        border: 1px solid #ddd;
                        margin: 0;
                        float: left;
                        padding-left: 10px;
                    }
                    .search-submit{
                        width: 20%;
                        height: 35px;
                        line-height: 35px;
                        // float: right;
                        border: 1px solid #ccc;
                        /* margin-left: -4.9px; */
                        /* margin-top: -1px; */
                        padding: 0;
                        background: rgba(255,255,255,0.8);
                    }
                    i{
                        font-size: 16px;
                        float: right;
                        position: absolute;
                        right: 6%;
                        top: 8px;
                        color: #ff6700;
                        margin-right: 5px;
                    }
                }
            }
            .three{
                .col-md-12{
                    padding: 0 15px;
                    ul{
                        li{
                            width: 100%;
                            padding: 10px 0;
                            border-bottom: 1px dashed #ccc;
                            overflow: hidden;
                            position: relative;
                            a{
                                color: #515151;
                                margin-left: 5px;
                            }
                            a:hover{
                                color: tomato;
                            }
                        }
                    }
                }
            }
            .four{

            }
            .five{
                ::v-deep.el-tabs__nav{
                    width: 100%;
                    .el-tabs__item{
                        float: left;
                        display: block;
                        width: 50%;
                        text-align: center;
                        height: 48px;
                        line-height: 48px;
                    }
                    .is-active{
                        background: #ff6700;
                        color: #ffffff !important;
                    }
                    .el-tabs__active-bar{
                        width: auto !important;
                    }
                }
                
                .five-title{
                    // width: 50%;
                    .hd-ul{
                        padding: 0;
                        margin: 0;
                        li{
                            width: 100%;
                            padding: 10px 0;
                            border-bottom: 1px dashed #ccc;
                            overflow: hidden;
                            .art-hd-list-left {
                                float: left;
                                width: 50px;
                                height: 50px;
                                line-height: 50px;
                                margin-left: 5px;
                                a{
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                            .art-hd-list-right {
                                width: 75%;
                                float: left;
                                margin-left: 15px;
                                time{
                                    float: right;
                                    font-size: 12px;
                                    color: #999999;
                                }
                                p{
                                    font-size: 13px;
                                    overflow: hidden;
                                    line-height: 15px;
                                    text-overflow: ellipsis;
                                    display: inline-block;
                                }
                            }
                        }
                    }
                }
            }
            .six{
                .label {
                    width: 95%;
                    overflow: hidden;
                    li{
                        padding: 0.1em 0.5em 0.1em 0.5em;
                        float: left;
                        text-align: center;
                        // border-radius: 0.5em;
                        margin: 0.3em 1% 0.3em 1%;
                        -moz-transition: all 0.5s;
                        -webkit-transition: all 0.5s;
                        -o-transition: all 0.5s;
                        transition: all 0.5s;
                        a{
                            color: #FFF;
                            font-size: 12px;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 576px) {
        ::v-deep.el-col-8{
            width: 100%;
            margin-top: 20px;
            // max-width: 500px;
        }
    }
    .new{
        background: rgba(255,255,255,0.5);
        // margin-top: 8px;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        span{
            font-size: 16px;
            margin-left: 5px;
        }
        small{
            display: inline-block;
            line-height: 40px;
            margin-left: 5px;
            color: #bcbcbc;
        }
        span:nth-child(1){
            margin-left: 5px;
            i{
                font-size: 20px;
                color: #ff6700;
                margin-right: 5px;
            }
        }
        span:nth-child(2){
            color: #0181da;
        }
        span:nth-child(3){
            // font-size: 12px;
            font-size: 80%;
            font-weight: 400;
            color: #bcbcbc;
        }
    }
    .new-right{
        width: 100%;
        height: 40px;
        background: rgba(255,255,255,0.5);
        margin-top: 0;
    }
    .artimg-list>li {
        width: 100%;
        /* margin: auto; */
        padding: 25px;
        border: 1px solid rgba(0,0,0,0);
        box-sizing: border-box;
        margin-bottom: 25px;
        overflow: hidden;
        position: relative;
        /* background: rgba(255,255,255,0.5); */
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }
    .artimg-img {
        width: 45%;
        height: 85px;
        float: left;
        overflow: hidden;
    }
    .artimg-img img {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
    }
    .art-content {
        width: 71%;
        float: right;
        position: relative;
        margin-left: 10px;
        h5{

        }
        h5:hover{
            color: tomato;
        }
        p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: 12px;
        }
        ul{
            margin-top: 5px;
            li{
                float: left;
                overflow: hidden;
                font-size: 12px;
                color: #888;
                max-width: 150px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                a{
                    color: #888;
                }
            }
            li:nth-child(2){
                float: right;
            }
        }
    }
    .artimg-list h5 {
        font-weight: bolder;
        font-size: 14px !important;
    }
    .art-content h5 {
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
    .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        transition: all .5s ease;
    }
    .media:hover{
        background: #fff;
        box-shadow: #ccc 1px 1px 8px;
    }
    .index{
        .index-content{
            background-color: #e9eaed;
            .index-header{
                background: rgba(255,255,255,0.85);
                padding: 8px 16px;
                height: auto !important;
                align-items: center;
                .header-content{
                    display: flex;
                    padding-right: 15px;
                    padding-left: 15px;
                    .logo{
                        display: inline-block;
                        padding: 5px 0;
                        margin-right: 16px;
                        span{
                            font-size: 24px;
                            color: tomato;
                        }
                        img{
                            height: 45px;
                            vertical-align: middle;
                        }
                    }
                    .content-title{
                        display: flex;
                        flex-basis: auto;
                        justify-content: flex-end;
                        flex-grow: 1;
                        align-items: center;
                        box-sizing: border-box;
                        height: 50px;
                        ul{
                            display: flex;
                            // flex-flow: row;
                            flex-direction: row;
                            padding-left: 0;
                            margin-bottom: 0;
                            
                            li{
                                box-sizing: border-box;
                                a{
                                    text-align: center;
                                    font-size: 16px;
                                    display: block;
                                    width: 102px;
                                    line-height: 50px;
                                    color: #ff6700 !important;
                                    padding: 8px 16px;
                                }
                            }
                        }
                    }
                }
            }
            .index-main{
                background-color: #e9eaed;
                width: 1140px;
                margin: auto;
                margin-top: 16px;
            }
        }
    }
    .showimg{
        img{
            width: 210px;
            height: 160px;
        }
    }
    .wechat{
        width: 100px;
        height: 100px;
        padding: 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .box-shadow{
        background-clip: border-box;
        border: 0px solid rgba(0, 0, 0, 0.125);
        transition: all .5s ease;
    }
    .box-shadow:hover {
        background: #fff;
        box-shadow: #ccc 1px 1px 8px;
    }
</style>