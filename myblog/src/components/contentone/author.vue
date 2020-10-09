<template>
    <div>
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    @import url("../../assets/css/index.less");
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
</style>