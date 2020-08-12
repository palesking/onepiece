<template>
    <div class="header">
        <div class="header-return"
        @click="retoHome"
        v-show="mainShow"
        >
            <img src="@/assets/img/return.png" alt="">
        </div>
        <div class="header-main"
        v-show="!mainShow"
        :style="opacityShow"
        >
            <div class="main-img"
            @click="matoHome"
            >
                <img src="@/assets/img/return.png" alt="">
            </div>
            鸿泰假日
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mainShow:true,
            opacityShow:{
                opacity:0
            },
        }
    },
    methods:{
        matoHome(){
            this.$router.push({
                path:'/'
            })
        },
        retoHome(){
            this.$router.push({
                path:'/'
            })
        },
    },
    mounted(){
        let that = this
        window.addEventListener('scroll',function(){
            let top = document.documentElement.scrollTop
            let opacity = top/200
            opacity = opacity > 1 ? 1:opacity;
            that.opacityShow = {opacity}
            if(top>46){
                that.mainShow = false
                console.log(that.mainShow)
            }else{
                that.mainShow = true
            }
        })
    }
}
</script>
<style scoped>
.header-return {
    position: absolute;
    top: .4rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.589);
    overflow: hidden;
}
.header-return img {
    position: relative;
    width: 60%;
    height: 60%;
    top: .09rem;
    left: .16rem;
}
.header-main {
    position: fixed;
    left: 0;
    top: 0;
    height: 1.2rem;
    line-height: 1.2rem;
    width: 100%;
    background-color: #096;
    text-align: center;
    color: #fff;
    font-size: .48rem;
}
.main-img {
    position: absolute;
    top: .16rem;
    left: .4rem;
    width: .6rem;
    height: .6rem;
}
.main-img  img{
    width: .6rem;
    height: .6rem;
}
</style>