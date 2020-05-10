<template>
    <div>
        <!-- 宫格图 -->
        <div class="swiper-container" ref="swiperContainer" style="height:172px;margin-bottom:10px; margin-top:-10px;background-color:white;">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                v-for="(value,key,index) in cate"
                :key="index"
                >
                    <van-grid  id="grid" style="margin-top:-6px">
                        <van-grid-item
                        v-for="(item) in cate[key]" 
                        :key="item.optID" 
                        icon="photo-o"
                        :text="item.optName" 
                        @click="handleBuy(item.optName)"
                         />
                    </van-grid>
                </div>
            </div>
            <!-- 滚动条 -->
            <div class="swiper-scrollbar gundong" style="left:50%;top:100%;transform:translate(-50%,-50%);"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'categoty',
    data() {
        return {

        }
    },
    props:['categoty'],
    computed: {
        cate(){
            const categorys = {}
            const page1 = []
            const page2 = []
            const data = this.categoty
            const len = data.length
            data.forEach((item,index)=>{
                if(index >= len/2 ){
                    page2.push(item)
                }else{
                    page1.push(item)
                }
            })
            categorys.page1 = page1
            categorys.page2 = page2
            return categorys
        }
    },
    mounted() {
        const ele = this.$refs.swiperContainer
        var mySwiper = new Swiper(ele, {
            autoplay: true,//可选选项，自动滑动
            freeMode : true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false
            },
        })
        mySwiper.scrollbar.$dragEl.css('background','#ff6600');
        mySwiper.scrollbar.$el.css('width','100px');
        mySwiper.scrollbar.updateSize();
        //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
        mySwiper.slideNext();
    },
    methods: {
        handleBuy(keyword){
            this.$router.push({
                name:'goodslist',
                query:{
                    keyword
                }
            })
        }
    },
}
</script>
<style lang="less">
    .gundong{
        margin: auto;
    }
</style>