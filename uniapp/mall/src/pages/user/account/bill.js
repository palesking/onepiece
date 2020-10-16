/**
 * @des 账单明细
 *
 * @author lizi
 * @date 2020-01-13 11:18
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more.vue';
import moment from '@/utils/moment';
import user from '@/service/user.js'

export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			loading: true,
			typeClass: 'valid',
			state: 1,
			tabCurrentIndex: 0,
			billTypeList: [
				{
					state: 1,
					text: '全部'
				},
				{
					state: 2,
					text: '充值'
				},
				{
					state: 3,
					text: '消费'
				}
			],
			integralList: [],
			loadingType: 'more',
			page: 1
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		numFilter(val) {
			return val >= 0 ? `+${val.toString()}` : val;
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.integralList = [];
		this.getIntegralListList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getIntegralListList();
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 顶部tab点击
		tabClick(index, state) {
			this.page = 1;
			this.integralList.length = 0;
			this.loading = true;
			this.tabCurrentIndex = index;
			this.state = state;
			this.getIntegralListList();
		},
		// 数据初始化
		initData(options) {
			this.state = parseInt(options.state, 10);
			if (this.state === 2) {
				this.tabClick(1, 2);
				return;
			} else if (this.state === 3) {
				this.tabClick(2, 3);
				return;
			}
			this.getIntegralListList();
		},
		// 获取积分
		async getIntegralListList(type) {
			const params = {};
			params.credit_type = 1;
			if (this.state === 2) {
				params.num_type = 1;
			} else if (this.state === 3) {
				params.num_type = 2;
			}
			params.page = this.page;
			await
			user.getcreditsLogList({ ...params })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.integralList = [...this.integralList, ...r.data];
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