<template>
  <div class="about">
    <div class="about-content"> 
        <el-tabs :tab-position="tabPosition" style="width:800px; height:600px; margin-top:10px; background-color:white; border-radius:5px; font-size: 26px;">
          <el-tab-pane label="基本信息">
          <div class="about-content">
              <p>前端小白</p>
              <!-- <p>大致了解html,css,js,less,vue,git,react(基础),基础的网络知识</p> -->
              <p></p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于网站">
          <div class="about-content">
              <p>此网站仅用于学习</p>
              <p>vue和elementui搭建</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于项目">
          <div class="about-content">
              
          </div>
        </el-tab-pane>
        <el-tab-pane label="工作状态">
          <div class="about-content">
              <p>暂无</p>
          </div>
        </el-tab-pane>
        </el-tabs>
    </div>
    <sectiontwo></sectiontwo>
  </div>
</template>
<script>
import sectiontwo from '../components/sectiontwo'
export default {
  name:'about',
  data() {
    return {
      tabPosition: 'left'
    }
  },
  components:{
    sectiontwo
  }
}
</script>
<style lang="less">
  .about{
    width: 1400px;
    margin: auto;
    height: 880px;
    margin-top: 75px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    //width: 1400px;
    //margin: auto;
    // color: white;
    position: relative;
    .about-content{
      // overflow: visible;
      height:600px;
      padding-left: 20px;
      p{
        margin: 10px 0px;
        //font-size: 24px;
      }
    }
  }
</style>