<template>
    <footer>
        <a href="javascript:;">
            <img src="@/assets/img/footer3.png" alt="">
            <p>首页</p>
        </a>
        <a href="javascript:;"
        @click="toOrder"
        >
            <img src="@/assets/img/footer1.png" alt="">
            <p>订单</p>
        </a>
        <a href="javascript:;"
        @click="toPersonal"
        >
            <img src="@/assets/img/footer2.png" alt="">
            <p>个人中心</p>
        </a>
    </footer>
</template>
<script>
export default {
    methods:{
        toOrder(){
            this.$router.push({
                path:'/order'
            })
        },
        toPersonal(){
            this.$router.push({
                path:'./personal'
            })
        }
    }
}
</script>
<style scoped>
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    z-index: 999999;
    border-top: 1px solid #eee;
}
footer a {
    text-decoration: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
footer a img {
    width: .74666666rem;
    height: .74666666rem;
}
footer a p {
    margin-top: .1rem;
    color: #bfbfbf;
    text-align: center;
    font-size: .373333rem;
}
</style>