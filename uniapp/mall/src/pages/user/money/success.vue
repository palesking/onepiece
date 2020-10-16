<template>
	<view class="pay-success" v-if="!loading">
		<cu-custom bgColor="" :isBack="true" :class="'bg-' + themeColor.name">
			<block slot="content">支付成功</block>
		</cu-custom>
		<view class="pay-section" :class="'bg-' + themeColor.name">
			<image class="bg" :src="moneyBg"></image>
			<view class="tips-wrapper">
				<text class="iconfont iconxuanzhong2"></text>
				<view class="content">
					<text class="title">支付成功！</text>
					<view class="tip">感谢您的购买</view>
				</view>
			</view>
		</view>
		<view class="pay-card">
			<view class="pay-card-money">{{moneySymbol}}{{ orderDetail.pay_money }}</view>
			<view class="item"><text class="tit">订单编号：</text>{{ orderDetail.order_sn }}</view>
			<view class="item"><text class="tit">下单时间：</text>{{ orderDetail.pay_time | time }}</view>
			<view class="item"><text class="tit">支付方式：</text>{{ orderDetail.payment_explain }}</view>
			<view class="item"><text class="tit">物流配送：</text>{{ orderDetail.shipping_explain }}</view>
			<view class="item"><text class="tit">订单状态：</text>{{ orderDetail.order_status | orderStatusFilter }}</view>
		</view>
		<view class="btn-group">
			<button
				class="confirm-btn"
				@tap="navTo"
				:class="'bg-' + themeColor.name"
			>查看订单</button>
			<button
				class="confirm-btn"
				@tap="toHome"
			>返回首页</button>
		</view>
	</view>
</template>
<script src='./success'>

</script>
<style lang="scss">
	@import './success.scss'
</style>
