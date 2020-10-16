
import { http } from '@/service/base.js';

const marketing = {
	// 获取直播记录
	async getminiProgramLiveIndex( {page,live_status} ) {
		return http.get('/tiny-shop/v1/marketing/mini-program-live/index', { page,live_status } )
	},
}

export default marketing
