	
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
import setting from '@/service/setting.js'

export default {
	components: { uniCollapse, uniCollapseItem },
	data() {
		return {
			loading: true,
			helperList: [],
			page: 1
		};
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 数据初始化
		initData() {
			this.loading = true;
			this.getHelperList();
		},
		// 通用跳转
		navTo(route) {
			this.$mRouter.push({ route });
		},
		async getHelperList() {
			await
			setting.gethelperIndex().then(r => {
				this.loading = false;
				this.helperList = r.data;
			});
			this.loading = false;
		}
	}
};