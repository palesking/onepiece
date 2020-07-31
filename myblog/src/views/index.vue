<template>
    <div class="index">
        <el-container class="index-content">
            <el-header class="index-header"><p>Header</p></el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
        <!-- <Layout>
            <Header class="index-header">
                <headerone></headerone>
            </Header>
            <Layout class="index-mian">
                <Sider>
                    <sectionone></sectionone>
                </Sider>
                <Content>
                    <div class="content-box">
                        <router-view></router-view>
                        <contentone v-if=" $route.path ==='/basic/sider' "></contentone>
                    </div>
                </Content>
            </Layout>
            <Footer class="index-footer">
                Copyright © 2020 gemframework.com
                <a href="">all rights reserved.</a>
                <span>Version 1.0.5</span>
            </Footer>
        </Layout> -->

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
        .index-content{
            .index-header{
                background: rgba(255,255,255,0.85);
                padding: 1rem;
                p{
                    font-size: 20px;
                }
            }
        }
        // .ivu-layout-header{
        //     position: fixed;
        //     padding: 0;
        //     height: 60px;
        //     line-height: 60px;
        //     // z-index: 1000;
        //     width: 100%;
        //     // overflow: hidden;
        //     background: transparent;
        // }
        // .ivu-layout-sider{
        //     transition: all 0.3s linear;
        //     min-width: 235px !important;
        // }
        // .ivu-layout-content{
        //     position: initial;
        //     transition: all 0.3s linear;
        //     // overflow-x: visible !important;
        // }
        // .index-header{
        //     position: fixed;
        //     // margin: auto;
        //     width: 100%;
        // }
        // .index-mian{
        //     position: fixed;
        //     top: 65px;
        //     // top: 50%;
        //     left: 50%;
        //     transform: translate(-50%);
        //     width: 1100px;
        //     height: 100%;
        //     margin: auto;
        // }
        // .index-footer{
        //     position: fixed;
        //     width:~'calc(100% - 235px)';
        //     bottom: 0;
        //     left: 235px;
        //     height: 44px;
        //     padding: 0 15px;
        //     background: #fff;
        //     transition: all .3s linear;
        //     overflow: hidden;
        //     line-height: 44px;
        //     font-size: 14px;
        //     color: #666;
        //     box-sizing: border-box;
        //     border-top: 1px solid #f5f7f9;
           
        //     span{
        //         float: right;
        //     }
        // }
        // .content-box{
        //     height: 1000px;
        //      margin-bottom: 100px;
        // }
        // .ivu-layout-content::-webkit-scrollbar {
        //     /*滚动条整体样式*/
        //     width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
        //     height: 1px;
        // }
        // .ivu-layout-content::-webkit-scrollbar-thumb {
        //     /*滚动条里面小方块*/
        //     border-radius   : 10px;
        //     background-color: skyblue;
        //     background-image: -webkit-linear-gradient(
        //         45deg,
        //         rgba(255, 255, 255, 0.2) 25%,
        //         transparent 25%,
        //         transparent 50%,
        //         rgba(255, 255, 255, 0.2) 50%,
        //         rgba(255, 255, 255, 0.2) 75%,
        //         transparent 75%,
        //         transparent
        //     );
        // }
        // .ivu-layout-content::-webkit-scrollbar-track {
        //     /*滚动条里面轨道*/
        //     box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        //     background   : #ededed;
        //     border-radius: 10px;
        // }
        // .el-header, .el-footer {
        //     background-color: #B3C0D1;
        //     color: #333;
        //     text-align: center;
        //     line-height: 60px;
        // }

        // .header-content{
        // }
        // .el-aside {
        //     color: #333;
        //     text-align: center;
        // }

        // .el-main {
            
        //     color: #333;
        //     text-align: center;
        // }
        
        // body > .el-container {
        //     margin-bottom: 40px;
        // }
        
        // .el-container:nth-child(5) .el-aside,
        // .el-container:nth-child(6) .el-aside {
        //     // line-height: 260px;
        // }
        
        // .el-container:nth-child(7) .el-aside {
        //     // line-height: 320px;
        // }
        // .el-header{
        //     padding: 0;
        // }
        // .el-container{
        //     // padding: 10px 200px;
        // }
        // .el-header{
        // }
        // .el-main{
        //     padding: 0;
        // }
        // .header,.main,.footer{
        //     width: 1280px !important;
        //     margin: auto;
        //     // position: fixed;
        //     // z-index: -1;
        // }
        // .header{
        //     margin-top: 120px;
        //     .header-content{
        //         // margin-top: 200px;
        //     }
        // }
        // .main{
        // }
    }
</style>