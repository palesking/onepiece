<template>
	<view
		class="coupon-detail"
		:style="{ backgroundColor: couponList.length === 0 ? '#fff' : '' }"
	>
		<!-- 优惠券详情 -->
		<view
			class="sub-list valid"
			:style="{ marginTop: state === 3 ? '40upx' : 0 }"
		>
			<view class="row" v-for="(row, index) in couponList" :key="index">
				<!-- content -->
				<view class="carrier">
					<view class="left">
						<view class="in1line title">
							<text class="cell-icon">{{ parseInt(row.range_type, 10) === 2 ? '限' : '全' }}</text>
							{{ row.title }}
						</view>
						<view class="term" v-if="state !== 2">
							{{ row.start_time | time }} ~ {{ row.end_time | time }}
						</view>
						<view class="term" v-else>
							使用时间：{{ row.use_time | timeFull }}
						</view>
						<view class="icon shixiao" v-if="state === 3" />
						<view class="used" v-if="state === 2">已使用</view>
						<view class="usage">
							{{
								parseInt(row.max_fetch, 10) === 0
								? '不限': `每人限领 ${row.max_fetch}`
							}}
							总领取 {{ row.get_count }}
							<text v-if="row.percentage">剩余{{ row.percentage }}%</text>
						</view>
					</view>
					<view class="right" :class="{ invalid: state !== 1 }">
						<view class="ticket">
							<view class="num">
								{{ row.money ? moneySymbol + row.money : row.discount + '折' }}
							</view>
						</view>
						<view class="criteria"> 满{{ row.at_least }}使用 </view>
						<view class="btn-group">
							<view
								class="use view"
								@tap="show(row)"
								v-if="parseInt(row.range_type, 10) === 2"
							>
								商品
							</view>
							<view class="use" @tap="getCoupon(row)">
								领取
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-drawer
			class="rf-drawer"
			:visible="showRight"
			mode="right"
			@close="closeDrawer()"
		>
			<view class="rf-drawer-title">可用商品列表</view>
			<view class="rf-drawer-list">
				<view
					class="rf-drawer-item"
					@tap="navTo(`/pages/product/product?id=${item.id}`)"
					v-for="item in currentCoupon.usableProduct"
					:key="item.id"
				>
					<view class="left">
						<view class="title">{{
							item.name
								.split('】')[0]
								.split('【')
								.join('')
						}}</view>
						<text class="desc in2line">{{ item.name.split('】')[1] }}</text>
					</view>
					<text class="iconfont iconyou"></text>
				</view>
			</view>
			<view class="close">
				<button
					class="btn"
					plain="true"
					size="small"
					type="primary"
					@tap="hide"
				>
					关闭
				</button>
			</view>
		</uni-drawer>

		<rf-empty
			:info="'暂无优惠券'"
			v-if="couponList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./detail'>

</script>
<style lang="scss">
	@import './detail.scss'
</style>
