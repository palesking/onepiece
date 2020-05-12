<template>
    <div class="personal">
        <div class="v-h">
            <Header></Header>
            <Purse></Purse>
            <Purselist></Purselist>
        </div>
    </div>
</template>
<script>
import Header from './Header'
import Purse from './Purse'
import Purselist from './Purselist'
export default {
    components:{
        Header,
        Purse,
        Purselist
    }
}
</script>
<style scoped>
/* 设置满屏高度 */
/*在开发小程序过程中，如果要设置盒子高度为全屏的话，设置hegiht：100%，属性不起作用，需要在设置的元素外边先定义*/
.personal {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
}
.v-h {
    height: 100%;
    background-color: rgb(238, 238, 238);
}
</style>