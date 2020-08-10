<template>
	<view class="news">
		<view class="news-items">
			<image src="../../static/666.webp" mode=""></image>
			<view class="right">
				<view class="title">
					一季度多家房企利润跌幅超50% 去库存促销战打响
				</view>
				<view class="info">
					<text>发表时间:</text>
					<text>浏览:</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.news{
		.news-items{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right{
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title{
					font-size: 30rpx;
				}
				.info{
					font-size: 28rpx;
				}
			}
		}
	}

</style>
