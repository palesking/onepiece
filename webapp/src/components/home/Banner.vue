<template>
    <div class="banner">
        <transition
        enter-active-class='bounceInLeft'
        leave-active-class='fadeOutLeft'
        >
            <div class="banner-slide animated" v-show="toshow">
                <div class="slide-logn">
                    注册/登陆
                </div>
                <div class="slide-search">
                    <i class="iconfont">&#xe69d;</i>
                    <input type="text" placeholder="泰国">
                </div>
                <ul>
                    <li>首页</li>
                    <li>游戏攻略</li>
                    <li>视频</li>
                    <li>游计</li>
                    <li>目的地</li>
                    <li>圈子</li>
                    <li>集市</li>
                    <li>民宿营地</li>
                    <li>APP</li>
                </ul>
            </div>
        </transition>
        <div class="banner-header">
            <!-- 文字区域区域 -->
            <div class="banner-top">
                <div class="top-left"
                @click="Cityto"
                >
                    {{ cityName }}
                    <i class="iconfont">&#xe607;</i>
                </div>
                <div class="top-search">
                    <i class="iconfont">&#xe69d;</i>
                    想去哪儿？
                </div>
                <div class="top-right">
                    <img src="@/assets/img/show.png"
                    @click='toShow'
                    >
                </div>
            </div>
            <!-- swiper区域 -->
            <div class="banner-swiper">
                <swiper :options="swiperOption">
                <!-- slides -->
                    <swiper-slide>
                        <img src="@/assets/img/banner1.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/banner2.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/banner3.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/banner4.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/banner5.jpg" alt="">
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
//引入mapState
import {mapState} from 'vuex'
export default {
    data(){
        return{
            toshow:false,
            swiperOption:{
                autoplay:true,
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        }
    },
    methods:{
        toShow(){
            this.toshow = !this.toshow
        },
        Cityto(){
            this.$router.push({
                path:'./city'
            })
        }
    },
    computed:{
        ...mapState(['cityName'])
    }
}
</script>
<style scoped>/* 样式模块化 */
.banner-header {
    position: relative;
    width: 100%;
    height: 5rem;
}
.banner-top {
    position: absolute;
    z-index: 2;
    top: .4rem;
}
.banner-swiper {
    width: 100%;
    height: 5rem;
}
.banner-swiper img {
    width: 100%;
    height: 5rem;
}
/* 样式穿透 */
.swiper-pagination >>> .swiper-pagination-bullet-active {
    background-color:rgb(0, 172, 37);
}
.banner-top {
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top-left {
    color: #fff;
    font-size: .426rem;
    padding: .3rem .3rem;
    font-weight: bold;
}
.top-search {
    flex: 1;
    color: rgb(0, 172, 37);
    background-color: #fff;
    border-radius: .2rem;
    font-size: .426rem;
    padding: .3rem .3rem;
}
.top-right {
    color: #fff;
    padding: .3rem .3rem;
}
.top-right img {
    width: .6rem;
    height: .6rem;
}
.banner-slide {
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 6.666666rem;
    background-color: #333;
    z-index: 9999;
}
.slide-logn {
    width: 100%;
    text-align: right;
    padding-right: .7rem;
    color: #fff;
    font-size: .426666rem;
    margin-top: .9rem;
    margin-bottom: .5rem;
}
.slide-search {
    margin-top: 1rem;
    height: .9rem;
    line-height: .9rem;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding-left: .2rem;
    background-color: #111;
    color: #fff;
    border-radius: .2rem;
}
.slide-search input {
    display: inline-block;
    border: none;
    width: 80%;
    padding-left: .1rem;
    background-color: #111;
    vertical-align: middle;
}
.slide-search i {
    color: rgb(170, 170, 170);
    vertical-align: .03rem;
}
.banner-slide ul {
    padding-top: .3rem;
    padding-left: .6rem;
    width: 90%;
}
.banner-slide ul li{
    padding-top: .2rem;
    line-height: 1.2rem;
    font-size: .48rem;
    color: rgb(214, 214, 214);
    border-bottom: 1px solid #111;
}
</style>