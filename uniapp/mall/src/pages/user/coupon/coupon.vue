<template>
	<view class="my-coupon">
		<view>
			<!--顶部导航栏-->
			<view class="tabr" :style="{ top: headerTop }">
				<view :class="typeClass == 'valid' ? `text-${themeColor.name} on` : ''" @tap="switchType('valid', 1)">
                    可用
					<text v-if="state === 1">({{ couponList.length }})</text>
				</view>
				<view :class="typeClass == 'used' ? `text-${themeColor.name} on` : ''" @tap="switchType('used', 2)">
                    已使用
					<text v-if="state === 2">({{ couponList.length }})</text>
				</view>
				<view
					:class="typeClass == 'invalid' ? `text-${themeColor.name} on` : ''"
					@tap="switchType('invalid', 3)"
				>
                    已失效
					<text v-if="state === 3">({{ couponList.length }})</text>
				</view>
				<view class="border" :class="[typeClass, 'bg-' + themeColor.name]"></view>
			</view>
			<!--占位符-->
			<view class="place"></view>
			<!--优惠券列表-->
			<view class="coupon-list">
				<view
					v-if="state === 3 && couponList.length > 0 && !loading"
					class="empty-invalid"
					:class="'text-' + themeColor.name"
					@tap.stop="emptyInvalidCoupon"
				>
					清空失效优惠券
				</view>
				<!-- 优惠券列表 -->
				<view
					class="sub-list valid"
					:style="{ marginTop: state === 3 ? '50upx' : 0 }"
				>
					<view class="row" v-for="(row, index) in couponList" :key="index">
						<!-- content -->
						<view class="carrier">
							<view class="left">
								<view class="in1line title">
									<text class="cell-icon" :class="'bg-' + themeColor.name">
                                        {{ parseInt(row.couponType.range_type, 10) === 2 ? '限' : '全' }}
                                    </text>
									{{ row.title }}
								</view>
								<view class="term" v-if="state !== 2">
									{{ row.start_time | time }} ~ {{ row.end_time | time }}
								</view>
								<view class="term" v-else>
									使用时间：{{ row.use_time | timeFull }}
								</view>
								<view class="overdue" v-if="state === 3">
									<text class="iconfont iconyiguoqi2" :class="'text-' + themeColor.name"></text>
								</view>
								<view class="overdue" v-if="state === 2">
									<text class="iconfont iconyishiyong"></text>
								</view>
								<view class="usage">
									{{
										parseInt(row.couponType.max_fetch, 10) === 0
										? '不限': `每人限领${row.couponType.max_fetch}`
									}}
									已领{{ row.couponType.get_count }}
									<text v-if="row.couponType.percentage">
                                        剩余{{ row.couponType.percentage }}%
                                    </text>
								</view>
							</view>
							<view class="right" :class="state !== 1 ? 'invalid' : 'bg-' + themeColor.name">
								<view class="ticket">
									<view class="num">
										{{ row.type === '1' ? moneySymbol + row.money : (row.discount / 10) + '折' }}
									</view>
								</view>
								<view class="criteria"> 满{{ row.at_least }}使用 </view>
								<view
									class="use view"
									:class="'text-' + themeColor.name"
									@tap="show(row)"
									v-if="parseInt(row.couponType.range_type, 10) === 2"
								>
									商品
								</view>
								<view
									class="use"
									:class="'text-' + themeColor.name"
									v-if="state == 1"
									@tap="navTo('/pages/product/list')"
								>
									去使用
								</view>
								<view
									class="use"
									:class="'text-' + themeColor.name"
									v-if="state == 2"
									@tap="navTo(`/pages/order/detail?id=${row.use_order_id}`)"
								>
									去查看
								</view>
							</view>
						</view>
					</view>
				</view>
				<rf-load-more :status="loadingType" v-if="couponList.length > 0"></rf-load-more>
			</view>
		</view>
		<rf-empty
			class="empty"
			info="暂无优惠券"
			v-if="couponList.length === 0 && !loading"
		></rf-empty>
		<!--显示部分商品的抽屉-->
		<uni-drawer
			class="rf-drawer"
			:visible="showRight"
			mode="right"
			@close="closeDrawer()"
		>
			<view class="rf-drawer-title" :class="'text-' + themeColor.name">可用商品列表</view>
			<view class="rf-drawer-list">
				<view
					class="rf-drawer-item"
					@tap="navTo(`/pages/product/product?id=${item.id}`)"
					v-for="item in currentCoupon.usableProduct"
					:key="item.id"
				>
					<view class="left">
						<view class="title">
                            {{ item.name.split('】')[0].split('【').join('') }}
                        </view>
						<view class="desc in2line">{{ item.name.split('】')[1] }}</view>
					</view>
					<text class="iconfont iconyou"></text>
				</view>
			</view>
			<view class="close">
				<view
					class="btn"
                    :class="'bg-' + themeColor.name"
					plain="true"
					size="small"
					type="primary"
					@tap="hide"
				>
					关闭
				</view>
			</view>
		</uni-drawer>
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./coupon'>

</script>
<style lang="scss">
	@import './coupon.scss'
</style>
