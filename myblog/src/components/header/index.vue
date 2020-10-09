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
                   title:'说说',
                   router:'/version' 
                },
                {
                   title:'电影',
                   router:'/movie' 
                },
                {
                   title:'文章',
                   router:'/community' 
                },
                {
                   title:'音乐',
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
        console.log(this.$router)
        console.log(this.$route.path)
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