<template>
	<view class="order">
		<!--搜索导航栏-->
		<view class="order-search" @tap="navTo(`/pages/index/search/search?keyword=搜索我的订单&type=order`)">
			<view class="order-search-input">请输入订单关键字</view>
			<view class="iconfont iconsousuo2"></view>
		</view>
		<!--导航栏-->
		<view class="navbar">
			<view
				v-for="(item, index) in navList"
				:key="index"
				class="nav-item"
				:class="tabCurrentIndex === index ? `text-${themeColor.name} current` : ''"
				@tap="tabClick(index)"
			>
				{{ item.text }}
			</view>
		</view>
		<!--订单列表-->
		<swiper
			class="swiper-box"
			duration="300"
			@change="changeTab"
		>
			<swiper-item
				class="tab-content"
				v-for="(tabItem, tabIndex) in navList"
				:key="tabIndex"
			>
				<scroll-view
					class="list-scroll-content"
					scroll-y
					@scrolltolower="getMoreOrderList"
				>
					<view
						v-for="(item, index) in orderList"
						:key="index"
						class="rf-order-item"
					>
						<view class="i-top b-b">
							<text class="time in1line">订单号：{{ item.order_sn }}</text>
							<!--<text class="time">{{item.created_at | time}}</text>-->
							<text
								class="state"
								:class="'text-' + themeColor.name"
								v-if="parseInt(item.order_status, 10) !== 0"
								>{{ item.order_status | orderStatusFilter }}</text
							>
							<view class="example-body" v-else>
								<rf-count-down
									:show-day="false"
									:second="second(item.close_time)"
									@timeup="timeUp(item)"
									color="#FFFFFF"
									:background-color="themeColor.color"
									:border-color="themeColor.color"
								/>
							</view>
						</view>
						<view
							class = "goods-box-single"
							@tap.stop = "navTo(`/pages/order/detail?id=${item.id}`)"
							v-for = "(goodsItem, goodsIndex) in item.product"
							:key = "goodsIndex"
						>
							<image
								class="goods-img"
								:src="goodsItem.product_picture"
								mode="aspectFill"
							></image>
							<view class="right">
								<text class="title in2line">{{ goodsItem.product_name }}</text>
								<text class="attr-box">{{ goodsItem.sku_name || singleSkuText }} * {{ goodsItem.num }}</text>
								<text v-if="goodsItem.point_exchange_type == 2">
									<text class="point" :class="'text-' + themeColor.name">
                                        {{ goodsItem.product_money }} + {{ item.point }}积分 
                                    </text>
								</text>
								<text v-else-if="goodsItem.point_exchange_type == 4">
									<text class="point">{{ item.point }}积分 </text>
								</text>
								<text class="price" v-else>
									<text :class="'text-' + themeColor.name">
                                        {{ moneySymbol }}{{ goodsItem.product_money }}
										<text v-if="goodsItem.gift_flag === 0">
											+ {{ item.point + '积分' || '' }}
                                        </text>
                                    </text>
								</text>
							</view>
						</view>
						<view class="price-box">
							共
							<text class="num">{{ item.product_count }}</text>
							件商品 实付款
							<text class="price" :class="'text-'+themeColor.name">{{ moneySymbol }}{{ item.pay_money }}</text>
						</view>
						<view class="action-box b-t">
							<button
								class="action-btn"
								:class="'text-' + themeColor.name"
								v-if="item.order_status == 0"
								@tap="handleOrderOperation(item, 'close')"
							>
								取消订单
							</button>
							<button
								class = "action-btn"
								:class = "'text-' + themeColor.name"
								v-if = "(item.order_status == 4 || item.order_status == 2) && item.product[0].is_virtual != 1"
								@tap = "handleOrderOperation(item, 'shipping')"
							>
								查看物流
							</button>
							<button
								class="action-btn"
								:class="'text-' + themeColor.name"
								v-if="item.order_status == -4"
								@tap="handleOrderOperation(item, 'delete')"
							>
								删除订单
							</button>
							<button
								class="action-btn"
								:class="'bg-' + themeColor.name"
								@tap="handleOrderOperation(item, 'detail')"
							>
								订单详情
							</button>
							<button
								class="action-btn"
								:class="'bg-' + themeColor.name"
								v-if="item.order_status == 0 || item.order_status == 202"
								@tap="navTo(`/pages/user/money/pay?id=${item.id}`)"
							>
								立即支付
							</button>
							<button
								class = "action-btn"
								:class = "'bg-' + themeColor.name"
								v-if = "(item.order_status == 3 || item.order_status == 4) &&item.is_evaluate == 0"
								@tap = "handleOrderOperation(item, 'evaluation')"
							>
								批量评价
							</button>
							<button
								class="action-btn"
								:class="'bg-' + themeColor.name"
								v-if="item.order_status == 2"
								@tap="handleOrderOperation(item, 'delivery')"
							>
								确认收货
							</button>
						</view>
					</view>
					<rf-load-more :status="loadingType" v-if="orderList.length > 0"></rf-load-more>
					<rf-empty :list="guessYouLikeList" info="暂无订单" v-if="orderList.length === 0 && !loading"></rf-empty>
				</scroll-view>
			</swiper-item>
		</swiper>
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>
<script src='./order'>

</script>
<style lang="scss">
	@import './order.scss';
</style>
