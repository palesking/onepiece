<template>
    <div class="about">
        <el-row class="">
            <el-col :span="16" class="row-left">
                <el-col :span="24" class="one bgc mb-4">
                    <div class="new">
                        <span>关于我</span>
                        <span>About me</span>
                    </div>
                </el-col>
                <el-col :span="24" class="two bgc mb-4">
                    <div class="new">

                    </div>
                </el-col>
            </el-col>
            <el-col :span="8" class="row-right">
                <el-col :span="24" class="one bgc">
                    <div class="new">
                        <span>音乐排行榜</span>
                        <span>New Article</span>
                    </div>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import sectiontwo from '../components/sectiontwo'
    export default {
        name:'about',
        data() {
            return {

            }
        },
        components:{
            sectiontwo
        }
    }
</script>
<style lang="less" scoped>
    @import url('../assets/css/index.less');
    .about{
        .row-left{
            padding-right: 15px;
            .two{
                height: 600px;
            }
        }
        .row-right{
            padding-left: 15px;
        }
    // width: 1400px;
    // margin: auto;
    
    // margin-top: 75px;
    // padding: 5px 0;
    // display: flex;
    // justify-content: space-between;
    // //width: 1400px;
    // //margin: auto;
    // // color: white; 
    // position: relative;
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