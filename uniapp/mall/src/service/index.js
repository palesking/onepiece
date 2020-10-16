
import { http } from '@/service/base.js';
// import indexConfig from '@/config/index.js';

// http.config.baseUrl = indexConfig.apphost.lizi;
// import indexConfig from '@/config/index.config';

// http.config.baseUrl = indexConfig.apphost.lizi;

const index = {

	// 获取主页数据
	async getIndexList() {
		// http.config.baseUrl = indexConfig.apphost.op;
		return http.get('/tiny-shop/v1/index/index', {})
	},

	// 获取产品列表
	async getProductList({cate_id, page}) {
		return http.get('/tiny-shop/v1/product/product/index', { cate_id, page })
	},

	// 获取通知列表
	async getnotifyAnnounceView() {
		return http.get('/tiny-shop/v1/common/notify-announce/view', { id })
	},

	// 获取公告列表
	async getnotifyAnnounceIndex({ page }) {
		return http.get('/tiny-shop/v1/common/notify-announce/index', { page })
	},
}

export default index
