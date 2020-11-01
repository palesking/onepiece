<template>
    <div class="index">
        <el-container class="index-content">
            <el-header class="index-header navbar-expand-lg">
                <headerone></headerone>
            </el-header>
            <el-main class="index-main">
                <div class="main-content">
                    <router-view></router-view>
                    <contentone v-show="$route.path === '/home'"></contentone>
                </div>
            </el-main>
            <el-footer id="footer">
                <footerone></footerone>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import sectionone from '@/components/sectionone.vue'
import sectiontwo from '@/components/sectiontwo.vue'
import footerone from '@/views/footer/footerone.vue'
import headerone from '@/components/header/index.vue'
import contentone from '@/components/contentone/index.vue'
import music from '@/components/music.vue'

export default {
    name: 'index',
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: { 
        
    },
    mounted() {
        layui.use('element', function(){
            var element = layui.element;
            element.init()
        });
        console.log(this.$router)
        console.log(this.$route)
    },
    components: {
        headerone,
        sectionone,
        sectiontwo,
        footerone,
        contentone,
        music
    }
}
</script>

<style lang="less" scoped>
// @media (min-width: 1200px) {
//     .container{
//         max-width: 1140px;
//     }
// }
// @media (min-width: 1200px){
//     .container, .container-sm, .container-md, .container-lg, .container-xl {
//         max-width: 1140px;
//     }
// }
.logoone{
    color: #009688;
}
.logotwo{
    color: #5fb878;
}
.logothree{
    color: #393d49;
}
.logofour{
    color: #1e9fff;
}
// @media (min-width: 992px){
//     .navbar-expand-lg {
//         -ms-flex-flow: row nowrap;
//         flex-flow: row nowrap;
//         -ms-flex-pack: start;
//         justify-content: flex-start;
//         .container, .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {
//             -ms-flex-wrap: nowrap;
//             flex-wrap: nowrap;
//         }
//     }
// }

// @media (min-width: 992px){
//     .container, .container-sm, .container-md, .container-lg {
//         max-width: 960px;
//     }
// }

// @media (min-width: 768px){
//     .container, .container-sm, .container-md {
//         max-width: 720px;
//     }
// }


    @media (min-width: 1200px){
        .container {
            max-width: 1140px;
        }
    }

// @media (min-width: 992px){
//     .container {
//         max-width: 960px;
//     }
// }

// @media (min-width: 768px){
//     .container {
//         max-width: 720px;
//     }
// }

