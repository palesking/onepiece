<template>
    <div class="detailas">
        <div class="detailash">
            <Banner></Banner>
            <Header></Header>
            <Content></Content>
            <Comment></Comment>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Banner from './Banner'
import Header from './Header'
import Content from './Content'
import Comment from './Comment'
import Footer from './Footer'
export default {
    components:{
        Banner,
        Header,
        Content,
        Comment,
        Footer
    },
    activated(){
        document.documentElement.scrollTop = 0
    }
}
</script>
<style scoped>
.detailas {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
}
.detailash {
    height: 100%;
    background-color: rgb(238, 238, 238);
}
</style>