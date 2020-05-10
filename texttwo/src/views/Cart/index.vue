<template>
    <div class="cart">
        <NavBarpublic keyword="购物车"></NavBarpublic>
        <h1>购物车</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Cart',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['getGoodsData'])
    },
    created() {
        console.log(this.getGoodsData)
    },

}
</script>


<style lang="less">
    .cart{
        background-color:#666;
        padding-top: 90px;
    }
</style>