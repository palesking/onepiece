
import moment from '@/utils/moment';
import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import setting from '@/service/setting.js'

export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			page: 1,
			loadingType: 'more',
			invoiceList: [],
			loading: true
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		}
	},
	onLoad() {
		this.initData();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.loading = true;
		this.page = 1;
		this.invoiceList = [];
		this.getInvoiceList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getInvoiceList();
	},
	methods: {
		// 数据初始化
		initData() {
			this.getInvoiceList();
		},
		// 获取发票历史
		async getInvoiceList(type) {
			await
			setting.getorderInvoiceList({ page: this.page }).then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.invoiceList = [...this.invoiceList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		navTo(id) {
			this.$mRouter.push({ route: `/pages/order/detail?id=${id}` });
		}
	}
};