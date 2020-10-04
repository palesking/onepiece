<template>
    <div class="header-content container">
        <a href="/" class="logo testone">
            <!-- <span>天</span>
            <span>堂</span>
            <span>瀑</span>
            <span>布</span> -->
            <img src="../../assets/logo2.png" alt="">
        </a>
        <div class="content-title">
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
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    @import url("../../assets/css/index.less");
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
    .layui-nav {
        position: relative;
        padding: 0px;
        background-color: transparent;
        color: #fff;
        border-radius: 2px;
        font-size: 0;
        box-sizing: border-box;
    } 
</style>