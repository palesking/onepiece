<template>
    <div class="index">
        <el-container class="index-content">
            <el-header class="index-header navbar-expand-lg">
                <div class="header-content container">
                    <!-- <a href="/" class="logo testone">
                        <span>天</span>
                        <span>堂</span>
                        <span>瀑</span>
                        <span>布</span>
                        <img src="../../assets/logo2.png" alt="">
                    </a> -->

                    <!-- <div class="content-title">
                        <ul class="layui-nav layui-this" lay-filter="">
                            <li class="layui-nav-item">
                                <router-link to='/'>首页</router-link>
                            </li>
                            <li class="layui-nav-item">
                                <router-link to='/version'>说说</router-link>
                            </li>
                            <li class="layui-nav-item">
                                <router-link to='/movie'>电影</router-link>
                            </li>
                            <li class="layui-nav-item">
                                <router-link to='/community'>文章</router-link>
                            </li>
                            <li class="layui-nav-item">
                                <router-link to='/music'>音乐</router-link>
                            </li>
                            <li class="layui-nav-item">
                                <router-link to='/about'>关于</router-link>
                            </li>
                        </ul>
                    </div> -->
                    <headerone></headerone>
                </div>
            </el-header>
            <el-main class="index-main">
                <div class="main-content">
                    <el-row>
                        <el-col :span="16" class='main-left'>
                            <el-carousel :interval="5000" arrow="always">
                                <el-carousel-item v-for="item in img" :key="item.id">
                                <!-- <h3>{{ item }}</h3> -->
                                <img :src='item.url' alt="">
                                </el-carousel-item>
                            </el-carousel>
                            <div class="new mt-2">
                                <span>
                                    <i class="el-icon-sunny"></i>
                                </span>
                                <span>最新文章</span>
                                <span>New Article</span>
                            </div>
                            <el-row class="mainlist">
                                <el-col :span="24">
                                    <ul class="art-list list-unstyled">
                                        <li class="listone" v-for="(item,index) in 10" :key="index">
                                            <div class="art-img">
                                                <img src="../../assets/images/8.jpg" alt="">
                                            </div>
                                            <div class="art-content">
                                                <h5>js前端实现模糊查询</h5>
                                                <p>
                                                    js前端实现模糊查询对于模糊查询，
                                                    一般都是传关键字给后端，由后端来做。
                                                    但是有时候一些轻量级的列表前端来做可以减少ajax请求，
                                                    在一定程度上提高用户体验。废话不多...
                                                </p>
                                                <ul>
                                                    <li>
                                                        <a href="">
                                                            <i class="layui-icon layui-icon-time"></i>
                                                            2019-04-03
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i class="layui-icon layui-icon-friends"></i>
                                                            天堂瀑布
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i class="layui-icon layui-icon-heart-fill"></i>
                                                            2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i class="layui-icon layui-icon-praise"></i>
                                                            1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i class="layui-icon layui-icon-template-1"></i>
                                                            标签
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </el-col>
                            </el-row>
                            <el-row class="bgc">
                                <el-col :span="24">
                                    <div class="new">
                                        <span>
                                            <i class="el-icon-sunny"></i>
                                        </span>
                                        <span>推荐图文</span>
                                        <span>New Article</span>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row class="bgc mt-4 codeone">
                                <el-col :span="24">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4 bgc  ">
                                                <div class="card mb-4 box-shadow  mt-4">
                                                    <div class="showimg">
                                                        <img class="card-img-top" style=" width: 100%; display: block;" src="../../assets/images/7.jpg" data-holder-rendered="true">
                                                    </div>

                                                    <div class="card-body">
                                                        <a href="#">测试图文</a>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="btn-group showtitle">
                                                                <i class="el-time"></i>2019-04-03
                                                            </div>
                                                            <small class="text-muted"><i class="el-fire"></i>9 mins</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 bgc ">
                                                <div class="card mb-4 box-shadow mt-4">
                                                    <div class="showimg">
                                                        <img class="card-img-top" style=" width: 100%; display: block;" src="../../assets/images/9.jpg" data-holder-rendered="true">
                                                    </div>
                                                    <div class="card-body">
                                                        <a href="#">测试图文</a>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="btn-group showtitle">
                                                                <i class="el-time"></i>2019-04-03
                                                            </div>
                                                            <small class="text-muted">9 mins</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 bgc ">
                                                <div class="card  box-shadow mt-4">
                                                    <div class="showimg">
                                                        <img class="card-img-top" style=" width: 100%; display: block;" src="../../assets/images/9.jpg" data-holder-rendered="true">
                                                    </div>
                                                    <div class="card-body">
                                                        <a href="#">测试图文</a>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div class="btn-group showtitle">
                                                                <i class="el-time"></i>2019-04-03
                                                            </div>
                                                            <small class="text-muted">9 mins</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="8" class='main-right'>
                            <div class="right-content">

                                <el-row class="right-author bgc">
                                    <el-col :span="24">
                                        <div class="auth-img">
                                            <img src="../../assets/logo.jpg" alt="">
                                        </div>
                                        <div class="auth-name">
                                            <span>天堂瀑布</span>
                                            <p>一个前端开发</p>
                                        </div>
                                        <div class="auth-info">
                                            <ul>
                                                <li><strong>2</strong><span>今日访问量</span></li>
                                                <li><strong>2</strong><span>今日访问量</span></li>
                                                <li><strong>2</strong><span>今日访问量</span></li>
                                            </ul>
                                        </div>
                                    </el-col>
                                </el-row>

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
                                                    <ul class="art-sort">
                                                        <li>
                                                            <span>1</span>
                                                            <a href="#">thinkphp5随机抽取数据的方法
                                                                <b>(235)</b>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span>2</span>
                                                            <a href="#">thinkphp5随机抽取数据的方法
                                                                <b>(235)</b>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span>3</span>
                                                            <a href="#">thinkphp5随机抽取数据的方法
                                                                <b>(235)</b>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span>4</span>
                                                            <a href="#">thinkphp5随机抽取数据的方法
                                                                <b>(235)</b>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span>5</span>
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
                                            <span><i class="el-tags"></i>标签云</span>
                                            <small>New Article</small>
                                        </div>
                                        <div class="col-md-12 ">
                                            <ul class="label">
                                                <li>
                                                    <a href="#" title="生活">生活&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="模糊查询">模糊查询&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="遍历二维数组">遍历二维数组&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Mui">Mui&nbsp;&nbsp;(2)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="随机">随机&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="文章月统计">文章月统计&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="时间戳">时间戳&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="一周每天的数据">一周每天的数据&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="无限极分类">无限极分类&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="tp5">tp5&nbsp;&nbsp;(2)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="面试">面试&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="layui">layui&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Thinkphp5">Thinkphp5&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="QQ互联">QQ互联&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="惜缘">惜缘&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="发斯蒂芬">发斯蒂芬&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="擦擦">擦擦&nbsp;&nbsp;(3)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="发">发&nbsp;&nbsp;(2)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="测试">测试&nbsp;&nbsp;(5)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="fasdfasd">fasdfasd&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="测试数据2">测试数据2&nbsp;&nbsp;(1)</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="测试数据">测试数据&nbsp;&nbsp;(2)</a>
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
                                            <ul class="links">
                                                <li class="layui-btn layui-btn-xs"><a href="">百度一下</a></li>
                                                <li class="layui-btn layui-btn-xs"><a href="">惜缘个人博客</a></li>
                                                <li class="layui-btn layui-btn-xs"><a href="">百度一下</a></li>
                                                <li class="layui-btn layui-btn-xs"><a href="">百度一下</a></li>
                                            </ul>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
            <el-footer id="footer">
                <footerone></footerone>
            </el-footer>
        </el-container>

    </div>
