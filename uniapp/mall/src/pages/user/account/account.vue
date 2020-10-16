<template>
	<view class="my-account">
		<!--账户信息面板-->
		<view class="header" :class="'bg-' + themeColor.name">
			<view class="account">
				<view class="assets">
					<view>总资产(元)</view>
					<view class="money">
						{{ (userInfo && userInfo.account && userInfo.account.user_money) ||'0.00' }}
					</view>
				</view>
				<text 
                    v-if="isOpenRecharge" 
                    @tap="navTo('/pages/user/account/recharge')" 
                    class="recharge" 
                    :class="'text-' + themeColor.name"
				>充值</text>
			</view>
			<view class="cumulative">
				<view class="item">
					<view>累计充值(元)</view>
					<view class="money">
						{{ (userInfo && userInfo.account && userInfo.account.accumulate_money) ||'0.00' }}
					</view>
				</view>
				<view class="item">
					<view>累计消费(元)</view>
					<view class="money">
						{{
							-(
								userInfo &&
								userInfo.account &&
								userInfo.account.consume_money
							) || '0.00'
						}}
					</view>
				</view>
			</view>
		</view>
		<!--余额/积分导航-->
		<view class="nav">
			<view
				class="item"
				v-for="item in navList"
				:key="item.title"
				@tap="navTo(item.url)"
			>
				<text class="iconfont" :class="[item.icon, 'text-' + themeColor.name]"></text>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!--广告-->
		<view class="advert">
			<view class="item on" @tap="navTo('/pages/user/coupon/list')">
				<view class="text" :class="'text-' + themeColor.name">
					<view class="name">领取优惠券</view>
					<text class="desc">满减享优惠</text>
				</view>
				<text class="iconfont iconwodeyouhuiquan" :class="'text-' + themeColor.name"></text>
			</view>
		</view>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./account'>

</script>
<style scoped lang="scss">
	@import './account.scss'
</style>
