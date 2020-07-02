<template>
    <div class="header" style="width:100%;position:fixed;z-index:2;top:0px;">
      <div class="header-content">
        <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style='border:0;'
        >
        <el-menu-item index="1" style="height:76px;line-height:76px;"><router-link to="/home" exact style="display:block;width:68px;height:76px;text-align:center;">首页</router-link></el-menu-item>
        <el-menu-item index="2" style="height:76px;line-height:76px;"><router-link to="/about" style="display:block;width:68px;height:76px;text-align:center;">关于</router-link></el-menu-item>
      </el-menu>
    </div>
    <el-backtop :bottom="100">
      <div
        style="{
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }"
      >
        UP
      </div>
    </el-backtop>
   </div>
</template>

<script>
export default {
    name:'Header',
    data() {
      return {
    }
  },
    created() {
      //console.log(this.musiclist())
    },
    methods: {
      musiclist(){
        return [
          "http://music.palingking.com/123.mp3",
          "http://music.palingking.com/11.mp3"
        ]
      }
    }
}
</script>
<style lang="less">
    .header{
        background-color: #545c64;
        width: 100%;
        .header-content{
            width: 1400px;
            margin: auto;
            .aplayermusic{
              float: right;
            }
        }
    }
</style>