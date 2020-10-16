/**
 * @des 售后订单管理
 * @author lizi
 * @date 2020-01-15 11:54
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more.vue';
import mConstData from '@/config/constData.js';
import order from '@/service/order.js'

export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			loadingType: 'more',
			orderList: [],
			page: 1,
			moneySymbol: this.moneySymbol,
			loading: true,
			singleSkuText: this.singleSkuText
		};
	},
	filters: {
		// 状态显示格式化
		orderStatusFilter(orderStatus) {
			let state;
			mConstData.orderStatus.forEach(orderItem => {
				if (orderItem.key === parseInt(orderStatus, 10)) {
					state = orderItem.value;
				}
			});
			return state;
		}
	},
	onShow() {
		this.initData();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.orderList.length = 0;
		this.getOrderList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getOrderList();
	},
	methods: {
		// 跳转页面
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 数据初始化
		initData() {
			this.orderList.length = 0;
			this.page = 1;
			this.getOrderList();
		},
		// 获取订单列表
		async getOrderList(type) {
			const params = {};
			params.page = this.page;
			params.synthesize_status = -1;
			await order.getorderList(params).then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.orderList = [...this.orderList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		}
	}
};