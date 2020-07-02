<template>
    <header>
        <img src="@/assets/img/person-header.jpg" alt="">
        <div class="header-pos">
            <div class="pos-img"
            @click="toHome"
            >
                <img src="@/assets/img/return.png">
            </div>
            <div class="header-pos-bot">
                <div class="bot-left">
                    <img src="@/assets/img/person.jpg" alt="">
                </div>
                <div class="bot-right">
                    <p>Seabiscuit</p>
                    <h5>375</h5>
                    <span>信用分</span>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    methods:{
        toHome(){
            // alert(1)
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>
<style scoped>
header {
    width: 100%;
    height: 4.26666667rem;
    position: relative;
    margin-bottom: .3rem;
}
header img {
    width: 100%;
    height: 100%;
}
.header-pos {
    position: absolute;
    top:0;
    left: 0;
}
.pos-img {
    width: 0.53333rem;
    height: 0.53333rem;
    margin: .5rem 0 0 .5rem;
}
.pos-img img {
    width:100%;
    height: 100%;
}
.header-pos-bot {
    display: flex;
    margin-top: 1rem;
    margin-left: .5rem;
}
.bot-left {
    width: 1.86666rem;
    height: 1.86666rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .3rem;
}
.bot-left img {
    width: 100%;
    height: 100%;
}
.bot-right {
    color: #fff;
    font-size: .48rem;
    padding-top: .2rem
}
.bot-right  p {
    margin-bottom: .2rem;
}
.bot-right  h5 {
    font-weight: normal;
    font-size: .3733333rem;
}
.bot-right  span {
    font-size: .2rem;
}
</style>