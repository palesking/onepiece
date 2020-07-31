<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name:'App'
    }
</script>
<style lang="less" scoped>
    @import url("./assets/css/common.css");
    
    #app{
        width: 100%;
        height: 100%;
        // background-image: url('./assets/images/bl1.png');
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        
    }
</style>