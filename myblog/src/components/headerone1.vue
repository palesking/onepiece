<template>
    <div class="headerone">
        <ul class="layui-nav layui-this" lay-filter="">
            <li class="layui-nav-item">
                <router-link to='/index'>首页</router-link>
            </li>
            <li class="layui-nav-item ">
                <router-link to='/version'>文章</router-link>
            </li>
            <li class="layui-nav-item">
                <router-link to='/music'>音乐</router-link>
            </li>
            <li class="layui-nav-item">
                <router-link to='/movie'>电影</router-link>
            </li>
            <li class="layui-nav-item">
                <router-link to='/community'>社区</router-link>
            </li>
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
        margin: auto;
        width: 1100px;
        ul{
            overflow: hidden;
        }
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