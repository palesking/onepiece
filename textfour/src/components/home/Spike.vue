<!--https://www.3mooc.com/front/articleinfo/88   秒杀插件-->
<template>
    <div class="spike"
    >
            <swiper :options="swiperOption">
            <!-- slides -->
                <swiper-slide
                v-for='(item,index) in spikeList'
                :key='index'
                
                >
                    <div class="spike-content"
                    @click="toDetailas"
                    >
                        <div class="content-top">
                        <img src="@/assets/img/spiketime.png" alt="">
                        <span>距离截止时间：</span>
                        <count-down
                            v-on:start_callback="countDownS_cb(1)"
                            v-on:end_callback="countDownE_cb(1)"
                            :currentTime="item.startTime"
                            :startTime="item.startTime"
                            :endTime="item.endTime"
                            :dayTxt="'天'"
                            :hourTxt="'小时'"
                            :minutesTxt="'分钟'"
                            :secondsTxt="'秒'">
                        </count-down>
                    </div>
                    <div class="content-bottom">
                        <img :src="item.imgUrl">
                        <div class="bottom-right">
                            <p>
                               {{ item.title }} 
                            </p>
                            <div class="bottom-price">
                                <span>{{ item.price }}￥</span>
                                <p>已购{{ item.num }}张</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </swiper-slide>
            <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
    </div>
</template>
<script>
import CountDown from 'vue2-countdown'
export default {
    props:['spikeList'],
    components:{
        CountDown
    },
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        }
    },
    methods: {
            countDownS_cb: function (x) {
        },
            countDownE_cb: function (x) {
        },
        toDetailas(){
            this.$router.push({
                path:'/detailas'
            })
            // alert(1)
        }
    },
    mounted(){
        //当前时间：1583497089348
        //截止时间：1583499725101
        // console.log(new Date().getTime(),new Date().getTime()+30*24*3600)
    }
}
</script>
<style scoped>
.spike {
    width: 100%;
    height: 4.6rem;
    border-bottom: 1px solid #eee;
}
.spike-content {
    padding: .3rem;
}
.content-top {
    width: 100%;
    height: 1rem;
    font-size: .32rem;
    color: #333;
    line-height: 1rem;
    display: flex;
    align-items: center;
}
.content-top img {
    width: 3rem;
    height: .8rem;
    display: inline-block;
    padding-right: .2rem;
}
.content-top >>> p{
    letter-spacing: .04rem;
}
.content-bottom {
    width: 100%;
    justify-content: space-between;
    display: flex;
}
.content-bottom img {
    width: 4.266666rem;
    height: 2.13333rem;
}
.bottom-right {
    width: 4.6rem;
}
.bottom-right>p {
    width: 100%;
    height: 1rem;
    font-size: .32rem;
    line-height: .5rem;
    color: #333;
    overflow: hidden;
    justify-content: space-between;
    overflow: hidden;
    text-overflow:ellipsis;
}
.bottom-price {
    margin-top: .8rem;
    font-size: .32rem;
    display: flex;
    justify-content: space-between;
    color: #333;
}
.bottom-price p {
    line-height: 20px;
    background-color: orange;
    color: #000;
    padding: .06rem .1rem;
    margin-top: -.3rem;
    text-align: center;
    border-radius: .2rem;
}
.bottom-price span {
    color: orange;
    font-size: .37333333rem;
}
/* 样式穿透 */
.swiper-pagination >>> .swiper-pagination-bullet-active {
    background-color:orange;
}
.swiper-container {
    overflow: visible;
}
.swiper-container >>>.swiper-pagination {
    bottom: -.37333333rem;
}
</style>
<style>
.home {
    overflow: hidden;
}
</style>