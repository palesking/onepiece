/**
 * @des 优惠券详情
 *
 * @author lizi
 * @date 2019-12-09 10:13
 * @copyright 2019
 */

import moment from '@/utils/moment';
import uniDrawer from '@/components/uni-drawer/uni-drawer';
import user from '@/service/user.js'


export default {
	components: {
		uniDrawer
	},
	data() {
		return {
			headerTop: 0,
			// 控制滑动效果
			typeClass: 'valid',
			theIndex: null,
			oldIndex: null,
			state: 1,
			isStop: false,
			couponList: [],
			loadingType: 'more',
			token: null,
			page: 1,
			showRight: false,
			currentCoupon: {},
			moneySymbol: this.moneySymbol,
			loading: true
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD');
		},
		timeFull(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		}
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		show(item) {
			if (item.usableProduct.length === 0) return;
			this.currentCoupon = item;
			this.showRight = true;
		},
		hide() {
			this.showRight = false;
		},
		closeDrawer() {
			this.showRight = false;
		},
		// 初始化数据
		initData(options) {
			this.getMyCouponDetail(options.id);
		},
		// 获取优惠券
		async getCoupon(item) {
			if (!this.$mStore.getters.hasLogin) {
				this.$mHelper.toast('请您先登录！');
				return;
			}
			if (parseInt(item.is_get, 10) === 0) {
				this.$mHelper.toast('该优惠券暂不可领取！');
				return;
			}
			await
			user.getcouponReceive({ id: item.id })
			.then(() => {
				this.$mHelper.toast('领取成功');
				setTimeout(() => {
					this.couponList = [];
					this.getMyCouponDetail(item.id);
				}, 1.5 * 1000);
			});
		},
		// 统一跳转接口
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 获取我的收货地址列表
		async getMyCouponDetail(id) {
			await
			user.getcouponDetail({ id })
			.then(r => {
				this.loading = false;
				this.couponList.push(r.data);
			})
			.catch(() => {
				this.loading = false;
			});
		}
	}
};