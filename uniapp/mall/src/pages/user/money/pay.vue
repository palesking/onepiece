<template>
	<view class="pay" v-if="!loading">
		<cu-custom bgColor="" :isBack="true" :class="'bg-' + themeColor.name">
			<block slot="content">支付</block>
		</cu-custom>
		<view class="pay-section" :class="'bg-' + themeColor.name">
			<image class="bg" :src="moneyBg"></image>
			<view class="tips-wrapper">
				<text class="title">支付金额</text>
				<view class="tip">{{ moneySymbol }}{{ money }}</view>
			</view>
		</view>
		<view class="pay-type-list">
			<view
				class="type-item"
				:class="payType === 1 ? 'type-item-active text-' + themeColor.name : ''"
				@tap="changePayType(1)"
				v-if="parseInt(payTypeList.order_wechat_pay, 10) === 1"
			>
				<i class="iconfont iconweixinzhifu" :style="{color: payType === 1 ? '#36cb59' : ''}"></i>
				<view class="con">
					<text class="tit" :class="payType === 1 ? 'text-' + themeColor.name : ''">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio size="12" value="" :color="themeColor.color" :checked="payType == 1" />
				</label>
			</view>
			<!-- #ifndef MP-WEIXIN -->
			<view
				class="type-item"
				:class="payType === 2 ? 'type-item-active text-' + themeColor.name : ''"
				@tap="changePayType(2)"
				v-if="parseInt(payTypeList.order_ali_pay, 10) === 1 && !isWechat"
			>
				<i class="iconfont iconalipay" :style="{color: payType === 2 ? '#01aaef' : ''}"></i>
				<view class="con">
					<text class="tit" :class="payType === 2 ? 'text-' + themeColor.name : ''">支付宝支付</text>
					<text>推荐使用支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" :color="themeColor.color" :checked="payType == 2" />
				</label>
			</view>
			<!-- #endif-->
			<view
				class="type-item"
				:class="payType === 5 ? 'type-item-active text-' + themeColor.name : ''"
				@tap="changePayType(5)"
				v-if="payTypeList.order_balance_pay === '1'"
			>
				<i class="iconfont iconerjiye-yucunkuan" :style="{color: payType === 5 ? '#fe8e2e' : ''}"></i>
				<view class="con">
					<text class="tit" :class="payType === 5 ? 'text-' + themeColor.name : ''">预存款支付</text>
					<text>可用余额 {{ moneySymbol }}{{  userInfo.account.user_money }}</text>
				</view>
				<label class="radio">
					<radio value="" :color="themeColor.color" :checked="payType === 5" />
				</label>
			</view>
		</view>
		<button
			class="confirm-btn"
			:class="'bg-' + themeColor.name"
			:disabled="btnLoading"
			:loading="btnLoading"
			@tap="confirm"
		>
			确认支付
		</button>
	</view>
</template>

<script src='./pay'>

</script>

<style lang="scss">
	@import './pay.scss'
</style>
