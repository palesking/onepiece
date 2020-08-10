<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navdatas" :key='index' @click="navClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<goodsList :goods='goods'></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goodsList/goodsList.vue'
	export default {
		data() {
			return {
				swipers:[],
				goods:[],
				navdatas:[
					{
						icon:"iconfont icon-ziyuan",
						title:"黑马超市",
						path:"/pages/goods/goods"
					},
					{
						icon:"iconfont icon-guanyuwomen",
						title:"联系我们",
						path:"/pages/contact/contact"
					},
					{
						icon:"iconfont icon-tupian",
						title:"社区图片",
						path:"/pages/pics/pics"
					},
					{
						icon:"iconfont icon-shipin",
						title:"学习视频",
						path:"/pages/goods/goods"
					}
				]
			}
		},
		onLoad() {
			this.getlunbo()
			this.getHotGoods()  
		},
		components:{
			goodsList
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
			},
			//导航点击跳转函数
			navClick(url){
				uni.navigateTo({
					url
				})
				console.log(url)
			}
		}
	}
</script>

<style lang="scss">
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
			
		}
	}
	
</style>
