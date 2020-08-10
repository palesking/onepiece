<template>
    <!-- 轮播图 -->
    <div id="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#f5381e">
            <van-swipe-item v-for="(item,index) in banner"
            :key="index"
            @click="handlePreview(index)"
            >
                <img :src="item" alt="" width="100%" height="100%">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name:'banner',
    props:["showBanner","categoty"],
    data() {
        return {
            banner:[
                'https://t00img.yangkeduo.com/goods/2020-02-26/84e0bae0b6461594409c6eb80e447a44.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp',
                'https://t00img.yangkeduo.com/goods/2019-11-20/0c7cbcf6a07241f8ac9feea5002a498e.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp',
                'https://t16img.yangkeduo.com/img_check/2019-12-07/a48f6ac9dcdf07732d58a5d4fb85facd.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp',
                'https://t16img.yangkeduo.com/phone_adx/d7e0284e2a9af414dddbca03df2b3ccd.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp'
            ],
        }
    },
    methods: {
        handlePreview(index){
            ImagePreview({
                images: this.banner,
                startPosition: index,
                onClose() {}
            });
        },
        // handleBuy(){
        //     this.$router.push({
        //         name:'goodsbuy'
        //     })
        // }
    },
}
</script>

<style lang="less">
.hot{
    #banner{
        height: 280px;
        overflow: hidden;
    }
}
</style>