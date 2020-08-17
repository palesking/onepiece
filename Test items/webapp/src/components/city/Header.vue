<template>
    <header>
        城市列表
        <i class="iconfont"
        @click="toHome"
        >&#xe630;</i>
    </header>
</template>
<script>
export default {
    methods:{
        toHome(){
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>>
<style scoped>
header {
    width: 100%;
    height: 1.2rem;
    background-color: #096;
    text-align: center;
    line-height: 1.2rem;
    color: #fff;
    font-size: .48rem;
    position: relative;
}
header i {
    position: absolute;
    right: .3rem;
}
</style>