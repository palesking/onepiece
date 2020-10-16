
import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import setting from '@/service/setting.js'

export default {
	components: {
		rfLoadMore
	},
	data() {
		return {
			timeOutEvent: 0,
			source: 0,
			invoiceList: [],
			page: 1,
			loadingType: 'more',
			loading: true
		};
	},
	onShow() {
		this.initData();
	},
	onLoad(option) {
		this.source = option.source;
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.invoiceList.length = 0;
		this.getInvoiceList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getInvoiceList();
	},
	methods: {
		deleteInvoice(id) {
			uni.showModal({
				content: '确定要删除该发票吗',
				success: e => {
					if (e.confirm) {
						this.handleInvoiceDel(id);
					}
				}
			});
		},
		async handleInvoiceDel(id) {
			await
			setting.getinvoiceDel().then(() => {
				this.page = 1;
				this.invoiceList.length = 0;
				this.getInvoiceList();
			});
		},
		// 手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
		goTouchEnd() {
			clearTimeout(this.timeOutEvent);
		},
		// 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
		goTouchMove() {
			clearTimeout(this.timeOutEvent); // 清除定时器
			this.timeOutEvent = 0;
		},
		// 初始化数据
		initData() {
			this.page = 1;
			this.invoiceList.length = 0;
			this.getInvoiceList();
		},
		// 获取发票列表
		async getInvoiceList(type) {
			await
			setting.getinvoiceList({ page: this.page })
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.invoiceList = [...this.invoiceList, ...r.data];
			})
			.catch(() => {
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loading = false;
			});
		},
		// 选择发票
		checkInvoice(item) {
			if (parseInt(this.source, 10) === 1) {
				// this.$mHelper.prePage()获取上一页实例，在App.vue定义
				this.$mHelper.prePage().invoiceItem = item;
				this.$mRouter.back();
			}
		},
		// 跳转至新增/编辑发票
		addInvoice(type, id) {
			this.$mRouter.push({
				route: `/pages/set/invoice/manage?type=${type}&id=${id}`
			});
		}
	}
};