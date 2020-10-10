<template>
    <div class="movie">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-4">
                    <div class="new">
                        <span>推荐视频</span>
                        <span>New Article</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc animate__animated animate__bounceInRight">
                    <div class="two-content ">
                        <ul class="">
                            <li v-for="item in 20" class="two-list ">
                                <a href="/moviecontent" class="two-list-img">
                                    <div class="two-img">
                                        <img src="../assets/images/movie/movie01.jpg" alt="">
                                    </div>
                                </a>
                                <a href="/moviecontent" class="two-list-title">
                                    你的名字。
                                </a>
                            </li>
                        </ul>
                    </div>
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
    
}
</script>
<style lang="less" scoped>
    @import url('../assets/css/index.less');
    .movie{
        .row-left{
            // margin-right: -15px;
            padding-right: 15px;
            .two{
                .two-content{
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        padding-top: 20px;
                        // justify-content: space-between;
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
            // margin-left: -15px;
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