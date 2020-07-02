<template>
    <div class="purse">
        <div class="purse-top">
            <img src="@/assets/img/purse.png" alt="">
            <span>我的钱包</span>
        </div>
        <div class="purse-bottom">
            <div class="item">
                <span>0.00</span>
                <p>账户余额</p>
            </div>
            <div class="item">
                <span>0.00</span>
                <p>星券</p>
            </div>
            <div class="item">
                <span>0</span><i>张</i>
                <p>银行卡</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.purse {
    width: 100%;
    background-color: #fff;
    margin-bottom: .3rem;
}
.purse-top {
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid rgb(238, 238, 238);
    font-size: .4rem;
    color: #666;
    padding-left: .3rem;
}
.purse-top img {
    display: inline-block;
    width: 0.6rem;
    height: 0.53333rem;
    vertical-align: -.09rem;
    padding-right: .2rem;
}
.purse-bottom {
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.13333rem;
}
.purse-bottom .item {
    flex: 1;
    text-align: center;
    color: #666;
    font-size: .373333rem;
}
.purse-bottom .item p {
    margin-top: .2rem;
}
.purse-bottom .item span {
    font-size: .5rem;
}
.purse-bottom .item i {
    display: inline-block;
    padding-left: .1rem;
    font-style: normal;
    font-size: .1rem;
}
</style>