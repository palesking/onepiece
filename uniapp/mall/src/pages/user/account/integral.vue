<template>
	<view class="integral">
		<view class="header" :class="'bg-' + themeColor.name">
			<view class="title">当前积分</view>
			<text class="num">
				{{ (userInfo && userInfo.account && userInfo.account.user_integral) ||'0' }}
			</text>
			<view class="line" />
			<view class="nav">
				<view class="item">
					<text class="num">
						{{
							(userInfo && userInfo.account && userInfo.account.accumulate_integral) ||'0'
						}}
					</text>
					<text class="title">累计积分</text>
				</view>
				<view class="item">
					<text class="num">
						{{
							-(
								userInfo &&
								userInfo.account &&
								userInfo.account.consume_integral
							) || '0'
						}}
					</text>
					<text class="title">累计消费</text>
				</view>
				<view class="item">
					<text class="num">
						{{
							(userInfo && userInfo.frozen_integral && userInfo.account.frozen_integral) ||'0'
						}}
					</text>
					<text class="title">冻结积分</text>
				</view>
			</view>
			<view class="tab">
				<view
					class="item"
					:class="current === index ? `text-${themeColor.name} on` : ''"
					v-for="(item, index) in navList"
					:key="index"
					@tap="nav(index)"
				>
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="wrapper">
			<view class="list1" :hidden="current !== 0">
				<view class="tip acea-row row-middle">
					<span class="iconfont icon-shuoming"></span>
                    提示：积分可用来兑换指定商品
				</view>
				<view
					class="list b-b"
					v-for="(item, index) in integralList"
					:key="index"
				>
					<view class="wrapper">
						<view class="address-box">
							{{ item.remark }}
						</view>
						<view class="u-box">
							{{ item.created_at | time }}
						</view>
					</view>
					<text
						class="change-num"
						:class="parseFloat(item.num) >= 0 ? 'change-num-add' : 'change-num-reduce' "
						>
                        {{ item.num | numFilter }}
                    </text>
				</view>
				<rf-load-more class="load-more" :status="loadingType"></rf-load-more>
			</view>
			<view class="list2" :hidden="current !== 1">
				<view class="item">
					<text class="name">购买商品可获得积分奖励</text>
					<view class="earn" @tap="toCategory">赚积分</view>
				</view>
			</view>
		</view>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./integral'>

</script>
<style scoped lang="scss">
	@import './integral.scss'
</style>
