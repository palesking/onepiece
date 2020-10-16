/**
 * @des 订单管理
 * @author lizi
 * @date 2020-01-15 11:54
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import moment from '@/utils/moment';
import rfCountDown from '@/components/rf-count-down/index.vue';
import mConstData from '@/config/constData.js';
import order from '@/service/order.js'

export default {
	components: {
		rfLoadMore,
		rfCountDown
	},
	data() {
		return {
			tabCurrentIndex: null,
			loadingType: 'more',
			navList: this.$mConstDataConfig.orderNavList,
			moneySymbol: this.moneySymbol,
			orderList: [],
			page: 1,
			loading: true,
			isRefreshing: true,
			guessYouLikeList: [],
			singleSkuText: this.singleSkuText
		};
	},
	computed: {
		// 计算倒计时时间
		second() {
			return function(val) {
				return Math.floor(val - new Date() / 1000);
			};
		}
	},
	filters: {
		// 时间格式化
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
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
	onLoad(options) {
		/**
		 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
		 * 替换onLoad下代码即可
		 */
		this.tabCurrentIndex = parseInt(options.state, 10) + 1;
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.orderList.length = 0;
		this.getOrderList('refresh');
	},
	// 加载更多
	onReachBottom() {
    if (this.loadingType === 'nomore' || this.orderList.length === 0) return;
		this.page++;
		this.getOrderList();
	},
	methods: {
		// 倒计时关闭订单
		timeUp(item) {
			if (this.isRefreshing) {
				this.isRefreshing = false;
				this.handleOrderClose(item.id);
			}
		},
		// 订单操作
		handleOrderOperation(item, type) {
			switch (type) {
				case 'detail': // 订单详情
					this.navTo(`/pages/order/detail?id=${item.id}`);
					break;
				case 'evaluation': // 我要评价
					this.navTo(`/pages/order/evaluation/evaluation?order_id=${item.id}`);
					break;
				case 'close': // 取消订单
					this.handleOrderClose(item.id);
					break;
				case 'delete': // 删除订单
					this.handleOrderDelete(item.id);
					break;
				case 'shipping': // 查看物流
					this.navTo(`/pages/order/shipping/shipping?id=${item.id}`);
					break;
				case 'delivery': // 确认收货
					this.handleOrderTakeDelivery(item.id);
					break;
			}
		},
		// 跳转页面
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 关闭订单
		async handleOrderClose(id) {
			await order.getorderClose( { id } ).then(() => {
				this.isRefreshing = true;
				this.$mHelper.toast('订单取消成功');
				setTimeout(() => {
					this.loading = true;
					this.page = 1;
					this.orderList.length = 0;
					this.getOrderList();
				}, 500);
			});
		},
		// 删除已关闭订单
		async handleOrderDelete(id) {
			await order.getorderDelete( id ).then(() => {
				this.$mHelper.toast('订单删除成功');
				setTimeout(() => {
					this.page = 1;
					this.orderList.length = 0;
					this.getOrderList();
				}, 500);
			});
		},
		// 确认收货
		async handleOrderTakeDelivery(id) {
			await order.getorderTakeDelivery( {id} ).then(() => {
				this.page = 1;
				this.orderList.length = 0;
				this.getOrderList();
			});
		},
		// 数据初始化
		async initData() {
			this.page = 1;
			this.orderList.length = 0;
			await this.getOrderList();
		},
		// 获取订单列表
		async getOrderList(type) {
			let navItem = this.navList[this.tabCurrentIndex];
			const params = {};
			if (navItem.state || navItem.state === 0) {
				params.synthesize_status = navItem.state;
			}
			params.page = this.page;
			await order.getorderList(params).then(async r => {
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.orderList = [...this.orderList, ...r.data];
				if (this.orderList.length === 0) {
					await this.getGuessYouLikeList();
				}
				this.loading = false;
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		async getGuessYouLikeList() {
			await order.getguessYouLikeList().then(r => {
				this.guessYouLikeList = r.data;
			});
		},
		// 监听swiper切换
		changeTab(e) {
			this.page = 1;
			this.orderList.length = 0;
			this.tabCurrentIndex = e.target.current;
			this.loading = true;
			this.getOrderList();
		},
		// 顶部tab点击
		tabClick(index) {
			this.page = 1;
			this.orderList.length = 0;
			this.tabCurrentIndex = index;
			this.loading = true;
			this.getOrderList();
		},
		// 顶部tab点击
		getMoreOrderList() {
            if (this.loadingType === 'nomore' || this.orderList.length === 0) return;
			this.page++;
			this.getOrderList();
		}
	}
};