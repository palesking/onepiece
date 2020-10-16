	
import setting from '@/service/setting.js'

export default {
	data() {
		return {
			loading: true,
			helperDetail: {},
			helperId: ''
		};
	},
	onLoad(option) {
		this.helperId = option.id;
		this.initData();
	},
	methods: {
		// 数据初始化
		initData() {
			this.getHelperDetail();
		},
		async getHelperDetail() {
			await
			setting.gethelperView({id: this.helperId}).then(r => {
				this.loading = false;
				this.helperDetail = r.data;
				uni.setNavigationBarTitle({ title: r.data.title });
			})
			.catch(() => {
				this.loading = false;
			});
		}
	}
};