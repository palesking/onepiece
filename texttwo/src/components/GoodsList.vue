<template>
    <div class="goodslist">
        <NavBarpublic 
            v-if="showNavBar"
        ></NavBarpublic>
        <ul v-if="list.length">
            <li
            v-for="(item) in list"
            :key="item.goods_id"
            @click="gogoodsInfo(item.goods_id)"
            >
            <div class="paygoods">
                <div><img v-lazy='item.hd_thumb_url' alt="" width="100%" height="100%"></div>
                <p class="title">{{item.goods_name}}</p>
                <p class="youjian">
                    <span>退货包邮费</span>
                    <span style="padding-left:10px;">急速退款</span>
                </p>
                <div class="info">
                    <p class="paygoods-one">
                        <span class="symbol">￥</span>
                        <span class="price">{{item.price}}</span>
                        <span class="pinjian">{{item.sales_tip}}</span>
                    </p>
                </div>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'GoodsList',
    data() {
        return {
            list:[]
        }
    },
    props:['keyword'],
    computed: {
        showNavBar(){
            const path = this.$route.path.includes("home")
            if(path){
                return false
            }
            return true
        }
    },
    methods: {
        getList(keyword,page){
            this.Axios.get("https://api03.6bqb.com/pdd/search?apikey=FF2507B4C70C9F349E66E5276753E5CA&keyword="+keyword+"&page=1&sort=default")
            .then((res)=>{
                //console.log(res)
                this.list = res.data.data
            }) 
        },
        gogoodsInfo(itemid){
            this.$router.push({
                name:"goodsbuy",
                query:{
                    itemid
                }
            })
        },
        
    },
    created() {
        const keyword = this.$route.query.keyword || this.keyword || "女装"
        this.getList(keyword,2)  
    },
}
</script>

<style lang="less">
.goodslist{
    background-color: #f4f4f4;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width:372px;
            height:540px;
            margin-bottom: 4px;
            .paygoods{
                background-color: white;
                padding-bottom: 18px;
                .title{
                    width:370px;
                    height:40px;
                    font-size: 28px;
                    overflow: hidden;
                    padding: 0 20px;
                }
                .info{
                    padding: 0 20px;
                    .paygoods-one{
                        .symbol{
                            font-size: 24px;
                            font-weight: bold;
                            color: orangered;
                        }
                        .price{
                            font-size: 38px;
                            color: orangered;
                            font-weight: bold;
                        }
                        .pinjian{
                            padding-left: 10px;
                            font-size: 26px;
                            color:#58595b;

                        }
                    }
                } 
                .youjian{
                    font-size: 24px;
                    color: orangered;
                    padding: 0 20px;
                } 
            }
        }
    }
}
</style>