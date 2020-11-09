<template>
    <div class="icons">
        <ul class="clearfix">
            <li
            v-for ='(item,index) in iconsList'
            :key = 'index'
            >
                <img :src="item.imgUrl">
                <p>{{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['iconsList'],
}
</script>
<style scoped>
    .icons {
        width: 100%;
        padding-top: .4rem;
    }
    .icons ul {
        border-bottom: 1px solid #eee;
    }
    .icons ul li {
        width: 20%;
        float: left;
        margin-bottom: .5rem;
    }
    .icons ul li img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: .773333rem;
        height: .773333rem;
    }
    .icons ul li p {
        color: #333;
        font-size: .32rem;
        text-align: center;
        margin-top: .2rem;
    }
</style>