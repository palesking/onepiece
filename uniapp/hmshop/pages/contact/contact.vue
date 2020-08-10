<template>
	<view class="contact">
		<image src="../../static/666.webp" mode=""></image>
		<view class="info">
			<view class="photoinfo" @click="getphoto">
				联系电话 : 15617117212 (点击拨打)
			</view>
			<view class="mapinfo">
				地址 : 上海市闵行区阳明国际花苑1期23号楼101室
			</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" scale='13'></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:121.388689,
				latitude:31.126512,
				markers:[
					{
						latitude: 31.126512,
						longitude: 121.388689,
						iconPath: '../../static/hmlogo.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			getphoto(){
				uni.makePhoneCall({
					phoneNumber:'15617117212'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		image{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			.photoinfo{
				font-size: 30rpx;
				color: #333;
				// border: 1px solid #eee;
				padding: 20rpx 0 10rpx 0;
			}
			.mapinfo{
				font-size: 30rpx;
				color: #333;
				padding: 20rpx 0 10rpx 0;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
