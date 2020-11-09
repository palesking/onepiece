<template>
    <div class="content">
        <div class="co-po">
            <img src="@/assets/img/no-order.png" alt="">
            <p>没有查询到相关订单</p>
        </div>
    </div>
</template>
<style scoped>
.content {
    background-color: rgb(172, 172, 172);
    position: relative;
}
.co-po {
    width: 5rem;
    position:absolute;
    top: 4rem;
    left: 50%;
    margin-left: -2.5rem;
    text-align: center;
    font-size: .373333rem;
    z-index: 2;
}
.co-po img {
    width: 5rem;
    height: 2.0266666rem;
    margin-bottom: .2rem;
}
</style>