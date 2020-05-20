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
              <p>项目经验不多,我写这个网站遇到的问题都是小问题,因为内容不多,欠缺处理很多数据的经验,还有各种效果的实现都需要更多的代码</p>
              <p>从入门到踹门,路还很长</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="工作状态">
          <div class="about-content">
              <p>暂无</p>
          </div>
        </el-tab-pane>
        </el-tabs>
    </div>
    <Sectiontwo></Sectiontwo>
  </div>
</template>
<script>
import Sectiontwo from '../components/Sectiontwo'
export default {
  name:'About',
  data() {
    return {
      tabPosition: 'left'
    }
  },
  components:{
    Sectiontwo
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