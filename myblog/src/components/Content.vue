<template>
    <div class="content">
      <div class="content-title">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span v-html="data.titleContent[index]"></span>
          </div>
          <div class="text item">
				<span v-html="data.content[index]">
				</span>
				<div class="text-button">
					<el-button type="primary" plain><a :href="link" target="_blank">查看效果</a></el-button>
					<el-button type="primary" plain><a :href="code" target="_blank">查看源码</a></el-button>
				</div>
          </div>
        </el-card>
      </div>
      <div class="content-all" style="margin: 20px 0; margin-bottom:120px;">
        <el-row>
          <el-col>
            <el-card>
              <div class="content-all-title">
                  <span>预览图</span>
              </div>
              <ul>
                <li v-for="(item,index) in img" :key="index">
                  <img :src="item" class="image" >
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
import data from './data.js'
export default {
    name:'Content',
    data() {
        return {
            data,
            index:this.$route.params.aid,
            img:this.imge(),
            link:this.links(),
            code:this.codes()
        }
    },
    created() {
      
    },
    methods: {
      //if判断值,然后根据结果渲染
      imge(){
        let index = this.$route.params.aid
        if(index == 0){
          return {
              0:'http://www.palingking.com/images/1.1.jpg',
              1:'http://www.palingking.com/images/1.2.jpg',
              2:'http://www.palingking.com/images/1.3.jpg',
              3:'http://www.palingking.com/images/1.4.jpg',
          }
        }else if(index == 1){
          return {
                0:'https://www.palingking.com/images/2.1.png',
                1:'https://www.palingking.com/images/2.2.png',
                2:'https://www.palingking.com/images/2.3.png',
                3:'https://www.palingking.com/images/2.4.png',
            }
        }else if(index == 2){
          return {
                  0:'http://www.palingking.com/images/3.1.png',
                  1:'http://www.palingking.com/images/3.2.png',
                  2:'http://www.palingking.com/images/3.3.png'
          }
        }else if(index == 3){
         return {
                  0:'http://www.palingking.com/images/4.1.png',
                  1:'http://www.palingking.com/images/4.2.png',
                  2:'http://www.palingking.com/images/4.3.png'
          }
        }   
      },
      links(){
        let index = this.$route.params.aid
        if(index == 0){
          return `http://textone.palingking.com/`
        }else if(index == 1){
          return `http://texttwo.palingking.com/`
        }else if(index == 2){
          return `http://textthree.palingking.com/`
        }else if(index == 3){
         return {
          }
        }  
      },
      codes(){
        let index = this.$route.params.aid
        if(index == 0){
          return `https://github.com/palesking/onepiece/tree/master/textone`
        }else if(index == 1){
          return `https://github.com/palesking/onepiece/tree/master/texttwo`
        }else if(index == 2){
          return `https://github.com/palesking/onepiece/tree/master/textthree`
        }else if(index == 3){
         return {
          }
        }
      }
    },
}
</script>
<style lang="less">
    .content{
      width: 1400px;
      height: 100%;
      // height:800px;
      margin: auto;
      // background-color: white;
      margin-top:76px;
      padding: 20px 0;
      position: relative;
      z-index: 1; 
      overflow: hidden;
      overflow-y: scroll;
      // overflow-y:hidden;
      a{
        color:cornflowerblue;
      }
      .content-title{
        .clearfix span{
          font-size: 22px;
          font-weight: 700;
        }
        .text{
          font-size: 15px;
          line-height: 25px;
          .text-button{
            padding: 20px 0;
          }
        }
      }
      .el-divider--horizontal{
        margin: 0;
      }
      .content-all{
        .content-all-title{
          font-size: 22px;
          padding-bottom: 20px;
        }
        .image{
          padding: 5px 0;
        }
      }
    }
    .content::-webkit-scrollbar{
        display: none;
      }
</style>