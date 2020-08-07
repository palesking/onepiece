<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item">
				<view class="iconfont icon-ziyuan"></view>
				<text>黑马超市</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<view class="goods-list">
				<view class="goods-item" v-for="item in goods" :key='item.id'>
					<image :src="item.img_url" mode=""></image>
					<view class="price">
						<text>￥{{item.sell_price}}</text>
						<text>￥{{item.market_price}}</text>
					</view>
					<view class="name">{{item.title}}</view>
				</view>
			</view>
		</view>
		<!-- 推荐商品 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[],
				goods:[]
			}
		},
		onLoad() {
			this.getlunbo()
			this.getHotGoods()  
		},
		methods: {
			//获取轮播图数据
			async getlunbo(){
				//一:普通方法
				// console.log("获取轮播图的数据")
				// uni.request({
				// 	url:"http://localhost:8082/api/getlunbo",
				// 	success: res => {
				// 		console.log(res)
				// 		if(res.data.status !==0){
				// 			return uni.showToast({
				// 				title:"获取数据失败!!!"
				// 			})
				// 		}
				// 		this.swipers = res.data.message
				// 	}
				// })
				//二:封装方法
				const res = await this.$myRequest({
					url: "/api/getlunbo"
				})
				console.log(res)
				this.swipers = res.data.message
			},
			//获取商品列表数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url:"/api/getgoods?pageindex=1"
				})
				this.goods = res.data.message
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	// @import url("../../uni.scss")
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display: flex;
			.nav-item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					line-height: 120rpx;
					margin: 10px auto;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot-goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.title{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
			.goods-list{
				padding: 0 15rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.goods-item{
					background: #fff;
					width: 355rpx;
					margin: 10rpx 0;
					padding: 15rpx;
					box-sizing: border-box;
					image{
						display: block;
						width: 100%;
						height: 150px;
						margin: 0 auto;
						padding: 10px 0;
					}
					.price{
						color: $shop-color;
						font-size: 36rpx;
						padding: 5px 0;
						text:nth-child(2){
							color: #ccc;
							font-size: 28rpx;
							margin-left: 15rpx;
							text-decoration: line-through;
						}
					}
					.name{
						font-size: 28rpx;
						line-height: 50rpx;
						
						
					}
				}
			}
		}
	}
	
</style>
