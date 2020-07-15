<template>
    <div class="sectiontwo">
        <el-card class="box-card boxshadow">
            <div class="box-header">
            </div>
            <div class="wx">
                <a href="http://wx.palingking.com/" target="_blank">微信</a>
                <a href="https://github.com/palesking" target="_blank">GitHub</a>
                <a href="http://resume.palingking.com/" target="_blank">简历</a>
            </div> 
        </el-card>
        <music></music>
    </div>
</template>
<script>

const music = () => import("@/components/music.vue")
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
        width: 100%;
        padding-top: 30px;
        .box-card{
            .wx{
                padding: 15px;
                a{ 
                    display: inline-block;
                    color: black;
                    font-weight: bold;
                    margin-left: 10px;
                }
                a:hover{
                    color: blue;
                }
                a:active{
                    color: blue;
                }
            }
            .box-header{
               
                width: 50px;
                height: 50px;
                margin: auto;
                background: url('http://www.palingking.com/images/logo.jpg') ;
                background-size: cover;
                margin-top: 20px;
            }
        }
        ::v-deep.el-card__body{
            height: 100px;
            // display: flex;
            padding: 0;
        }
    }
</style>