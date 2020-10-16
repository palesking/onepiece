import moment from '@/utils/moment';
import index from '@/service/index.js'

export default {
	data() {
		return {
			announceDetail: {},
			id: undefined,
			loading: true
		};
	},
	filters: {
		// 时间格式化
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		}
	},
	onLoad(event) {
		this.id = event.id;
		this.getNotifyAnnounceView(event.id);
	},
	onShareAppMessage() {
		return {
			title: this.banner.title,
			path: `/pages/index/notice/detail?id=${this.id}`
		};
	},
	methods: {
		// 获取通知列表
		async getNotifyAnnounceView(id) {
			await index.getnotifyAnnounceView().then(r => {
				this.loading = false;
				this.announceDetail = r.data;
				uni.setNavigationBarTitle({
					title: r.data.title
				});
			})
			.catch(() => {
				this.loading = false;
			});
		}
	}
};