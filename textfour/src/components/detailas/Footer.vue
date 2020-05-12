<template>
    <footer>
        <div class="collect">
            <img src="@/assets/img/collect.png" alt="">
            <p>收藏</p>
        </div>
        <div class="seek">
            <img src="@/assets/img/seek.png" alt="">
            <p>咨询</p>
        </div>
        <div class="reseve">
            立即预定
        </div>
    </footer>
</template>
<style scoped>
footer {
    width: 100%;
    height: 1.6rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 .3rem;
    border-top: 1px solid #eee;
}
.collect,.seek {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-right: .2rem;
}
.collect p,.seek p {
    font-size: .26rem;
    color: #707070;
    margin-top: .1rem;
}
.collect img,.seek img {
    width: .6rem;
    height: .6rem;
}
.reseve {
    width: 6rem;
    text-align: center;
    line-height: 1.2rem;
    background-color:#096;
    border-radius: .4rem;
    color: #fff;
    font-size: .48rem;
    letter-spacing: .1rem;
}
</style>