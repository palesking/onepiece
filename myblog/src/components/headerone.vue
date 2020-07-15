<template>
    <div class="headerone">
        <!-- <div class="header-content">
            <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style='border:0;'>
                <el-menu-item index="1" class="header-title">
                    <router-link to="/index" exact class="header-a">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2" class="header-title">
                    <router-link to="/about" class="header-a">关于</router-link>
                </el-menu-item>
            </el-menu>
        </div> -->
        <ul class="layui-nav layui-this" lay-filter="">
            <li class="layui-nav-item">
                <a href="">首页</a>
            </li>
            <li class="layui-nav-item ">
                <a href="">文章</a>
            </li>
            <li class="layui-nav-item">
                <a href="">音乐</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;">电影</a>
                <!-- 二级菜单 -->
                <!-- <dl class="layui-nav-child"> 
                    <dd><a href="">移动模块</a></dd>
                    <dd><a href="">后台模版</a></dd>
                    <dd><a href="">电商平台</a></dd>
                </dl> -->
            </li>
            <li class="layui-nav-item"><a href="">社区</a></li>
        </ul>
        <el-backtop :bottom="100">
            <div class="upone">UP</div>
        </el-backtop>
    </div>
</template>
<script>
export default {
    name:'headerone',
    methods: {
        musiclist(){
            return [
                "http://music.palingking.com/123.mp3",
                "http://music.palingking.com/11.mp3"
            ]
        }
    },
    mounted() {
        //注意：导航 依赖 element 模块，否则无法进行功能性操作
        layui.use('element', function(){
            var element = layui.element;
            
            //…
        });
    },
}
</script>
<style lang="less" scoped>
    .headerone{
        background-color: #545c64;
        overflow: hidden;
        margin: auto;
        .layui-nav{
            width: 100%;
            li{
                float: left;
            }
        }
        .header-content{
            margin: auto;
            .aplayermusic{
              float: right;
            }
            .header-title{
                .header-a{
                    display:block;
                    text-align:center;
                }
            }
            
        }
        .upone{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
        }
    }
</style>