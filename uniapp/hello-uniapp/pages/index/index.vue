<template>
	<view class="content">
		<uni-drawer :visible="true">
		    <view style="padding:30rpx;">
		        <view class="uni-title">抽屉式导航</view>
		    </view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		components: {uniDrawer},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad(options) {
			console.log("页面加载了",options)
		},
		onShow() {
			console.log("页面显示了")
		},
		onReady() {
			console.log("页面初次渲染完成了")
		},
		onHide() {
			console.log("页面被隐藏了")
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
