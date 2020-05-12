<template>
    <div class="scroll">
        <div class="scroll-content clearfix">
            <div class="content-left">
                <img src="@/assets/img/scrollnew.png" alt="">
                最新咨询：
            </div>
            <ul :class={animateTop:animateTop}>
                <li
                v-for="(item,index) in scrollList"
                :key='index'
                >
                    <img src="@/assets/img/scrollcircle.png">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['scrollList'],
    data(){
        return{
            animateTop:false,
            // scrollList:[
            //     {
            //         id:0,
            //         title:'9天深度游云南|家庭特惠、双人大额立减！热带雨林野象谷+雪山+敞篷车+游船'
            //     },
            //     {
            //         id:1,
            //         title:'高端典范👍大理丽江丨家庭优惠+2人立减♥宿温泉♥海鸥♥游艇♥吉普♥雪山表演'
            //     },
            //     {
            //         id:2,
            //         title:'国旅暴款🔥昆大丽版纳丨宿温泉丨洱海游艇+敞篷吉普+雪山登顶丨野象谷森林公园'
            //     },
            //     {
            //         id:3,
            //         title:'国旅暴款🔥昆大丽香格里拉8天丨宿温泉丨私人游艇+吉普游洱海+雪山登顶•石林'
            //     },
            // ],
        }
    },
    mounted(){
        setInterval(this.animateShow,3000)
    },
    methods:{
        animateShow(){
            this.animateTop=true;
            setTimeout(()=>{
                this.scrollList.push(this.scrollList[0])
                this.scrollList.shift()
                this.animateTop=false
            },300)
        }
    }
}
</script>
<style scoped>
    .animateTop {
        transition: all 500ms;
        margin-top: -.6666666rem;
    }
    .scroll {
        padding: .3rem .5rem;
        border-top: 1px solid #eee;
    }
    .scroll-content {
        height: .6666666rem;
        overflow: hidden;
    }
    .scroll-content .content-left {
        float: left;
        line-height: .6666rem;
        font-size: .37333333rem;
        color: #333;
    }
    .scroll-content .content-left img,
    .scroll-content ul img {
        width: .37333333rem;
        height: .37333333rem;
        vertical-align: -.01rem;
    }
    .scroll-content ul {
        float: right;
        width: 6.6rem;
    }
    .scroll-content ul li {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: .373333rem;
        line-height: .666666rem;
    }
</style>