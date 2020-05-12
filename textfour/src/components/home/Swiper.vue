<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img src="@/assets/img/swiper1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/swiper4.jpg" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swiperOption:{
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        }
    }
}
</script>
<style scoped>
.swiper {
    width: 100%;
}
.swiper img {
    width: 100%;
    height: 3.13rem;
}
.swiper-pagination >>>.swiper-pagination-bullet-active {
    background-color: orange;
}
</style>