<template>
    <div class="index">
        <el-container>
            <el-header class="header">
                <el-row class="header-content">
                    <el-col :span="24"><headerone/></el-col>
                </el-row>
            </el-header>
           
            <el-container class="main">
                <el-main>
                    <el-row>
                        <el-col :span="16">
                            <sectionone></sectionone>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import sectionone from '@/components/sectionone.vue'
import sectiontwo from '@/components/sectiontwo.vue'
import headerone from '@/components/headerone.vue'

export default {
    name: 'index',
        components: {
            headerone,
            sectionone,
            sectiontwo
        }
    }
</script>

<style lang="less" scoped>
    .index{
        width: 100%;
        height: 100%;
        background-color: #D3DCE6;
        .home-content{
            // position: relative;
            // top: 0;
            // left: 0;
            // right: 0;
            // bottom: 0;
            // margin: auto;
            // display: flex;
            // justify-content: center;
            // justify-content: space-between;
            // width: 1400px;
            // height: 100%;
            // margin: auto;
            // margin-top: 75px;
            // margin-bottom: 50px;
        }
        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
    }

        .el-aside {
            // background-color: #D3DCE6;
            color: #333;
            text-align: center;
        }

        .el-main {
            
            color: #333;
            text-align: center;
        }
        
        body > .el-container {
            margin-bottom: 40px;
        }
        
        .el-container:nth-child(5) .el-aside,
        .el-container:nth-child(6) .el-aside {
            // line-height: 260px;
        }
        
        .el-container:nth-child(7) .el-aside {
            // line-height: 320px;
        }
        .el-header{
            padding: 0;
        }
        .el-container{
            // padding: 10px 200px;
        }
        .el-header{
        }
        .el-main{
            padding: 0;
        }
        .header,.main,.footer{
            width: 1280px !important;
            margin: auto;
        }
        .header{
            height: 260px !important;
            background-image: url('../assets/images/headerbg.webp');
            .header-content{
                margin-top: 200px;
            }
        }
    }
</style>