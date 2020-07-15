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
                        <el-col :span="14">
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
        background-image: url('../assets/images/bl1.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
    }

        .el-aside {
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
            margin-top: 200px;
           
            .header-content{
                // margin-top: 200px;
            }
        }
    }
</style>