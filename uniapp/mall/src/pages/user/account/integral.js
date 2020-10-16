/**
 * @des 积分中心
 *
 * @author lizi
 * @date 2020-01-10 15:24
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more.vue';
import user from '@/service/user.js'

import moment from '@/utils/moment';
export default {
	name: 'Integral',
	components: {
		rfLoadMore
	},
	data() {
		return {
			navList: [{ name: '分值明细' }, { name: '分值提升' }],
			current: 0,
			integralList: [],
			loadingType: 'more',
			page: 1,
			userInfo: {},
			loading: true
		};
	},
	onLoad() {
		this.initData();
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		numFilter(val) {
			return val >= 0 ? `+${val.toString()}` : val;
		}
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getIntegralListList();
	},
	methods: {
		toCategory() {
			this.$mRouter.reLaunch({ route: '/pages/category/category' });
		},
		nav(index) {
			this.loading = true;
			this.current = index;
			this.page = 1;
			this.integralList.length = 0;
			this.getIntegralListList();
		},
		initData() {
			this.userInfo = uni.getStorageSync('userInfo') || undefined;
			this.getIntegralListList();
		},
		async getIntegralListList() {
			await
			user.getcreditsLogList({ page: this.page }).then(r => {
				this.loading = false;
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.integralList = [...this.integralList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
			});
		}
	}
};