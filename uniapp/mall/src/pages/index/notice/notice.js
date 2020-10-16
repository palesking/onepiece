import rfLoadMore from '@/components/rf-load-more/rf-load-more.vue';
import moment from '@/utils/moment';
import index from '@/service/index.js'

export default {
	components: { rfLoadMore },
	data() {
		return {
			announceList: [], // 公告列表
			loadingType: 'more',
			loading: true,
			page: 1
		};
	},
	filters: {
		// 时间格式化
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.announceList.length = 0;
		this.getNotifyAnnounceIndex('refresh');
	},
	// 加载更多
	onReachBottom() {
  if (this.loadingType === 'nomore') return;
		this.page++;
		this.getNotifyAnnounceIndex();
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 数据初始化
		initData() {
			this.getNotifyAnnounceIndex();
		},
		// 获取通知列表
		async getNotifyAnnounceIndex(type) {
			await index.getnotifyAnnounceIndex({ page: this.page })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.announceList = [...this.announceList, ...r.data];
			})
			.catch(() => {
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loading = false;
			});
		},
		navTo(route) {
			this.$mRouter.push({ route });
		}
	}
};