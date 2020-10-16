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
			userInfo: {},
			loading: true,
			isOpenRecharge: this.$mSettingConfig.isOpenRecharge,
			navList: [
				{
					title: '账单记录',
					icon: 'icondaifukuan',
					url: '/pages/user/account/bill'
				},
				{
					title: '充值记录',
					icon: 'iconchongzhijilu',
					url: '/pages/user/account/bill?state=2'
				},
				{
					title: '消费记录',
					icon: 'iconzuheduozhongxiaofeifangshizuhexiaofei',
					url: '/pages/user/account/bill?state=3'
				},
				{
					title: '积分中心',
					icon: 'iconjifenqia',
					url: '/pages/user/account/integral'
				}
			]
		};
	},
	onShow() {
		this.initData();
	},
	methods: {
		// 初始化数据
		initData() {
			this.getMemberInfo();
		},
		// 获取用户信息
		async getMemberInfo() {
			await
			user.getmemberInfo().then(async r => {
				this.loading = false;
				this.userInfo = r.data;
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