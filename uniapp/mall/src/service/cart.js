
import { http } from '@/service/base.js';
import indexConfig from '@/config/index.js';

// http.interceptor.request(
// 	config => {
// 		/* 请求之前拦截器 */
// 		// config.header['x-api-key'] = uni.getStorageSync('accessToken');
// 		config.baseUrl = 'http://123'
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );

const cart = {
	// 获取产品详情
	async getProductDetail({id}) {
		return http.get('/tiny-shop/v1/product/product/view', { id })
	},

	// 删除选中购物车商品
	async getcartItemDel({sku_ids}) {
		return http.post('/tiny-shop/v1/member/cart-item/delete-ids', {sku_ids})
	},

	// 修改购物车商品sku
	async getcartItemUpdateSku({sku_id, new_sku_id}) {
		return http.post('/tiny-shop/v1/member/cart-item/update-sku', { sku_id, new_sku_id })
	},

	// 获取购物车列表
	async getcartItemList() {
		return http.get('/tiny-shop/v1/member/cart-item/index')
	},
	
	// 删除选中购物车商品
	async getcartItemClear(params) {
		return http.post('/tiny-shop/v1/member/cart-item/clear', params)
	},
	
	// 监听购物车商品数量改变
	async getcartItemUpdateNum({sku_id, num}) {
		return http.post('/tiny-shop/v1/member/cart-item/update-num', { sku_id, num })
	},
}

export default cart
