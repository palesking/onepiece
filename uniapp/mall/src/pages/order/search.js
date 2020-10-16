/**
 * @des 售后订单管理
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
			loadingType: 'more',
			orderList: [],
			page: 1,
			loading: true,
			keyword: null,
			height: 64,
			moneySymbol: this.moneySymbol,
			inputTop: 0, // 搜索框距离顶部距离
			arrowTop: 0, // 箭头距离顶部距离
			singleSkuText: this.singleSkuText
		};
	},
	computed: {
		// 计算倒计时时间
		second() {
			return function(val) {
				return Math.floor(15 * 60 - (new Date() / 1000 - val));
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
	onLoad(options) {
		let obj = {};
		// #ifdef MP-WEIXIN
		// eslint-disable-next-line
		obj = wx.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-BAIDU
		// eslint-disable-next-line
		obj = swan.getMenuButtonBoundingClientRect();
		// #endif
		uni.getSystemInfo({
			success: (res) => {
				this.width = obj.left || res.windowWidth;
				this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
				this.inputTop = obj.top ? (obj.top + (obj.height - 30) / 2) : (res.statusBarHeight + 7);
				this.arrowTop = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
			}
		});
		this.initData(options);
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
		back() {
			this.$mRouter.back();
		},
		// 跳转页面
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 倒计时关闭订单
		timeUp(item) {
			this.handleOrderClose(item.id);
		},
		// 关闭订单
		async handleOrderClose(id) {
			await order.getorderClose({id}).then(() => {
				this.$mHelper.toast('订单取消成功');
				setTimeout(() => {
					this.page = 1;
					this.orderList.length = 0;
					this.getOrderList();
				}, 500);
			});
		},
		// 数据初始化
		initData(options) {
			this.keyword = options.keyword;
			this.orderList.length = 0;
			this.page = 1;
			this.getOrderList();
		},
		// 数据初始化
		handleOrderSearch() {
			this.orderList.length = 0;
			this.page = 1;
			this.getOrderList();
		},
		// 获取订单列表
		async getOrderList(type) {
			const params = {};
			params.keyword = this.keyword;
			params.page = this.page;
			await order.getorderList({...params}).then(r => {
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