</template>

<script>
import sectionone from '@/components/sectionone.vue'
import sectiontwo from '@/components/sectiontwo.vue'
// import headerone from '@/components/headerone.vue'
import footerone from '@/views/footer/footerone.vue'
import headerone from '@/components/header/index.vue'

export default {
    name: 'index',
    data() {
        return {
            activeName: 'first',
            img:[
                {
                    id:1,
                    url:require('../../assets/images/1.png'),
                }
            ]
        }
    },
    mounted() {
        layui.use('element', function(){
            var element = layui.element;
            element.init()
        });
    },
    components: {
        headerone,
        sectionone,
        sectiontwo,
        footerone
    }
}
</script>

<style lang="less" scoped>
// @media (min-width: 1200px) {
//     .container{
//         max-width: 1140px;
//     }
// }
// @media (min-width: 1200px){
//     .container, .container-sm, .container-md, .container-lg, .container-xl {
//         max-width: 1140px;
//     }
// }
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.logoone{
    color: #009688;
}
.logotwo{
    color: #5fb878;
}
.logothree{
    color: #393d49;
}
.logofour{
    color: #1e9fff;
}
@media (min-width: 992px){
    .navbar-expand-lg {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start;
        .container, .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }
    }
}

// @media (min-width: 992px){
//     .container, .container-sm, .container-md, .container-lg {
//         max-width: 960px;
//     }
// }

