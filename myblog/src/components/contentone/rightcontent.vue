<template>
    <div>
        <el-col :span="8" class='main-right'>
            <div class="right-content">
                <author></author>
                <el-row class="one bgc">
                    <el-col :span="24">
                        <div class="new new-right">
                            <span><i class="el-icon-top"></i></span>
                            <span>网站公告</span>
                            <small>New Article</small>
                        </div>
                        <div class="col-md-12 ">
                            <div class="notice">
                                <ul>
                                    <li><a href="">Thinkphp5模型添加数据方法</a></li>
                                    <li><a href="">Thinkphp5模型添加数据方法</a></li>
                                    <li><a href="">Thinkphp5模型添加数据方法</a></li>
                                    <li><a href="">Thinkphp5模型添加数据方法</a></li>
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
                                    <li>
                                        <span class='layui-badge layui-bg-orange'>1</span>
                                        <a href="#">thinkphp5随机抽取数据的方法
                                            <b>(235)</b>
                                        </a>
                                    </li>
                                    <li>
                                        <span class='layui-badge layui-bg-green'>2</span>
                                        <a href="#">thinkphp5随机抽取数据的方法
                                            <b>(235)</b>
                                        </a>
                                    </li>
                                    <li>
                                        <span class='layui-badge layui-bg-cyan'>3</span>
                                        <a href="#">thinkphp5随机抽取数据的方法
                                            <b>(235)</b>
                                        </a>
                                    </li>
                                    <li>
                                        <span class='layui-badge layui-bg-blue'>4</span>
                                        <a href="#">thinkphp5随机抽取数据的方法
                                            <b>(235)</b>
                                        </a>
                                    </li>
                                    <li>
                                        <span class='layui-badge layui-bg-black'>5</span>
                                        <a href="#">thinkphp5随机抽取数据的方法
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
                                <li class="media">
                                    <div class="artimg-img">
                                        <img class="mr-3" src="../../assets/images/7.jpg" alt="Generic placeholder image">
                                    </div>
                                    <div class="media-body art-content">
                                        <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                                        <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端</p>
                                        <ul>
                                            <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>2019-04-03</a></li>
                                            <li class="d-none d-sm-none d-md-none d-lg-block"><a href="/index/article/index/id/32.html" title="查看分类"><i class="el-fire"></i>5</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="media">
                                    <div class="artimg-img">
                                        <img class="mr-3" src="../../assets/images/8.jpg" alt="Generic placeholder image">
                                    </div>
                                    <div class="media-body art-content">
                                        <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                                        <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端</p>
                                        <ul>
                                            <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>2019-04-03</a></li>
                                            <li class="d-none d-sm-none d-md-none d-lg-block"><a href="/index/article/index/id/32.html" title="查看分类"><i class="el-fire"></i>5</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="media">
                                    <div class="artimg-img">
                                        <img class="mr-3" src="../../assets/images/9.jpg" alt="Generic placeholder image">
                                    </div>
                                    <div class="media-body art-content">
                                        <h5 class="mt-0 mb-1">js前端实现模糊查询</h5>
                                        <p>js前端实现模糊查询对于模糊查询，一般都是传关键字给后端</p>
                                        <ul>
                                            <li><a title="惜缘2019-04-03发表"><i class="el-time"></i>2019-04-03</a></li>
                                            <li class="d-none d-sm-none d-md-none d-lg-block"><a href="/index/article/index/id/32.html" title="查看分类"><i class="el-fire"></i>5</a></li>
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
                                        <li>
                                            <div class="art-hd-list-left">
                                                <a href="#"><img src="images/logo.png" alt=""></a>
                                            </div>
                                            <div class="art-hd-list-right">
                                                <span><i class="el-user"></i>惜缘</span>
                                                <time>2020-3-7</time>
                                                <p>一般都是传关键字给后端，由后端来做...</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="art-hd-list-left">
                                                <a href="#"><img src="images/logo.png" alt=""></a>
                                            </div>
                                            <div class="art-hd-list-right">
                                                <span><i class="el-user"></i>惜缘</span>
                                                <time>2020-3-7</time>
                                                <p>一般都是传关键字给后端，由后端来做...</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="art-hd-list-left">
                                                <a href="#"><img src="images/logo.png" alt=""></a>
                                            </div>
                                            <div class="art-hd-list-right">
                                                <span><i class="el-user"></i>惜缘</span>
                                                <time>2020-3-7</time>
                                                <p>一般都是传关键字给后端，由后端来做...</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="art-hd-list-left">
                                                <a href="#"><img src="images/logo.png" alt=""></a>
                                            </div>
                                            <div class="art-hd-list-right">
                                                <span><i class="el-user"></i>惜缘</span>
                                                <time>2020-3-7</time>
                                                <p>一般都是传关键字给后端，由后端来做...</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="art-hd-list-left">
                                                <a href="#"><img src="images/logo.png" alt=""></a>
                                            </div>
                                            <div class="art-hd-list-right">
                                                <span><i class="el-user"></i>惜缘</span>
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
                                        <li>
                                            <span class="layui-badge layui-bg-orange">1</span>
                                            <a href="#">thinkphp5随机抽取数据的方法
                                                <b>(235)</b>
                                            </a>
                                        </li>
                                        <li>
                                            <span class="layui-badge layui-bg-green">2</span>
                                            <a href="#">thinkphp5随机抽取数据的方法
                                                <b>(235)</b>
                                            </a>
                                        </li>
                                        <li>
                                            <span class="layui-badge layui-bg-cyan">3</span>
                                            <a href="#">thinkphp5随机抽取数据的方法
                                                <b>(235)</b>
                                            </a>
                                        </li>
                                        <li>
                                            <span class="layui-badge layui-bg-blue">4</span>
                                            <a href="#">thinkphp5随机抽取数据的方法
                                                <b>(235)</b>
                                            </a>
                                        </li>
                                        <li>
                                            <span class="layui-badge layui-bg-black">5</span>
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
                                <li class="layui-btn layui-btn-xs">
                                    <a href="#">生活&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-red layui-btn layui-btn-xs">
                                    <a href="#" >模糊查询&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-orange layui-btn layui-btn-xs">
                                    <a href="#" >遍历二维数组&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-green layui-btn layui-btn-xs">
                                    <a href="#">Mui&nbsp;&nbsp;(2)</a>
                                </li>
                                <li class="layui-bg-cyan layui-btn layui-btn-xs">
                                    <a href="#">随机&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-blue layui-btn layui-btn-xs">
                                    <a href="#">文章月统计&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-black layui-btn layui-btn-xs">
                                    <a href="#">时间戳&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-gray layui-btn layui-btn-xs">
                                    <a href="#" style="color:#999;">一周每天的数据&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-btn layui-btn-xs">
                                    <a href="#">生活&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-red layui-btn layui-btn-xs">
                                    <a href="#" >模糊查询&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-orange layui-btn layui-btn-xs">
                                    <a href="#" >遍历二维数组&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-green layui-btn layui-btn-xs">
                                    <a href="#">Mui&nbsp;&nbsp;(2)</a>
                                </li>
                                <li class="layui-bg-cyan layui-btn layui-btn-xs">
                                    <a href="#">随机&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-blue layui-btn layui-btn-xs">
                                    <a href="#">文章月统计&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-black layui-btn layui-btn-xs">
                                    <a href="#">时间戳&nbsp;&nbsp;(1)</a>
                                </li>
                                <li class="layui-bg-gray layui-btn layui-btn-xs">
                                    <a href="#" style="color:#999;">一周每天的数据&nbsp;&nbsp;(1)</a>
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
                                <li class="layui-btn layui-btn-xs"><a href="https:/www.baidu.com" target="_blank">百度一下</a></li>
                                <li class="layui-btn layui-btn-xs"><a href="">博客</a></li>
                                <li class="layui-btn layui-btn-xs"><a href="">百度一下</a></li>
                                <li class="layui-btn layui-btn-xs"><a href="">百度一下</a></li>
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
                    .notice li {
                        line-height: 30px;
                        margin-bottom: 12px;
                        padding: 4px 12px 4px 30px;
                        background: #f6f6f6;
                        border-radius: 4px;
                        a{
                            font-size: 14px;
                            text-decoration: none;
                            color: #515151;
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
                }
            }
            .six{
                .label {
                    width: 95%;
                    overflow: hidden;
                    // margin-bottom: 10px;
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
        /* padding-left: 20px; */
        margin-left: 10px;
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
    .artimg-list>li p {
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 54px;
        color: #515151;
    }
    .art-content>ul {
        width: 100%;
        overflow: hidden;
        position: absolute;
    }
    .art-content>ul>li {
        float: left;
        overflow: hidden;
        padding: 0 5px;
        font-size: 12px;
        color: #888;
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .art-content>ul>li:last-child {
        float: right;
    }
    .art-content>ul>li {
        float: left;
        overflow: hidden;
        padding: 0 5px;
        font-size: 12px;
        color: #888;
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
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
</style>