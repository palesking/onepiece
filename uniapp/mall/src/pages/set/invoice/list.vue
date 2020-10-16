<template>
	<view class="invoice-history">
		<view class="rf-list" v-if="invoiceList.length > 0">
			<view
				class="rf-list-item"
				v-for="(item, index) in invoiceList"
				:key="index"
				@tap="navTo(item.order_id)"
			>
				<view class="wrapper">
					<view class="address-box">
						<view class="order-fl">
							订单编号: <text class="order-sn">{{ item.order_sn }}</text>
						</view>
						<view class="order-wrapper">
							<text class="address">
                                {{ item.title}}
                                <text v-if="item.content">{{` - ${item.content}`}}</text>
                            </text>
							<text class="address">
                                开票金额:
                                <text :class="'text-' + themeColor.name">{{ item.tax_money }}</text>
                            </text>
						</view>
					</view>
					<view class="u-box">
						<view class="in1line">
							<text class="name">[{{ parseInt(item.type, 10) === 1 ? '公司' : '个人' }}]</text>
							<text class="mobile">
                                {{ item.duty_paragraph || '个人发票无税号' }}
                            </text>
						</view>
						<text class="time">{{ item.created_at | time }}</text>
					</view>
				</view>
			</view>
			<rf-load-more v-if="invoiceList.length > 0" :status="loadingType" />
		</view>
		<rf-empty
			info="您还未购买任何商品"
			v-if="invoiceList.length === 0 && !loading"
		></rf-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script src='./list'>

</script>

<style lang="scss">
	@import './list.scss'
</style>
