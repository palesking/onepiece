<template>
    <div class="contents">
        <p class="content-title">热门分类</p>
        <van-grid :column-num="3" :border="false">
            <van-grid-item v-for="value in 6" :key="value"  text="文字">
                <img src="https://t16img.yangkeduo.com/phone_adx/0d898000-7f19-11ea-9e2e-0e3e75e90133.jpg" alt="">
                <van-grid-item text="文字"/>
            </van-grid-item>
            <van-grid-item v-for="value in 6" :key="value"  text="文字">
                <img src="https://t16img.yangkeduo.com/phone_adx/0d898000-7f19-11ea-9e2e-0e3e75e90133.jpg" alt="">
                <van-grid-item text="文字"/>
            </van-grid-item>
            <van-grid-item v-for="value in 6"  :key="value" text="文字">
                <img src="https://t16img.yangkeduo.com/phone_adx/0d898000-7f19-11ea-9e2e-0e3e75e90133.jpg" alt="">
                <van-grid-item text="文字"/>
            </van-grid-item>
        </van-grid>
        <div class="swiper-scrollbar gundong" style="left:50%;top:100%;transform:translate(-50%,-50%);"></div>
    </div>
</template>
<script>
export default {
    name:'contents'
}
</script>
<style lang="less">
    .contents{
        width:650px;
        .content-title{
            font-size: 34px;
        }
        img{
            width: 126px;
            height:126px;
        }
    }
</style>