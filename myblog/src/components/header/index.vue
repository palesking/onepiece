<template>
    <div class="header-content container">
        <a href="/" class="logo testone" >
            <span>Paling</span>
            <span>King</span>
        </a>
        <div class="content-title">
            <ul class="layui-nav" lay-filter="">
                <li 
                    class="layui-nav-item" 
                    v-for="(item,index) in list" 
                    :key="index"
                    :class="item.router === router ? 'layui-this' : '' "
                >
                    <router-link :to='item.router'>{{item.title}}</router-link>
                </li>
            </ul>
            <!-- <svg viewBox="0 0 250 250" aria-hidden="true" class="gitlogo">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
            </svg> -->
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
                   router:'/index' 
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
            router:this.$route.path
        }
    },
    mounted() {
        layui.use('element', function(){
            var element = layui.element;
            element.init()
        });
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