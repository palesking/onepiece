<template>
    <div class="sectiontwo">
        <el-card class="box-card boxshadow">
            <div class="box-header">
                <img src='http://www.palingking.com/images/logo.jpg' alt="" width="100%" height="100%" style="">
            </div>
            <div class="wx">
                <el-tooltip content="微信" placement="bottom">
                    <a href="http://wx.palingking.com/" target="_blank">
                        <el-button class="el-icon-chat-dot-round"></el-button>
                    </a>
                </el-tooltip>
                <el-tooltip content="github" placement="bottom">
                    <a href="https://github.com/palesking" target="_blank">
                        <el-button class="el-icon-chat-line-round"></el-button>
                    </a>
                </el-tooltip>
                <el-tooltip content="简历" placement="bottom">
                    <a href="http://resume.palingking.com/" target="_blank">
                        <el-button class="el-icon-notebook-2"></el-button>
                    </a>
                </el-tooltip>
            </div> 
        </el-card>
        <music></music>
    </div>
</template>
<script>
//import music from "../components/Music.vue"
const music = () => import("../components/Music.vue")
export default {
    name:'sectiontwo',
    data() {
        return {
           
        }
    },
    components:{
        music
    }
}
</script>
<style lang="less" scoped>
    .sectiontwo{
        position: relative;
        width:310px;
        height:800px;
        margin-top: 10px;
        margin-left:40px;
        margin-right: 190px;
        .box-card{
            // margin: auto;
            .wx{
                // width: 50px;
                padding:0 10px;
                // width: 50px;
                // height: 50px;
                //display:flex;justify-content:space-around;
                //flex-wrap:wrap;
                //padding-left:35px ;
                .el-icon-chat-dot-round,.el-icon-chat-line-round,.el-icon-notebook-2{
                    font-size: 24px;
                    width: 50px;
                    height: 50px;
                    // color: coral;
                    border-radius: 50%;
                    padding: 0;
                    margin: 0;
                    margin:8px 16px;
                }
            }
            .box-header{
                padding:10px;
                width: 250px;
                height: 250px;
            }
        }
        .boxshadow{
            &:hover{
                box-shadow: 0 0 15px skyblue !important;
            } 
        }
    }
</style>