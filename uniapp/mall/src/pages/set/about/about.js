/**
 * @des 关于商城
 *
 * @author lizi
 * @date 2019-12-09 10:13
 * @copyright 2019
 */

import rfQrcode from '@/components/rf-qrcode';
import setting from '@/service/setting.js'


export default {
	components: { rfQrcode },
	data() {
		return {
			aboutInfo: {},
			navList: [
				{ title: '商城介绍', url: '' },
				// { title: '版权信息', url: 'copyright_companyname,copyright_desc,copyright_url' },
				// { title: '证照信息', url: '' },
				{ title: '注册协议', url: 'protocol_register' },
				{ title: '充值协议', url: 'protocol_recharge' },
				{ title: '隐私协议', url: 'protocol_privacy' }
			],
			appName: this.$mSettingConfig.appName,
			loading: true,
			hostUrl: this.$mConfig.hostUrl,
			merchantId: ''
		};
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 初始化数据
		initData() {
			uni.setNavigationBarTitle({ title: `关于${this.appName}` });
			const userInfo = uni.getStorageSync('userInfo') || {};
			this.merchantId = userInfo.merchant_id;
			if (this.merchantId === '0') {
				this.navList.shift();
				this.loading = false;
			} else {
				this.getConfigList();
			}
		},
		// 获取商城信息
		async getConfigList() {
			await
			setting.getmerchantView( { id: this.merchantId, field: 'web_qrcode' } )
			.then(r => {
				this.loading = false;
				this.aboutInfo = r.data;
			}).catch(() => {
				this.loading = false;
			});
		},
		// 统一跳转接口
		navTo(route) {
			this.$mRouter.push({ route });
		}
	}
};