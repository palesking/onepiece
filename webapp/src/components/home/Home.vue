
<template>
    <div class="home">
        <Banner></Banner>
        <Icons :iconsList='iconsList'></Icons>
        <Tabs :tabsList='tabsList'></Tabs>
        <Scroll :scrollList='scrollList'></Scroll>
        <Swiper></Swiper>
        <Spike :spikeList='spikeList'></Spike>
        <Cheap :cheapList='cheapList'></Cheap>
        <Hot :hotList='hotList'></Hot>
        <Copyright></Copyright>
        <Footer></Footer>
    </div>
</template>
<script>
    import Banner from './Banner'
    import Icons from './Icons'
    import Tabs from './Tabs'
    import Scroll from './Scroll'
    import Swiper from './Swiper'
    import Spike from './Spike'
    import Cheap from './Cheap'
    import Hot from './Hot'
    import Copyright from './Copyright'
    import Footer from './Footer'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                spikeList:[],
                cheapList:[],
                iconsList:[],
                hotList:[],
                tabsList:[],
                scrollList:[],
                changeCity:''
            }
        },
        components:{
            Banner,
            Icons,
            Tabs,
            Scroll,
            Swiper,
            Spike,
            Cheap,
            Hot,
            Copyright,
            Footer,
        },
        methods:{
            http(){
                let that = this
                this.axios.get('api/datahome.json').then((res)=>{
                    let data = res.data.data
                    data.forEach((item,index)=>{
                        if(item.city == that.cityName){
                            console.log(1)
                            that.spikeList = item.spikeList
                            that.cheapList = item.cheapList
                            that.iconsList = item.iconsList
                            that.hotList = item.hotList
                            that.tabsList = item.tabsList
                            that.scrollList = item.scrollList
                        }else{
                            that.spikeList = res.data.data[0].spikeList
                            that.cheapList = res.data.data[0].cheapList
                            that.iconsList = res.data.data[0].iconsList
                            that.hotList = res.data.data[0].hotList
                            that.tabsList = res.data.data[0].tabsList
                            that.scrollList = res.data.data[0].scrollList
                        }
                    })
                    // that.spikeList = res.data.data[0].spikeList
                    // that.cheapList = res.data.data[0].cheapList
                    // that.iconsList = res.data.data[0].iconsList
                    // that.hotList = res.data.data[0].hotList
                    // that.tabsList = res.data.data[0].tabsList
                    // that.scrollList = res.data.data[0].scrollList
                    // console.log(that.cityName)
                })
            }
        },
        computed:{
            ...mapState(['cityName'])
        },
        mounted(){
            this.changeCity = this.cityName
            this.http()
            console.log(this.cityName)
        },
        //keepalive生命周期
        activated(){
            //如果后面的城市名称和之前的名称不一样，则请求http（）
            // console.log(this.changeCity,this.cityName)
            if(this.changeCity != this.cityName){
                this.http()
                this.changeCity = this.cityName
            }
        }

    }
</script>