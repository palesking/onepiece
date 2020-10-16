/**
 * @des 发表评价
 * @author lizi
 * @date 2019-11-27 14:32
 * @copyright 2019
 */

import listCell from '@/components/rf-list-cell';
import order from '@/service/order.js'

export default {
	data() {
		return {
			productInfo: {},
			refundType: 1,
			refund_type: 1,
			refund_reason: '',
			refund_explain: '',
			imageList: [],
			moneySymbol: this.moneySymbol,
			refundTypeArr: [
				{
					value: '1',
					name: '仅退款'
				},
				{
					value: '2',
					name: '退货退款'
				}
			],
			singleSkuText: this.singleSkuText,
			msgContents: [
				'商品信息描述不符',
				'退运费',
				'质量问题',
				'少件含缺少配件',
				'包装/商品损坏/污渍',
				'未按约定时间发货',
				'发票问题',
				'卖家发错货',
				'其他'
			]
		};
	},
	components: {
		listCell
	},
	computed: {
		wordLimit() {
			return 140 - this.refund_reason.length;
		}
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 数据初始化
		initData(options) {
			this.productInfo = JSON.parse(options.data);
			this.refundType = options.refundType;
			let title = '仅退款';
			if (parseInt(this.refundType, 10) === 1) {
				title = '仅退款';
			} else {
				title = '仅退款/退货退款';
			}
			uni.setNavigationBarTitle({
				title
			});
		},
		// 快速输入
		chooseRefundReasonType() {
			uni.showActionSheet({
				itemList: this.msgContents,
				success: res => {
					this.refund_reason = this.msgContents[res.tapIndex];
				}
			});
		},
		// 打开相册选图
		uploadImage() {
			const _this = this;
			uni.chooseImage({
				count: 9, // 最多一次可以选择的图片张数
				sizeType: ['compressed'],
				sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机
				success: function(res) {
					if (_this.imageList.length + res.tempFiles.length > 9) {
						_this.$mHelper.toast('不要贪心哦，最多只可上传9张照片');
						return;
					}
					_this.handleUploadFile(res.tempFilePaths);
				}
			});
		},
		// 依次上传图片
		handleUploadFile(data) {
			const _this = this;
			data.forEach(item => {
				order.getuploadImage().then(r => {
					_this.imageList.push(r.data.url);
				});
			});
		},
		// 删除已选中图片
		close(e) {
			this.imageList.splice(e, 1);
		},
		handleRefundTypeChange(e) {
			this.refund_type = e.detail.value;
		},
		// 跳转页面
		navTo(route) {
			this.$mRouter.push({ route });
		},
		// 退货/退款
		async handleOrderRefundApply(e) {
			const formData = e.detail.value;
			if (parseInt(this.refundType, 10) === 1) {
				formData.refund_type = this.refundType;
			}
			formData['refund_evidence'] = JSON.stringify(this.imageList);
			formData['refund_explain'] = this.refund_explain;
			formData['refund_reason'] = this.refund_reason;
			if (this.refundType.toString() === '3') {
				await this.handleOrderCustomerRefundApply(this.productInfo.id, formData);
			} else {
				await this.handleOrderRefundApplyOperation(this.productInfo.id, formData);
			}
		},
		async handleOrderRefundApplyOperation(id, formData) {
			await order.getorderRefundApply().then(() => {
				this.$mHelper.toast('申请成功');
				this.$mRouter.back();
			});
		},
		async handleOrderCustomerRefundApply(id, formData) {
			await order.getorderCustomerRefundApply().then(() => {
				this.$mHelper.toast('申请成功');
				this.$mRouter.back();
			});
		}
	}
};