// @media (min-width: 768px){
//     .col-md-4 {
//         -ms-flex: 0 0 33.333333%;
//         flex: 0 0 33.333333%;
//         max-width: 33.333333%;
//     }
// }
// @media (min-width: 576px){
//     .container {
//         max-width: 540px;
//     }
// }
// @media (min-width: 576px){
//     .container, .container-sm {
//         max-width: 540px;
//     }
// }
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.col-md-4{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.row{
    // display: -ms-flexbox;
    display: flex;
    // -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    align-items: stretch;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    a{
        text-decoration: none;
        color: #ff6700;
    }
}
.showimg{
    img{
        width: 210px;
        height: 160px;
    }
}
.bgc{
    background: rgba(255,255,255,0.5);
}
.align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
}
.justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
}
.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}
.text-muted {
    color: #6c757d !important;
}
.small, .small {
    font-size: 80%;
    font-weight: 400;
}
.el-main {
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: initial;
}
.showtitle {
    font-size: 12px;
    height: 10px;
    line-height: 10px;
}
.btn-group, .btn-group-vertical {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
}
.main-left,.main-right{
    padding: 0 15px;
}
#footer{
    width: 100%;
    background: rgba(74, 168, 206, 0.65);
    margin-top: 35px;
    clear: both;
}
.main-left{
    .mainlist{
        margin-top: 8px;
        .list-unstyled{
            padding-left: 0;
            list-style: none;
            .listone:hover{
                border: 1px solid #ff6700;
            }
            .listone{
                width: 100%;
                padding: 25px;
                border: 1px solid rgba(0,0,0,0);
                box-sizing: border-box;
                margin-bottom: 25px;
                overflow: hidden;
                position: relative;
                background: rgba(255,255,255,0.5);
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
                .art-img{
                    width: 25%;
                    height: 105px;
                    float: left;
                    overflow: hidden;
                }
                .art-content{
                    width: 71%;
                    float: right;
                    position: relative;
                    /* padding-left: 20px; */
                    margin-left: 10px;
                    h5{
                        background: none;
                        font-size: 18px;
                        text-indent: 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        padding-bottom: 5px;
                        cursor: pointer;
                        font-weight: bolder;
                    }
                    p{
                        font-size: 13px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: 54px;
                        color: #515151;
                    }
                    ul{
                        width: 100%;
                        overflow: hidden;
                        position: absolute;
                        margin-top: 5px;
                        li:first-child{
                            padding: 0;
                        }
                        li{
                            float: left;
                            overflow: hidden;
                            padding: 0 5px;
                            font-size: 12px;
                            color: #888;
                            max-width: 150px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            a{
                                text-decoration: none;
                                color: #999999;
                                i{
                                    font-size: 16px;
                                    color: #ff6700;
                                }
                            }
                        }
                        li:last-child{
                            float: right;
                        }
                    }
                }
            }
        }
    }
    .codeone{
        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }
    }
}
.main-right{
    .right-content{
        .right-author{
            display: flex;
            position: relative;
            .auth-img{
                img{
                    display: block;
                    margin: auto;
                    // position: absolute;
                    // top: -30px;
                    // left: 41%;
                    border-radius: 100%;
                    border: 5px solid #fff;
                    width: 60px;
                    height: 60px;
                    justify-content: center;
                    margin-top: 10px;
                    transition: all 0.8s;
                    -webkit-transition: all 0.8s;
                }
            }
            .auth-name{
                margin-top: 10px;
                text-align: center;
                margin-bottom: 20px;
                span{
                   color: #0181da;
                }
                p{
                    font-size: 12px;
                }
            }
            .auth-info{
                li{
                    float: left;
                    width: 33%;
                    margin-bottom: 15px;
                    border-right: 1px solid #ccc;
                    strong{
                        display: block;
                        text-align: center;
                        font-weight: bolder;
                        line-height: 18px;
                    }
                    span{
                        display: block;
                        text-align: center;
                        font-size: 12px;
                        color: #555;
                    }
                }
                li:last-child {
                    border-right: none;
                }
            }
        }
        .one{
            margin-top: 24px;
            
            .col-md-12{
                padding: 0 15px;
                .notice li {
                    line-height: 30px;
                    margin-bottom: 12px;
                    padding: 4px 12px 4px 30px;
                    background: #f6f6f6;
                    border-radius: 4px;
                    a{
                        font-size: 14px;
                        text-decoration: none;
                        color: #515151;
                    }
                }
            }
            
        }
        .two{
            .search{
                width: 100%;
                height: 35px;
                position: relative;
                .search-input{
                    width: 80%;
                    height: 35px;
                    border: 1px solid #ddd;
                    margin: 0;
                    float: left;
                    padding-left: 10px;
                }
                .search-submit{
                    width: 20%;
                    height: 35px;
                    line-height: 35px;
                    // float: right;
                    border: 1px solid #ccc;
                    /* margin-left: -4.9px; */
                    /* margin-top: -1px; */
                    padding: 0;
                    background: rgba(255,255,255,0.8);
                }
                i{
                    font-size: 16px;
                    float: right;
                    position: absolute;
                    right: 6%;
                    top: 8px;
                    color: #ff6700;
                    margin-right: 5px;
                }
            }
        }
        .three{
            .col-md-12{
                padding: 0 15px;
                ul{
                    li{
                        width: 100%;
                        padding: 10px 0;
                        border-bottom: 1px dashed #ccc;
                        overflow: hidden;
                        position: relative;
                    }
                }
            }
        }
        .four{

        }
        .five{
            ::v-deep.el-tabs__nav{
                width: 100%;
                .el-tabs__item{
                    float: left;
                    display: block;
                    width: 50%;
                    text-align: center;
                    height: 48px;
                    line-height: 48px;
                }
                .is-active{
                    background: #ff6700;
                    color: #ffffff !important;
                }
                .el-tabs__active-bar{
                    width: auto !important;
                }
            }
            
            .five-title{
                width: 50%;
            }
        }
    }
}
.new{
    background: rgba(255,255,255,0.5);
    // margin-top: 8px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    span{
        font-size: 16px;
        margin-left: 5px;
    }
    small{
        display: inline-block;
        line-height: 40px;
        margin-left: 5px;
        color: #bcbcbc;
    }
    span:nth-child(1){
        margin-left: 5px;
        i{
            font-size: 20px;
            color: #ff6700;
            margin-right: 5px;
        }
    }
    span:nth-child(2){
        color: #0181da;
    }
    span:nth-child(3){
        // font-size: 12px;
        font-size: 80%;
        font-weight: 400;
        color: #bcbcbc;
    }
}
.new-right{
    width: 100%;
    height: 40px;
    background: rgba(255,255,255,0.5);
    margin-top: 0;
}
    // .el-col {
    //     border-radius: 4px;
    // }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .index{
        position: relative;
        .index-content{
            background-color: #e9eaed;
            .index-header{
                background: rgba(255,255,255,0.85);
                padding: 8px 16px;
                height: auto !important;
                align-items: center;
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
            }
            .index-main{
                background-color: #e9eaed;
                width: 1140px;
                margin: auto;
                margin-top: 16px;
            }
            @media screen and (max-width: 576px) {
                .index-main{
                    max-width: 480px;
                    display: flex;
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
    ::v-deep.layui-nav-bar{
        width: 40px;
    }
    ::v-deep.el-footer{
        height: auto !important;
    }
    ::v-deep.el-footer {
        padding: 0 0px;
        box-sizing: border-box;
        flex-shrink: 0;
    }
    .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
    }
    .artimg-list>li {
        width: 100%;
        /* margin: auto; */
        padding: 25px;
        border: 1px solid rgba(0,0,0,0);
        box-sizing: border-box;
        margin-bottom: 25px;
        overflow: hidden;
        position: relative;
        /* background: rgba(255,255,255,0.5); */
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }
    .artimg-img {
        width: 45%;
        height: 85px;
        float: left;
        overflow: hidden;
    }
    .artimg-img img {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
    }
    .art-content {
        width: 71%;
        float: right;
        position: relative;
        /* padding-left: 20px; */
        margin-left: 10px;
    }
    .artimg-list h5 {
        font-weight: bolder;
        font-size: 14px !important;
    }
    .art-content h5 {
        background: none;
        font-size: 18px;
        text-indent: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-bottom: 5px;
        cursor: pointer;
        font-weight: bolder;
    }
    .artimg-list>li p {
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 54px;
        color: #515151;
    }
    .art-content>ul {
        width: 100%;
        overflow: hidden;
        position: absolute;
    }
    .art-content>ul>li {
        float: left;
        overflow: hidden;
        padding: 0 5px;
        font-size: 12px;
        color: #888;
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .art-content>ul>li:last-child {
        float: right;
    }
    .art-content>ul>li {
        float: left;
        overflow: hidden;
        padding: 0 5px;
        font-size: 12px;
        color: #888;
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    // @media (min-width: 992px){
    //     .d-lg-block {
    //         display: block !important;
    //     }
    // }

    // @media (min-width: 768px){
    //     .d-md-none {
    //         display: none !important;
    //     }
    // }
    
    // @media (min-width: 576px){
    //     .d-sm-none {
    //         display: none !important;
    //     }
    // }
    
</style>