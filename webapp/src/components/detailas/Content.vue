<template>
    <div class="content">
        <p>亚龙湾红树林度假套餐！</p>
        <div class="price">
            <div class="pr-left">
                <span>￥</span>238
                <i>起</i>
            </div>
            <div class="pr-right">
                <span>月售19</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content {
    background-color: #fff;
    padding: .3rem;
    margin-bottom: .3rem;
}
.content p {
    font-size: .4rem;
    color: #333;
    margin-bottom: .3rem;
    font-weight: bold;
}
.content .price {
    font-size: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pr-left {
    color: orangered;
    font-size: .6rem;
    font-weight: 800;
}
.pr-left span {
    font-size: .2rem;
    color: orangered;
}
.pr-left i {
    font-style: normal;
    font-size: .2rem;
    color: #777;
}
.pr-right span {
    font-size: .1rem;
    color: #888;
}
</style>