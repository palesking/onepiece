<template>
    <div class="comment">
        <div class="itemlist"
        v-for="item in commentList"
        :key="item.id"
        >
            <div class='list-top'>
                <div class="top-left">
                    <div class="person-img">
                        <img :src="item.pimgUrl">
                    </div>
                    <span class="name">{{ item.name }}</span>
                    <span class="img">
                        <img :src="item.ximgUrl">
                    </span>
                </div>
                <div class="top-right">
                    <span>{{ item.date }}</span>
                </div>
            </div>
            <div class='list-bottom'>
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            commentList:[
                {
                    id:0,
                    pimgUrl:'img/person1.jpg',
                    ximgUrl:'img/xing5.png',
                    name:'夜*锋',
                    date:'2018-09-13',
                    title:'珍惜今天的美好就是为了让明天的回忆更美好。幸福不是每天都有，错过了就要等很久。贵在坚持，难在坚持，成在坚持。'
                },
                {
                    id:1,
                    pimgUrl:'img/person2.jpg',
                    ximgUrl:'img/xing2.png',
                    name:'刘*杰',
                    date:'2018-06-14',
                    title:'人生坎坎坷坷，跌跌撞撞那是在所难免。但是，不论跌了多少次，你都要坚强地再次站起来。任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!'
                },
                {
                    id:2,
                    pimgUrl:'img/person3.jpg',
                    ximgUrl:'img/xing5.png',
                    name:'薛*婷',
                    date:'2019-12-30',
                    title:'不肯下一点功夫，永远不会明白自己从何而来，又将立足于何处。'
                },
                {
                    id:3,
                    pimgUrl:'img/person4.jpg',
                    ximgUrl:'img/xing4.png',
                    name:'杨*燕',
                    date:'2012-11-02',
                    title:'每天看你发说说，我都好羡慕。你长得又好看，还用智能手机，又有钱，朋友也多，整天讨论一些好像很厉害的东西。'
                },
                {
                    id:4,
                    pimgUrl:'img/person5.jpg',
                    ximgUrl:'img/xing5.png',
                    name:'贾*名',
                    date:'2020-03-02',
                    title:'不要把时间、财力和劳动，浪费在空洞多余的话语上。永远以用心乐观的心态去拓展自我和身外的世界。'
                },
                {
                    id:5,
                    pimgUrl:'img/person6.jpg',
                    ximgUrl:'img/xing2.png',
                    name:'李*',
                    date:'2020-3-18',
                    title:'人的一生，有许多事情，是需要放在心里慢慢回味的，过去的就莫要追悔，一切向前看吧 任何打击都不足以成为你堕落的借口，即使你改变不了这个世界，你却依然可以改变自己，选择条正确的路永远走下去。'
                },
            ]
        }
    }
}
</script>
<style scoped>
.comment {
    margin-bottom: 1.6rem;
}
.comment .itemlist{
    background-color: #fff;
    padding: .3rem;
    border-bottom: 1px solid #eee;
}
.list-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.list-top .top-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.top-left .person-img {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .2rem;
} 
.person-img img {
    width: 100%;
    height: 100%;
}
.top-left .name {
    font-size: .26rem;
    color: #666;
}
.top-left .img {
    height: .26rem;
    margin-left: .3rem;
}
.top-left .img img {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    height: .26rem;
}
.top-right {
    font-size: .26rem;
    color: #666;
}
.list-bottom {
    margin-top: .3rem;
    color: #666;
    font-size: .373333rem;
    line-height: .5rem;
}
</style>