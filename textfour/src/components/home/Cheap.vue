<template>
    <div class="cheap">
        <div class="cheap-header">
            <div class="header-left">
                今日特惠
            </div>
            <div class="header-right">
                更多特惠<i class="iconfont">&#xe71a;</i>
            </div>
        </div>
        <ul class="cheap-list">
            <li
            v-for ='(item,index) in cheapList'
            :key ='index'
            @click="toDetailas"
            >
                <div class="list-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="list-content">
                    <h4>{{ item.h4Title }}</h4>
                    <p>{{ item.pTitle }}</p>
                    <h3>
                        ￥{{ item.price }}
                        <span>起</span>
                    </h3>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['cheapList'],
    methods:{
        toDetailas(){
            this.$router.push({
                path:'/detailas'
            })
        }
    }
    // data(){
    //     return{
    //         cheapList:[
    //             {
    //                 id:0,
    //                 imgUrl:'img/cheap1.gif',
    //                 h4Title:'白银-大理 9天跟团游',
    //                 pTitle:'9天深度游云南|家庭特惠、双人大额立减！热带雨林野象谷+雪山+敞篷车+游船',
    //                 price:2480,
    //             },
    //             {
    //                 id:1,
    //                 imgUrl:'img/cheap2.jpg',
    //                 h4Title:'白银-大理 6天跟团游',
    //                 pTitle:'高端典范👍大理丽江丨家庭优惠+2人立减♥宿温泉♥海鸥♥游艇♥吉普♥雪山表演',
    //                 price:1850,
    //             },
    //             {
    //                 id:2,
    //                 imgUrl:'img/cheap3.jpg',
    //                 h4Title:'白银-大理 8天跟团游',
    //                 pTitle:'国旅暴款🔥昆大丽香格里拉8天丨宿温泉丨私人游艇+吉普游洱海+雪山登顶•石林',
    //                 price:2410,
    //             },
    //             {
    //                 id:3,
    //                 imgUrl:'img/cheap4.jpeg',
    //                 h4Title:'白银-大理 9天跟团游',
    //                 pTitle:'9天深度游云南|家庭特惠、双人大额立减！热带雨林野象谷+雪山+敞篷车+游船',
    //                 price:2690,
    //             },
    //         ]
    //     }
    // }
}
</script>
<style scoped>
.cheap {
    width: 100%;
    padding: .3rem .3rem 0 .3rem;
    border-bottom: 1px solid #eee;
}
.cheap .cheap-header {
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cheap-header .header-left {
    background-color: #096;
    font-size: .373333rem;
    line-height: .8rem;
    color: #fff;
    border-radius: .2rem;
    padding: 0 .4rem;
}
.cheap-header .header-right {
    font-size: .37333rem;
    color: #333;
}
.cheap-header .header-right i {
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
.cheap-list {
    width: 100%;
    margin-top: .2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.cheap-list li {
    width: 4.64rem;
}
.cheap-list .list-img {
    width: 100%;
    height: 2.66666667rem;
    border-radius: .3rem;
    background-color: #096;
    overflow: hidden;
}
.cheap-list .list-img img {
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
}
.list-content p {
    width: 100%;
    font-size: .26rem;
    color: #555;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: .4rem;
}
.list-content h3 {
    color: #096;
    font-size: .5rem;
}
.list-content h3 span {
    line-height: .9rem;
    font-size: .26rem;
    color: rgb(32, 133, 99);
}
</style>