
import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import setting from '@/service/setting.js'


export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			page: 1,
			feedbackList: [],
			loadingType: 'more',
			loading: true
		};
	},
	filters: {
		feedbackFilter(type) {
			const feedbackType = ['', '功能建议', 'BUG反馈', '业务咨询'];
			return feedbackType[parseInt(type, 10)];
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.feedbackList.length = 0;
		this.getFeedbackList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getFeedbackList();
	},
	onShow() {
		this.initData();
	},
	methods: {
		// 数据初始化
		initData() {
			this.page = 1;
			this.feedbackList.length = 0;
			this.getFeedbackList();
		},
		// 获取意见反馈列表
		async getFeedbackList(type) {
			await
			setting.getopinionList({ page: this.page })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.feedbackList = [...this.feedbackList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		navTo(route) {
			this.$mRouter.push({ route });
		}
	}
};