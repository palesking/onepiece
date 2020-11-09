<template>
    <div class="tabs">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide
            v-for='(item,index) in tabsList'
            :key='index'
            >
                <div>
                    <img :src="item.imgUrl" alt="">
                    <p>{{ item.title }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['tabsList'],
    data(){
        return{
            // tabsList:[
            //     {
            //         id:0,
            //         imgUrl:'img/tabs1.png',
            //         title:'酒店'
            //     },
            //     {
            //         id:1,
            //         imgUrl:'img/tabs2.png',
            //         title:'机票'
            //     },
            //     {
            //         id:2,
            //         imgUrl:'img/tabs3.png',
            //         title:'火车票'
            //     },
            //     {
            //         id:3,
            //         imgUrl:'img/tabs4.png',
            //         title:'度假'
            //     },
            //     {
            //         id:4,
            //         imgUrl:'img/tabs5.png',
            //         title:'景点门票'
            //     },
            //     {
            //         id:5,
            //         imgUrl:'img/tabs2.png',
            //         title:'自驾'
            //     },
            //     {
            //         id:6,
            //         imgUrl:'img/tabs3.png',
            //         title:'民宿'
            //     },
            //     {
            //         id:7,
            //         imgUrl:'img/tabs1.png',
            //         title:'低价门票'
            //     },
            // ],
            swiperOption:{
                slidesPerView : 4.5,
            }
        }
    }
}
</script>
<style scoped>
    .tabs{
        padding: .3rem 0;
    }
    .tabs img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 1.28rem;
        height: 1.28rem;
    }
    .tabs p {
        margin-top: .2rem;
        color: #333;
        font-size: .32rem;
        text-align: center;
    }
</style>