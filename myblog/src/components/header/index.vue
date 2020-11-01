<template>
    <div class="header-content container">
        <a href="/" class="logo testone" >
            <span>Paling</span>
            <span>King</span>
        </a>
        <!-- <el-button type="info" icon="el-icon-s-tools" @click="showlist"></el-button> -->
        <!-- <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item 
                         
                        v-for="(item,index) in list" 
                        index="index"
                        :key="index"
                    >
                        <router-link :to='item.router'>{{item.title}}</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu> -->
        <div class="content-title">
            <ul class="ulone layui-nav" lay-filter="">
                <li 
                    class="lione layui-nav-item" 
                    v-for="(item,index) in list" 
                    :key="index"
                    :class="item.router === router ? 'layui-this' : '' "
                >
                    <router-link :to='item.router'>{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {
                   title:'首页',
                   router:'/home' 
                },
                {
                   title:'快乐前端',
                   router:'/community' 
                },
                {
                   title:'精彩文章',
                   router:'/version' 
                },
                {
                   title:'精彩视频',
                   router:'/movie' 
                },
                // {
                //    title:'文章',
                //    router:'/community' 
                // },
                {
                   title:'好听音乐',
                   router:'/music' 
                },
                {
                   title:'关于',
                   router:'/about' 
                }
            ],
            router:this.$route.path,
            screenWidth: document.body.clientWidth
        }
    },
    mounted() {
        // layui.use('element', function(){
        //     var element = layui.element;
        //     element.init()
        // });
        const that = this
        window.onresize = () =>{
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        }
        
    },
    methods: {
        showlist(){
            let a = document.querySelector(".content-title")
            // let b = document.querySelector(".lione")
            // a.style.display = "block"
            a.classList = 'layui-nav-tree'
            a.style.height = "100%"
            // b.className = "layui-nav-child"
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    watch: {
        // screenWidth:{
        //     immediate:true,
        //     handler:function (newval) {
        //         console.log(newval)
        //         // console.log(this)
        //         if( newval <= "576"){
        //             this.showlist()
        //         }
                
        //     }
        // }
    },
}
</script>
<style lang="less" scoped>
    @import url("../../assets/css/index.less");
    .header-content{
        display: flex;
        padding-right: 15px;
        padding-left: 15px;
        .logo{
            display: inline-block;
            padding: 5px 0;
            margin-right: 16px;
            span{
                font-size: 24px;
                color: tomato;
            }
            img{
                height: 45px;
                vertical-align: middle;
            }
        }
        
        button{
            position: absolute;
            right: 0;
            margin-right: 20px;
            padding: 10px 15px;
            ::v-deep.el-icon-s-tools{
                font-size: 20px;
            }
        }
        @media screen and (min-width: 576px) {
            button{
                display: none;
            }
        }
        .content-title{
            display: flex;
            flex-basis: auto;
            justify-content: flex-end;
            flex-grow: 1;
            align-items: center;
            box-sizing: border-box;
            height: 50px;
            
            .gitlogo{
                width: 50px;
                height: 100%;
            }
            ul{
                display: flex;
                // flex-flow: row;
                flex-direction: row;
                padding-left: 0;
                margin-bottom: 0;
                
                li{
                    box-sizing: border-box;
                    a{
                        text-align: center;
                        font-size: 16px;
                        display: block;
                        width: 102px;
                        line-height: 50px;
                        color: #ff6700 !important;
                        padding: 8px 16px;
                    }
                }
            }
        }
        @media screen and (max-width: 576px){
            .content-title{
                display: none;
                // display: flex !important;
                // -ms-flex-preferred-size: auto;
                // flex-basis: auto;
                // align-items: initial;
                // height: 100%;
                // // margin-top: 50px;
                // ul{
                //     flex-direction: column;
                // }

            }   
        }
    }
    .layui-nav {
        position: relative;
        padding: 0px;
        background-color: transparent;
        color: #fff;
        border-radius: 2px;
        font-size: 0;
        box-sizing: border-box;
    } 
</style>