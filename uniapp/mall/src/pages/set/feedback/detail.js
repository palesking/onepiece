/**
 * @des 意见反馈详情
 *
 * @author lizi
 * @date 2020-03-11 10:20
 * @copyright 2019
 */

import setting from '@/service/setting.js'


export default {
	data() {
		return {
			feedbackDetail: {},
			feedbackType: [
				{
					value: '1',
					name: '功能建议'
				},
				{
					value: '2',
					name: 'BUG反馈'
				},
				{
					value: '3',
					name: '业务咨询'
				}
			]
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 数据初始化
		initData(options) {
			this.getFeedbackDetail(options.id);
		},
		// 获取反馈详情
		async getFeedbackDetail(id) {
			await
			setting.getopinionDetail({id}).then(r => {
				this.feedbackDetail = r.data;
			});
		}
	}
};