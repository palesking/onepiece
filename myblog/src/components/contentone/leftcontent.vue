<template>
    <div>
        <el-col :span="16" class='main-left'>
            <el-carousel 
                :interval="5000" 
                arrow="always" 
                class="animate__animated animate__bounceInDown animate__delay-0.5s"
            >
                <el-carousel-item v-for="item in img" :key="item.id">
                    <img :src='item.url' alt="" class="lunbotu">
                </el-carousel-item>
            </el-carousel>
            <el-row class="">
                <el-col :span="24">
                    <div class="new mt-2">
                        <span>
                            <i class="el-icon-sunny"></i>
                        </span>
                        <span>最新文章</span>
                        <span>New Article</span>
                    </div>
                </el-col>
            </el-row>
            
            <el-row class="mainlist">
                <el-col :span="24">
                    <ul class="art-list list-unstyled">
                        <li 
                            class="listone animate__animated animate__bounceInLeft animate__delay-1s" 
                            v-for="(item,index) in 10" 
                            :key="index"
                        >
                            <div class="art-img">
                                <img src="../../assets/images/8.jpg" alt="">
                            </div>
                            <div class="art-content">
                                <h5 @click="handledetails">js前端实现模糊查询</h5>
                                <p @click="handledetails">
                                    js前端实现模糊查询对于模糊查询，
                                    一般都是传关键字给后端，由后端来做。
                                    但是有时候一些轻量级的列表前端来做可以减少ajax请求，
                                    在一定程度上提高用户体验。废话不多...
                                    js前端实现模糊查询对于模糊查询，
                                    一般都是传关键字给后端，由后端来做。
                                    但是有时候一些轻量级的列表前端来做可以减少ajax请求，
                                    在一定程度上提高用户体验。废话不多...
                                </p>
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'first',
            img:[
                {
                    id:1,
                    url:require('../../assets/images/1.png'),
                },
                {
                    id:2,
                    url:require('../../assets/images/2.png'),
                },
                {
                    id:3,
                    url:require('../../assets/images/3.png'),
                }
            ]
        }
    },
    methods: {
        handledetails(){
            this.$router.push({path:'/detailsone'})
        }
    },
}
</script>
<style lang="less" scoped>
    @import url("../../assets/css/index.less");
    .main-left{
        .lunbotu{
            width: 100%;
            height: 100%;
        }
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
    .art-img{
        img{
            width: 100%;
            height: 100%;
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
</style>