<template>
  <div class="hot">
        <div class="hot-header">
            <div class="header-left">
                当季热门度假
            </div>
            <div class="header-right">
                更多热门<i class="iconfont">&#xe71a;</i>
            </div>
        </div>
        <ul class="hot-list">
            <li
            @click="toDetailas"
            v-for='(item,index) in hotList'
            :key='index'
            >
                <div class="list-img">
                    <img :src="item.imgUrl">
                    <div class="img-pos">
                        <p>{{ item.pOne }}</p>
                        <p>{{ item.pTwo }}</p>
                    </div>
                </div>
                <div class="list-content">
                    <h4>{{ item.h4Title }}</h4>
                    <h3>
                        ￥{{ item.price }}
                    </h3>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotList'],
    methods:{
        toDetailas(){
            this.$router.push({
                path:'/detailas'
            })
        }
    },
    data(){
        return{
            // hotList:[
            //     {
            //         id:0,
            //         imgUrl:'img/hot1.jpg',
            //         pOne:'兰州-三亚',
            //         pTwo:'6天自由行',
            //         h4Title:'含往返飞机票(含税)+5晚住宿',
            //         price:5280,
            //     },
            //     {
            //         id:1,
            //         imgUrl:'img/hot2.jpg',
            //         pOne:'兰州-成都',
            //         pTwo:'6天跟团游',
            //         h4Title:'含往返飞机票(含税)+5晚住宿',
            //         price:1987,
            //     },
            //     {
            //         id:2,
            //         imgUrl:'img/hot3.jpg',
            //         pOne:'兰州-西安',
            //         pTwo:'4天跟团游',
            //         h4Title:'含往返火车票+3晚住宿',
            //         price:1650,
            //     },
            //     {
            //         id:3,
            //         imgUrl:'img/hot4.jpg',
            //         pOne:'兰州-丽江',
            //         pTwo:'5天自由行',
            //         h4Title:'含往返飞机票+4晚住宿',
            //         price:2380,
            //     },
            //     {
            //         id:4,
            //         imgUrl:'img/hot5.jpg',
            //         pOne:'兰州-重庆',
            //         pTwo:'3天自由行',
            //         h4Title:'含往返飞机票+2晚住宿',
            //         price:1392,
            //     },
            //     {
            //         id:5,
            //         imgUrl:'img/hot6.jpg',
            //         pOne:'兰州-甘南',
            //         pTwo:'4天跟团游',
            //         h4Title:'含全程大巴+3晚住宿',
            //         price:1959,
            //     },
            //     {
            //         id:6,
            //         imgUrl:'img/hot7.jpg',
            //         pOne:'兰州-九寨沟',
            //         pTwo:'5天跟团游',
            //         h4Title:'含全程大巴+4晚住宿',
            //         price:4351,
            //     },
            //     {
            //         id:7,
            //         imgUrl:'img/hot8.jpg',
            //         pOne:'兰州-张家界',
            //         pTwo:'6天跟团游',
            //         h4Title:'含往返飞机票+5晚住宿',
            //         price:2138,
            //     },
            // ]
        }
    }
}
</script>
<style scoped>
.hot {
    width: 100%;
    padding: .3rem .3rem 0 .3rem;
    border-bottom: 1px solid #eee;
}
.hot .hot-header {
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.hot-header .header-left {
    background-color: #096;
    font-size: .373333rem;
    line-height: .8rem;
    color: #fff;
    border-radius: .2rem;
    padding: 0 .4rem;
}
.hot-header .header-right {
    font-size: .37333rem;
    color: #333;
}
.hot-header .header-right i {
    margin-left: .2rem;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-color: #096;
    border-radius: 50%;
    color: #fff;
    font-size: .1rem;
    text-align: center;
    line-height: .4rem;
}
.hot-list {
    width: 100%;
    margin-top: .2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.hot-list li {
    width: 4.64rem;
    margin-bottom: .3rem;
}
.hot-list .list-img {
    position: relative;
    width: 100%;
    height: 2.66666667rem;
    border-radius: .3rem;
    background-color: #096;
    overflow: hidden;
}
.list-img .img-pos {
    box-sizing: border-box;
    padding: .1rem .4rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -39%;
    width: 78%;
    height: 54%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: .26rem;
    color: #fff;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
}
.list-img .img-pos p:nth-child(1) {
    font-size: .42rem;
    text-align: center;
    line-height: .8rem;
    font-weight: 600;
}
.list-img .img-pos p:nth-child(2) {
    font-size: .26rem;
    text-align: center;
    font-weight: 400;
    color: orange;
    line-height: .4rem;
}
.hot-list .list-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.list-content {
    width: 100%;
    padding: .1rem;
}
.list-content h4 {
    font-size: .37333333rem;
    font-weight: 400;
    color: #111;
    line-height: .6rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.list-content h3 {
    color: #096;
    font-size: .5rem;
}
</style>