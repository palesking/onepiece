<template>
	<view class="recharge">
		<view class="block">
			<view class="title">
				我的账户
			</view>
			<view class="content">
				<view class="my">
					我的账户余额：
					<text class="balance" :class="'text-' + themeColor.name">
                        {{
                            (userInfo.account && userInfo.account.user_money) || '0'
                        }}
                    </text>
					元
				</view>
			</view>
		</view>
		<view class="block">
			<view class="title">
				充值金额
			</view>
			<view class="content">
				<view class="amount">
					<view class="list">
						<view
							class="box"
							v-for="(amount, index) in amountList"
							:key="index"
							@tap="select(amount)"
							:class="amount.price == inputAmount ? 'bg-' + themeColor.name : 'on'"
						>
							<view class="real">{{ amount.price }}元</view>
							<text class="give">赠送 {{ amount.give_price }}元</text>
						</view>
					</view>
					<view class="num">
						<view class="text">
							自定义充值金额
						</view>
						<view class="input">
							<input
								type="number"
								:class="'text-' + themeColor.name"
								@input="handleInputAmountChange"
								v-model="inputAmount"
							/>
						</view>
						<text class="give" :class="'text-' + themeColor.name" v-if="inputAmountGive > 0">
                            赠送 {{ inputAmountGive }}元
                        </text>
					</view>
				</view>
			</view>
		</view>
		<view class="block">
			<view class="title">
				选择支付方式
			</view>
			<view class="content">
				<view class="pay-list">
					<!-- #ifndef MP-WEIXIN -->
					<view class="row" @tap="payType = '2'" v-if="parseInt(payTypeList.order_ali_pay, 10) === 1 && !isWechat">
						<text class="icon iconfont iconalipay"></text>
						<view class="center">
							支付宝支付
						</view>
						<view class="right">
							<radio :checked="payType == '2'" :color="themeColor.color" />
						</view>
					</view>
					<!--#endif-->
					<view class="row" @tap="payType = '1'" v-if="parseInt(payTypeList.order_wechat_pay, 10) === 1">
						<i class="icon iconfont iconweixinzhifu"></i>
						<view class="center">
							微信支付
						</view>
						<view class="right">
							<radio :checked="payType == '1'" :color="themeColor.color" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="pay">
			<view class="btn" :class="'bg-' + themeColor.name" @tap="pay">立即充值</view>
			<view class="tis">
				点击立即充值，即代表您同意
				<view class="terms" @tap="toTipDetail">
					《充值协议》
				</view>
			</view>
		</view>
		<!--加载动画-->
		<rfLoading isFullScreen :active="pageLoading"></rfLoading>
	</view>
</template>

<script src='./recharge'>

</script>

<style lang="scss">
	@import './recharge.scss'
</style>
