/**
 * @des 商品详情
 * @author lizi
 * @date 2020-03-23 15:04
 * @copyright 2019
 */

import rfProductDetail from '@/components/rf-product-detail/index.vue'
import rfBackTop from '@/components/rf-back-top';
import rfNoData from '@/components/rf-no-data';
import product from '@/service/product.js'
export default {
	components: {
		rfProductDetail,
		rfBackTop,
		rfNoData
	},
	data() {
		return {
			productDetail: {},
			loading: true,
			errorInfo: '',
			userInfo: {},
			scrollTop: 0,
			currentUrl: '',
			navDetailShow: false,
			appName: this.$mSettingConfig.appName
		};
	},
	// #ifndef MP
	onNavigationBarButtonTap(e) {
		const index = e.index;
		if (index === 0) {
			this.navDetailShow = true;
		}
	},
	// #endif
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	async onLoad(options) {
		this.productId = options.id;
		this.userInfo = uni.getStorageSync('userInfo') || {};
		await this.initData();
	},
	methods: {
		// 隐藏顶部导航
		hideNavDetail() {
			this.navDetailShow = false;
		},
		// 数据初始化
		async initData() {
        if (this.userInfo.promo_code) {
            this.currentUrl = 
            `${this.$mConfig.hostUrl}/pages/product/product?id=${this.productId}&promo_code=${this.userInfo.promo_code}`;
        } else {
            this.currentUrl = `${this.$mConfig.hostUrl}/pages/product/product?id=${this.productId}`;
        }
			this.hasLogin = this.$mStore.getters.hasLogin;
			await this.getProductDetail();
		},
		// 获取产品详情
		async getProductDetail() {
			await product.getProductDetail({id: this.productId})
			.then(async r => {
				this.loading = false;
				this.productDetail = r.data;
				uni.setNavigationBarTitle({ title: r.data.name });
				await this.$mHelper.handleWxH5Share(this.appName, r.data.name, this.currentUrl, r.data.picture);
			})
			.catch(err => {
				this.loading = false;
				this.errorInfo = err;
			});
		}
	}
};