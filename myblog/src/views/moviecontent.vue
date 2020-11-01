<template>
    <div class="moviecontent">
        <el-row>
            <el-col :span="24" class="one">
                <video controls width="100%" height="100%">
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    您的浏览器不支持Video标签。
                </video>    
            </el-col>
            <el-col :span="24" class="two bgc">
                <div class="two-content">
                    <ul>
                        <li class="two-list">
                            <a href="/moviecontent" class="two-list-img">
                                <div class="two-img">
                                    <img src="../assets/images/movie/movie01.jpg" alt="">
                                </div>
                            </a>
                            <a href="/moviecontent" class="two-list-title">
                                <h5>你的名字。</h5>
                                <span class="two-list-titlecontent">
                                    在远离大都会的小山村，
                                    住着巫女世家出身的高中女孩宫水三叶。
                                    不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。
                                    另一方面，住在东京的高中男孩立花泷则总在梦里来到陌生的小山村，
                                    以女孩子的身份过着全新的生活。许是受那颗神秘彗星的影响，
                                    立花和三叶在梦中交换了身份。
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "moviecontent",
    data() {
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>
    @import url('../assets/css/index.less');
    .moviecontent{
        .two{
            // padding: 15px 0;
            margin-top: 10px;
            .two-content{
                padding: 10px;
                ul{
                    li{
                        display: flex;
                        flex-wrap: wrap;
                        a{
                            color: #222;
                        }
                        a:hover{
                            color: #ff6700;
                        }
                        .two-list-img{
                            // position: relative;
                            display: block;
                            float: left;
                            width: 134px;
                            height: 179px;
                            z-index: 2;
                            border-radius: 2px;
                            overflow: hidden;
                            background-color: #f4f5f7;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .two-list-title{
                            display: block;
                            margin-left: 15px;
                            width: 50%;
                            h5{
                                display: block;
                                height: 20px;
                                line-height: 20px;
                                font-size: 16px;
                                color: #212121;
                                font-weight: 500;
                                margin-top: 4px;
                                margin-bottom: 16px;
                                padding-right: 240px;
                                overflow: hidden;
                                -o-text-overflow: ellipsis;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .two-list-titlecontent{
                                display: block;
                                font-size: 12px;
                                color: #212121;
                                min-height: 18px;
                                line-height: 18px;
                                word-wrap: break-word;
                                word-break: break-all;
                                white-space: normal;
                            }
                        }
                        
                    }
                }
            }
        }
    }
</style>