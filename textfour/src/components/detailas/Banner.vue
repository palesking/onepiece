<template>
    <div class="banner">
        <div
        @click="showImg"
        >
            <div class="banner-img">
                <img src="@/assets/img/detailas-banner.jpg" alt="">
            </div>
            <div class="banner-title"> 亚龙湾一线海景，巴厘岛热带风情五星酒店</div>
        </div>
        <div class="img-swiper"
        v-show="imgShow"
        @click="hideImg"
        >
        <div>
            <swiper :options="swiperOption">
            <!-- slides -->
                <swiper-slide
                v-for="item in swiperList"
                :key="item.id"
                >
                    <img :src="item.imgUrl">
                </swiper-slide>
            </swiper>
        </div>
            <div class="swiper-pagination"  slot="pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            },
            imgShow:false,
            swiperList:[
                {
                    id:0,
                    imgUrl:'img/de-banner1.jpg'
                },
                {
                    id:1,
                    imgUrl:'img/de-banner2.jpg'
                },
                {
                    id:2,
                    imgUrl:'img/de-banner3.jpg'
                },
                {
                    id:3,
                    imgUrl:'img/de-banner4.jpg'
                },
                {
                    id:4,
                    imgUrl:'img/de-banner5.jpg'
                },
                {
                    id:5,
                    imgUrl:'img/de-banner6.jpg'
                },
            ]
        }
    },
    methods:{
        showImg(){
            this.imgShow=true
        },
        hideImg(){
            this.imgShow=false
        }
    }
}
</script>
<style scoped>
.banner {
    position: relative;
}
/* 防止图片掉块的css样式 */
.banner-img {
    width: 100%;
    overflow: hidden;
    height: 0;
    top: 0;
    bottom: 0;
    padding-bottom: 55%;
}
.banner-img img {
    width: 100%;
}
.banner-title {
    position: absolute;
    bottom: .5rem;
    left: .3rem;
    font-size: .4rem;
    color: #fff;
    font-weight: 600;
}
.img-swiper {
    position: fixed;
    background-color: #000;
    top: 0;
    bottom: 0;
    /* display: flex; */
    width: 100%;
    /* align-items: center; */
    padding-top: 50%;
    z-index: 9999;
}
.img-swiper img {
    width: 100%;
}
.swiper-pagination {
    color: #fff;
    font-size: .4rem;
    bottom: .6rem;
}
</style>