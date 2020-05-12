<template>
    <header>
        <div class="header-left"
        @click="toHome"
        >
            <img src="@/assets/img/return.png" alt="">
        </div>
        <div class="header-title">
            我的订单
        </div>
        <div class="header-right"
        @click="posShow"
        >
            <img src="@/assets/img/show.png">
        </div>
        <transition
        enter-active-class='bounceInDown'
        leave-active-class='bounceOutUp'
        >
            <div class="order-pos animated"
            v-show="isShow"
            >
                <div class="pos-item"
                v-for="item in posList"
                :key="item.id"
                >
                    {{ item.title }}
                </div>
            </div>
        </transition>
    </header>
</template>
<script>
export default {
    data(){
        return{
            isShow:false,
            posList:[
                {
                    id:0,
                    title:'全部'
                },
                {
                    id:1,
                    title:'机票'
                },
                {
                    id:2,
                    title:'酒店住宿'
                },
                {
                    id:3,
                    title:'汽车票-船票'
                },
                {
                    id:4,
                    title:'火车票'
                },
                {
                    id:5,
                    title:'门票'
                },
                {
                    id:6,
                    title:'专车-租车'
                },
                {
                    id:7,
                    title:'旅游度假团购'
                },
                {
                    id:8,
                    title:'签证'
                },
                {
                    id:9,
                    title:'惠玩当地'
                },
                {
                    id:10,
                    title:'保险-车险'
                },
                {
                    id:11,
                    title:'Q-商城'
                },
                {
                    id:12,
                    title:'全球购'
                },
            ]
        }
    },
    methods:{
        posShow(){
            // alert(1)
            this.isShow= !this.isShow
        },
        toHome(){
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>
<style scoped>
header {
    position: relative;
    height: 1.2rem;
    width: 100%;
    background-color: #096;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .48rem;
    color: #fff;
}
header .order-pos {
    position: absolute;
    width: 100%;
    height: 8rem;
    background-color: #096;
    top: 1.2rem;
    left: 0;
    background-color: #f7f7f7;
    padding-left: .5rem;
    padding-top: .5rem;
    z-index: 99;
}
.order-pos .pos-item {
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid #999;
    width:2.66666667rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    margin-right: .5rem;
    border-radius: .2rem;
    color: #333;
    margin-bottom: .4rem;
    font-size: .273333rem;
}
.header-left img,
.header-right img {
    width: .6rem;
    height: .6rem;
}
.header-left {
    padding-left: .5rem;
}
.header-right {
    padding-right: .5rem;
}
.header-title {
    cursor: pointer;
}
</style>