<template>
    <div class="movie">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-4">
                    <div class="new colortomato">
                        <span>
                            <i class="layui-icon layui-icon-video"></i>
                            推荐视频
                        </span>
                        <span>New Article</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc animate__animated animate__bounceInRight" v-show="$route.path === '/home/movie'">
                    <div class="two-content ">
                        <ul class="">
                            <li v-for="item in 20" class="two-list ">
                                <a href="/home/movie/moviecontent" class="two-list-img">
                                    <div class="two-img">
                                        <img src="../assets/images/movie/movie01.jpg" alt="">
                                    </div>
                                </a>
                                <a href="/home/movie/moviecontent" class="two-list-title">
                                    你的名字。
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col v-show="$route.path === '/home/movie'">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000"
                        class="pag mt-4"
                    >
                    </el-pagination>
                </el-col>
                <el-col :span="24">
                    <router-view class="animate__animated animate__bounceInRight"></router-view>
                </el-col>
            </el-col>
            <el-col :span="8" class="row-right">
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>排行榜</span>
                        <span>New Article</span>
                    </div>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route)
    },
}
</script>
<style lang="less" scoped>
    @import url('../assets/css/index.less');
    .movie{
        .row-left{
            padding-right: 15px;
            .one{
                .new{
                    span{
                        i{
                            vertical-align: middle;
                        }
                        
                    }
                    
                }
            }
            .two{
                .two-content{
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        padding-top: 20px;
                        .two-list{
                            width: 160px;
                            height: 304px;
                            margin-right: 20px;
                            margin: auto;
                            .two-list-title{
                                display: block;
                                margin-top: 10px;
                                color: #222;
                            }
                            .two-list-title:hover{
                                color: #ff6700;
                            }
                            .two-img{
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
        .row-right{
            padding-left: 15px;
        }
    }
    .pag{
        padding: 0;
        ::v-deep.btn-prev{
            margin: 0;
            margin-right: 5px;
        }
    }
</style>