<template>
	<view class="about" v-if="!loading">
		<view
			class="list-cell b-b"
			v-for="item in navList"
			:key="item.title"
			@tap="
				navTo(`/pages/set/about/detail?field=${item.url}&title=${item.title}`)
			"
			hover-class="cell-hover"
			:hover-stay-time="50"
		>
			<text class="cell-tit">{{ item.title }}</text>
			<text class="cell-tip">{{ item.content }}</text>
			<text class="cell-more iconfont iconyou"></text>
		</view>
		<view class="history-section icon">
			<view class="sec-header">
				<i class="iconfont iconshare"></i>
				<text>分享商城二维码给好友</text>
			</view>
			<view class="qrcode-wrapper">
				<view class="qrcode-img-wrapper">
					<rf-qrcode class="qrcode" cid="qrcode2229" makeOnLoad :text="hostUrl" v-if="merchantId === '0'"></rf-qrcode>
					<rf-image class="qrcode-img" :src="aboutInfo.qrcode || ''" v-else></rf-image>
				</view>
				<text class="info">商城二维码</text>
			</view>
		</view>
	</view>
</template>
<script src='./about'>

</script>
<style lang="scss">
	@import './about.scss'
</style>
