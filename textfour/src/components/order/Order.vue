<template>
    <div class="order">
        <div class="orderh">
            <Header></Header>
            <Tabnav></Tabnav>
            <Content></Content>
        </div>
    </div>
</template>
<script>
import Header from './Header'
import Content from './Content'
import Tabnav from './Tabnav'
export default {
    components:{
        Header,
        Content,
        Tabnav
    }
}
</script>
<style scoped>
.order {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
.orderh {
    height: 100%;
    background-color: rgb(238, 238, 238);
}
</style>