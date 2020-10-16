/**
 * @des 优惠券管理
 *
 * @author lizi
 * @date 2019-12-09 10:13
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import moment from '@/utils/moment';
import uniDrawer from '@/components/uni-drawer/uni-drawer';
import user from '@/service/user.js'

export default {
	components: {
		rfLoadMore,
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
			moneySymbol: this.moneySymbol,
			currentCoupon: {},
			loading: true
		};
	},
	filters: {
		// 格式化时间
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD');
		},
		// 格式化时间
		timeFull(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		}
	},
	// 下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		this.page = 1;
		this.couponList = [];
		this.getMyCouponList('refresh');
	},
	// 加载更多
	onReachBottom() {
    if (this.loadingType === 'nomore') return;
		this.page++;
		this.getMyCouponList();
	},
	onLoad() {
		// 数据初始化
		this.initData();
		// 兼容H5下排序栏位置
		// #ifdef H5
		// 定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
		let Timer = setInterval(() => {
			let uniHead = document.getElementsByTagName('uni-page-head');
			if (uniHead.length > 0) {
				this.headerTop = uniHead[0].offsetHeight + 'px';
				clearInterval(Timer); // 清除定时器
			}
		}, 1);
		// #endif
	},
	methods: {
		// 显示抽屉(可使用商品)
		show(item) {
			if (item.usableProduct.length === 0) return;
			this.currentCoupon = item;
			this.showRight = true;
		},
		// 隐藏抽屉
		hide() {
			this.showRight = false;
		},
		// 关闭抽屉
		closeDrawer() {
			this.showRight = false;
		},
		// 切换顶部优惠券类型
		switchType(type, state) {
			if (this.typeClass === type) {
				return;
			}
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			this.typeClass = type;
			this.state = state;
			this.page = 1;
			this.couponList = [];
			this.loading = true;
			this.getMyCouponList();
		},
		// 清空失效优惠券
		async emptyInvalidCoupon() {
			await
			user.getcouponClear().then(() => { this.getMyCouponList() });
		},
		// 占位方法
		discard() {
			// 丢弃
		},
		// 初始化数据
		initData() {
			this.page = 1;
			this.couponList = [];
			this.getMyCouponList();
		},
		// 统一跳转接口
		navTo(route, type) {
			if (type) {
				this.$mRouter.switchTab({ route });
			} else {
				this.$mRouter.push({ route });
			}
		},
		// 获取我的优惠券列表
		async getMyCouponList(type) {
			await
			user.getmyCouponList({ page: this.page,state: this.state })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.couponList = [...this.couponList, ...r.data];
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