<template>
    <div class="home">
        <testone></testone>
        <testtwo></testtwo>
        <testthree></testthree>
    </div>
</template>
<script>
import testone from '@/components/testone.vue'
import testtwo from '@/components/testtwo.vue'
import testthree from '@/components/testthree.vue'
export default {
    name:'home',
    components:{
        testone,
        testtwo,
        testthree
    }
}
</script>
<style lang="less" scopde>
    
</style>