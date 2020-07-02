<template>
    <div class="Chat">
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar' 
export default {
    name:"Chat",
     components:{
        Tabbar
    },
}
</script>

<style>
    .Chat{
        height:100vh;
        background-color: pink;
    }
</style>