<template>
    <div class="notFount">
        <div class="pic"><img width="100%" height="100%" src="https://www-cdn-res.shiguangkey.com/static/img/404.60320ab.png" alt=""></div>
        <div class="buttons">
            <button @click="handleBack">返回上一级</button>
            <button @click="handleIndex">返回首页</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            handleBack(){
                this.$router.go(-1)
            },
            handleIndex(){
                this.$router.replace('/')
            }
        }
    }
</script>

<style scoped lang="less">
    .notFount{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        .pic{
            width: 420px;
            height: 420px;
        }
        .buttons{
            width: 420px;
            display: flex;
            justify-content: space-around;
            button{
                color: #3073f4;
                line-height: 50px;
                padding: 0 25px;
                background: transparent;
                border: 1px solid #3073f4;
                border-radius: 13px;
                font-size: 24px;
            }
        }
    }
</style>