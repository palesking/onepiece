/**
 * @des 用户账户中心
 *
 * @author lizi
 * @date 2020-01-10 15:17
 * @copyright 2019
 */

import user from '@/service/user.js'

export default {
	data() {
		return {
      memberLevelList: [],
			loading: true
		};
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 初始化数据
		initData() {
			this.getMemberLevelList();
		},
		// 获取用户信息
		async getMemberLevelList() {
			await
			user.getmemberLevelIndex().then(async r => {
				this.loading = false;
				this.memberLevelList = r.data;
			})
			.catch(() => {
				this.loading = false;
			});
		},
		navTo(route) {
			this.$mRouter.push({ route });
		}
	}
};