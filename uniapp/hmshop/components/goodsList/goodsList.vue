<template>
	<!-- 推荐商品 -->
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
</template>

<script>
	export default {
		props:['goods'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
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
</style>
