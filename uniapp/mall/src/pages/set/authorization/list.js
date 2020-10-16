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
			thirdPartyAuthList: [],
			loading: true
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		oauthClientFilter(val) {
			switch (val) {
				case 'wechat':
					return '微信';
				case 'wechatMp':
					return '微信小程序';
				case 'qq':
					return 'QQ小程序';
				case 'sina':
					return '新浪';
				case 'wechatOP':
					return '微信开放平台';
			}
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.thirdPartyAuthList.length = 0;
		this.loading = true;
		this.getThirdPartyAuthList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getThirdPartyAuthList();
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 数据初始化
		initData() {
			this.page = 1;
			this.thirdPartyAuthList.length = 0;
			this.getThirdPartyAuthList();
		},
		// 获取收货地址列表
		async getThirdPartyAuthList(type) {
			await
			setting.getthirdPartyAuthList().then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.thirdPartyAuthList = [...this.thirdPartyAuthList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
		// 解绑第三方授权登录
		async unBind(id) {
			await
			setting.getthirdPartyAuthDelete(id).then(r => {
				this.page = 1;
				this.thirdPartyAuthList = [];
				this.getThirdPartyAuthList();
			});
		}
	}
};