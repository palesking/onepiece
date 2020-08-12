<template>
    <div class="purselist">
        <div class="item"
        v-for="item in purseLists"
        :key="item.id"
        >
            <img :src="item.imgUrl" alt="">
            <div class="item-right">
                <span>{{ item.title }}</span>
                <i class="iconfont">&#xe71a;</i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            purseLists:[
                {
                    id:0,
                    imgUrl:'img/purse1.png',
                    title:'我的订单'
                },
                {
                    id:1,
                    imgUrl:'img/purse2.png',
                    title:'我的退款'
                },
                {
                    id:2,
                    imgUrl:'img/purse3.png',
                    title:'我的发票'
                },
                {
                    id:3,
                    imgUrl:'img/purse4.png',
                    title:'我的攻略'
                }
            ]
        }
    }
}
</script>
<style scoped>
.purselist {
    width:100%;
    background-color: #fff;
    padding: 0 .3rem;
}
.purselist .item {
    box-sizing: border-box;
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(238, 238, 238);
}
.purselist .item>img {
    display: inline-block;
    width: .8rem;
    height: .6rem;
    vertical-align: -.09rem;
    padding-right: .2rem;
}
.item-right {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item-right span {
    font-size: .4rem;
    color: #666;
}
.item-right i {
    color: #888;
}
</style>