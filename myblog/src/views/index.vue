<template>
    <div class="index">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="24"><headerone/></el-col>
                </el-row>
                
            </el-header>
           
            <el-container>
                <el-row>
                    <el-col :span="8">
                        <el-aside>
                            <sectiontwo></sectiontwo>
                        </el-aside>
                    </el-col>
                    <el-col :span="16">
                        <el-main>
                            <sectionone></sectionone>
                        </el-main>
                    </el-col>
                </el-row>
            </el-container>

            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import sectionone from '../components/sectionone.vue'
import sectiontwo from '../components/Sectiontwo.vue'
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
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-main {
            
            color: #333;
            text-align: center;
            line-height: 160px;
        }
        
        body > .el-container {
            margin-bottom: 40px;
        }
        
        .el-container:nth-child(5) .el-aside,
        .el-container:nth-child(6) .el-aside {
            line-height: 260px;
        }
        
        .el-container:nth-child(7) .el-aside {
            line-height: 320px;
        }
        .el-header{
            padding: 0;
        }
        .el-container{
            padding: 0 200px;
        }
    }
</style>