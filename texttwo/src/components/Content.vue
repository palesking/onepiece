<template>
    <div>
        <!-- 轮播图 -->
        <Banner v-if="showBanner == 0" ></Banner>


        <!-- 分类 -->

        <Categoty :categoty="categoty"></Categoty>


        <!-- 商品列表 -->

        <GoodsList
        :keyword="goodslist"
        ></GoodsList>
        
    </div>
</template>

<script>
export default {
    name:'Content',
    props:["showBanner","categoty",'goodslist'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="less">
    
</style>