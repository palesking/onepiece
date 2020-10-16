/**
 * @des 关于商城详情
 *
 * @author lizi
 * @date 2019-12-09 10:13
 * @copyright 2019
 */

import setting from '@/service/setting.js'


export default {
	data() {
		return {
			detail: {},
			title: null,
			loading: true
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 数据初始化
		initData(options) {
			this.title = options.title;
			uni.setNavigationBarTitle({
				title: options.title
			});
			this.getConfigList(options.field);
		},
		// 获取商城详情
		async getConfigList(field) {
			if (field.indexOf('protocol') !== -1) {
				await
				setting.getConfigList( {field} ).then(r => {
					this.loading = false;
					this.detail = r.data;
				})
				.catch(() => {
					this.loading = false;
				});
				} else {
				const userInfo = uni.getStorageSync('userInfo');
				if (!userInfo) return;
				await
				setting.getmerchantView( {id: userInfo.merchant_id,field} )
				.then(r => {
					this.loading = false;
					this.detail = r.data;
				})
				.catch(() => {
					this.loading = false;
				});
			}
		}
	}
};