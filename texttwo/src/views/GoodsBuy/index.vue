<template>
    <div class="goodsbuy">
        <NavBarpublic keyword="商品详情"></NavBarpublic>
        <div class="pic">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#f5381e">
                <van-swipe-item v-for="(item,index) in banner"
                :key="index"
                @click="handlePreview(index)"
                >
                    <img :src="item" alt="" width="100%" height="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="info">
            <p class="price-gound">
                <span>
                    <span>¥</span>
                    <span v-text="price.minGroupPrice"></span>
                </span>
                <span>已拼10万件</span>
            </p>
            <p class="title" v-text="price.goodsName"></p>
            <p class="youfei">
                香港地区配送成本较高，需额外配送费14元起(满3件免配送费)
            </p>
            <van-divider class="divider" />
            <p class="youji">
                <span>7天无理由退货 ·</span>
                <span>48小时发货 ·</span>
                <span>假一赔十</span>
                <span>></span>
            </p>
            <van-divider  class="divider"/>
        </div>
        <div class="alert">
            <van-cell is-link @click="showPopup">
                <span>7人在拼单，可直接参与</span>
                <span style="float:right; margin-left:5px;color: #ccc;">查看更多</span>
            </van-cell>
            <van-popup v-model="show" closeable style='width:300px;height:400px'>
                <p style="width:100%;height:50px;margin:auto;text-align:center;line-height:50px;font-size:18px;">正在拼单</p>
                <van-card
                desc="描述信息"
                title="商品标题"
                thumb="https://t20img.yangkeduo.com/a/e8a5b9584880e0ff6f39efee894c4def7f332995-1576500794?imageMogr2/thumbnail/100x"
                >
                <template #footer>
                    <van-button size="mini">去拼单</van-button>
                </template>
                </van-card>
            </van-popup>
        </div>
        <div class="alert">
            <van-cell is-link @click="showPopup">
                <span>商品评价(8.5万)</span>
                <span style="float:right; margin-left:5px;color: #ccc;">查看更多</span>
            </van-cell>
        </div>
        <div class="alert">
            <van-cell is-link @click="showPopup">
                <span>卖家答疑</span>
                <span style="float:right; margin-left:5px;color: #ccc;">查看更多</span>
            </van-cell>
        </div>
        <van-divider class="divider" />
        <div class="goodadd">
            <span class="text">购买数量</span>
            <p>
                <van-button type="default" @click="reduceGoods">
                    -
                </van-button>
                <van-button type="default">{{num}}</van-button>
                <van-button type="default" @click="addGoods">
                    +
                </van-button>
            </p>
        </div>
        <van-goods-action class="goodsaction">
            <van-goods-action-icon icon="home-o" text="主页" @click="onClickHome" />
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="handleTochat" />
            <van-goods-action-button
                type="warning"
                text="单独购买"
                @click="onClickButton"
                style="border-radius:0;"
            />
            <van-goods-action-button
                type="danger"
                text="加入购物车"
                @click="handleAddTochat"
                style="border-radius:0;"
            />
        </van-goods-action>
    </div>
</template>
<script>
import {mutations, mapMutations} from 'vuex'
import { ImagePreview } from 'vant';
import { Toast } from 'vant';
export default {
    name:'goodsbuy',
    data() {
        return {
            show:false,
            item:{},
            seller:{},
            detail:[],
            price:[],
            banner:[],
            num:0,
            id:0
        }
    },
    activated() {
        this.num = 0
        this.id = 0
        const itemid = this.$route.query.itemid
        this.getgoodsInfo(itemid)
    },
    methods: {
       
        getgoodsInfo(itemid){
            this.id = itemid
            this.Axios.get("https://api03.6bqb.com/pdd/detail?apikey=FF2507B4C70C9F349E66E5276753E5CA&itemid="+itemid)
            .then(res=>{
                const item = res.data.data.item
                const seller = res.data.data.seller
                //console.log(res.data.data)
                this.item = item
                this.seller = seller
                this.detail = item.detail
                this.banner = item.banner
                this.price = {
                    goodsName:item.goodsName,
                    goodsId:item.goodsId,
                    minGroupPrice:item.minGroupPrice
                }
            })
        },
        showPopup(){
            //console.log(111)
            this.show = true
        },
        onClickHome(){
            this.$router.push("/home")
        },
        onClickIcon() {
            
        },
        handleTochat() {
            this.$router.push({
                name:"cart"
            })
        },
        ...mapMutations(["AddTocart"]),
        handleAddTochat(){
            const {num,id} = this

            num && this.AddTocart({
                id,num
            })
        },
        handlePreview(index){
            ImagePreview({
                images: this.banner,
                startPosition: index,
                onClose() {}
            });
        },
        reduceGoods(){
            let num = this.num
            num = num?num-1:num
            this.num = num
        },
        addGoods(){
            let num = this.num
            num++
            this.num = num

        },
        onClickButton(){

        }
    },
    created() {
        
    }
}
</script>
<style lang="less">
    .goodsbuy{
        background-color: #f4f4f4;
        .info{
            background-color: white;
            padding: 0 20px;
            .price-gound{
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                span span:nth-child(1){
                    font-size: 32px;
                    color: #e02e24;
                }
                span span:nth-child(2){
                    font-size: 45px;
                    color: #e02e24;
                }
                span:nth-child(2){
                    font-size: 30px;
                    color:#ccc;
                }  
            }
            .title{
                padding: 5px 0;
                font-size: 30px;
                font-weight: bold;
            }
            .youfei{
                padding: 5px 0;
                font-size: 26px;
            }
            .youji{
                padding: 30px 0;
                
                font-size: 26px;
                span:last-child{
                    float: right;
                }
            }
            
        }
        .alert{
                display: flex;
                justify-content: space-between;
                background-color: white;
                margin-top:15px;
                font-size: 26px;
                padding: 0 20px;
                div{
                    padding: 0;
                    line-height: 80px;
                    i{
                        line-height: 80px;
                        margin: 0;
                        color: #ccc;
                    }
                }
                
                p:last-child{
                    color: #ccc;
                }
            }
        .divider{
            margin: 0;
        }
        .goodadd{
            background-color: white;
            padding: 0 20px 100px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                font-size: 30px;
            }
        }
    }
</style>