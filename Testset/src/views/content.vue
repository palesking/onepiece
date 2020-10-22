<template>
    <div>
        <h1>新闻{{this.$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
    },

}
</script>
<style lang="less" scoped>
    
</style>