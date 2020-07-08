<template>
    <div class="headerone">
        <div class="header-content">
            <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style='border:0;'>
                <el-menu-item index="1" class="header-title">
                    <router-link to="/home" exact class="header-a">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2" class="header-title">
                    <router-link to="/about" class="header-a">关于</router-link>
                </el-menu-item>
            </el-menu>
        </div>
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
}
</script>
<style lang="less" scoped>
    .headerone{
        background-color: #545c64;
        .header-content{
            width: 1400px;
            margin: auto;
            .aplayermusic{
              float: right;
            }
            .header-title{
                // height:76px;
                // line-height:76px;
                .header-a{
                    display:block;
                    // width:68px;
                    // height:76px;
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