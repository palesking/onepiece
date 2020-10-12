<template>
    <div class="about">
        <div class="about-content"> 
        </div>
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
<style lang="less">
  .about{
    // width: 1400px;
    // margin: auto;
    // height: 880px;
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