// @media (min-width: 768px){
//     .container, .container-sm, .container-md {
//         max-width: 720px;
//     }
// }


@media (min-width: 1200px){
    .container {
        max-width: 1140px;
    }
}

// @media (min-width: 992px){
//     .container {
//         max-width: 960px;
//     }
// }

// @media (min-width: 768px){
//     .container {
//         max-width: 720px;
//     }
// }

@media (min-width: 768px){
    .col-md-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
}
// @media (min-width: 576px){
//     .container {
//         max-width: 540px;
//     }
// }
// @media (min-width: 576px){
//     .container, .container-sm {
//         max-width: 540px;
//     }
// }
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.mt-2{
    margin-top: 8px;
}
.mt-5{
    margin-top: 48px;
}
.mt-4{
    margin-top: 24px;
}
.mt-3{
    margin-top: 16px;
}
.mb-4{
    margin-bottom: 24px;
}
.col-md-4{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.row{
    // display: -ms-flexbox;
    display: flex;
    // -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    align-items: stretch;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    a{
        text-decoration: none;
        color: #ff6700;
    }
}
.showimg{
    img{
        width: 210px;
        height: 160px;
    }
}
.bgc{
    background: rgba(255,255,255,0.5);
}
.align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
}
.justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
}
.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}
.text-muted {
    color: #6c757d !important;
}
.small, .small {
    font-size: 80%;
    font-weight: 400;
}
.el-main {
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: initial;
}
.showtitle {
    font-size: 12px;
    height: 10px;
    line-height: 10px;
}
.btn-group, .btn-group-vertical {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
}
.main-left,.main-right{
    padding: 0 15px;
}
#footer{
    width: 100%;
    background: rgba(74, 168, 206, 0.65);
    margin-top: 35px;
    clear: both;
}
.main-left{
    .mainlist{
        margin-top: 8px;
        .list-unstyled{
            padding-left: 0;
            list-style: none;
            .listone:hover{
                border: 1px solid #ff6700;
            }
            .listone{
                width: 100%;
                padding: 25px;
                border: 1px solid rgba(0,0,0,0);
                box-sizing: border-box;
                margin-bottom: 25px;
                overflow: hidden;
                position: relative;
                background: rgba(255,255,255,0.5);
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
                .art-img{
                    width: 25%;
                    height: 105px;
                    float: left;
                    overflow: hidden;
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
                        font-size: 13px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: 54px;
                        color: #515151;
                    }
                    ul{
                        width: 100%;
                        overflow: hidden;
                        position: absolute;
                        margin-top: 5px;
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
            }
        }
    }
    .codeone{
        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }
    }
}
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
                width: 50%;
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
    // .el-col {
    //     border-radius: 4px;
    // }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
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
    .layui-nav {
        position: relative;
        padding: 0px;
        background-color: transparent;
        color: #fff;
        border-radius: 2px;
        font-size: 0;
        box-sizing: border-box;
    }
    ::v-deep.layui-nav-bar{
        width: 40px;
    }
    ::v-deep.el-footer{
        height: auto !important;
    }
    ::v-deep.el-footer {
        padding: 0 0px;
        box-sizing: border-box;
        flex-shrink: 0;
    }
    .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
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
    @media (min-width: 992px){
        .d-lg-block {
            display: block !important;
        }
    }

    @media (min-width: 768px){
        .d-md-none {
            display: none !important;
        }
    }
    
    @media (min-width: 576px){
        .d-sm-none {
            display: none !important;
        }
    }
    
</style>