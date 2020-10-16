/**
 * @des 领取中心
 *
 * @author lizi
 * @date 2020-01-13 11:28
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import moment from '@/utils/moment';
import user from '@/service/user.js'

export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			couponList: [],
			type: null,
			loadingType: 'more',
			page: 1,
			loading: true,
			moneySymbol: this.moneySymbol,
			errorInfo: ''
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		}
	},
	onLoad(options) {
		this.type = options.type;
		this.initData();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.couponList.length = 0;
		this.getCouponList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getCouponList();
	},
	methods: {
		// 数据初始化
		initData() {
			this.getCouponList();
		},
		// 获取收货地址列表
		async getCouponList(type) {
			await
			user.getmyCouponList({ page: this.page })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.couponList = [...this.couponList, ...r.data];
			})
			.catch(err => {
				this.couponList.length = 0;
				this.errorInfo = err;
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		// 获取优惠券
		async getCoupon(item) {
			if (this.type) return;
			// 优惠券是否可领取 is_get 0 不可领取
			if (item.is_get === 0) {
				this.$mHelper.toast('该优惠券不可领取');
				return;
			}
			await
			user.getcouponReceive({ id: item.id })
			.then(() => {
				this.page = 1;
				this.couponList.length = 0;
				this.$mHelper.toast('领取成功');
				this.getCouponList();
			});
		}
	}
};