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
<style lang="less">
    @import url("./assets/css/common.css");

    #app{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-color: black;
        #canvas{
            position:fixed;
            width:100%;
            height:100%;
            top:0;
        }
    }
</style>