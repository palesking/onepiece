/**
 * @des 发表评价
 * @author lizi
 * @date 2019-11-27 14:32
 * @copyright 2019
 */

import rfRate from '@/components/rf-rate/rf-rate';
import order from '@/service/order.js'

export default {
	components: { rfRate },
	data() {
		return {
			loading: true,
			productList: [],
			token: null,
			content: '',
			evaluationType: null,
			imageList: [],
			// 评论表单
			is_anonymous: '1',
			moneySymbol: this.moneySymbol,
			orderId: '',
			singleSkuText: this.singleSkuText
		};
	},
	computed: {
		// 限制140字
		wordLimit() {
			return index => {
				return 140 - this.productList[index].content.length;
			};
		}
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 数据初始化
		async initData(options) {
			this.productList.length = 0;
			this.evaluationType = options.type;
			if (options.data) {
				this.productList.push(JSON.parse(options.data));
				this.productList.forEach(item => {
					this.imageList.push([]);
					item.content = '';
					item.scores = 5;
				});
				this.loading = false;
			} else if (options.order_id) {
				this.orderId = options.order_id;
				this.getOrderProductList();
			}
			let title = '发表评价';
			if (options.type === 'add') {
				title = '追加评价';
			}
			// 设置标题
			uni.setNavigationBarTitle({
				title
			});
		},
		async getOrderProductList() {
			await order.getorderProductIndex()
			.then(async r => {
				this.loading = false;
				this.productList = r.data;
				this.productList.forEach(item => {
					this.imageList.push([]);
					item.content = '';
					item.scores = 5;
				});
			});
			this.loading = false;
		},
		// 评分监听事件
		handleScoreChange(e) {
			this.productList[e.index].scores = e.value;
		},
		// 监听是否匿名
		handleAnonymousChange(e) {
			if (e.detail.value) {
				this.is_anonymous = 1;
			} else {
				this.is_anonymous = 0;
			}
		},
		// 删除已选中图片
		close(e, index) {
			this.imageList[index].splice(e, 1);
		},
		// 监听图片上传
		uploadImage(index) {
			// 从相册选择6张图
			const _this = this;
			uni.chooseImage({
				count: 6,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: async function(res) {
					await _this.handleUploadFile(res.tempFilePaths, index);
				}
			});
		},
		// 依次上传图片
		async handleUploadFile(data, index) {
			data.forEach(item => {
				order.getuploadImage({ filePath: item, name: 'file' })
				.then(async r => {
					this.imageList[index].push(r.data.url);
				});
			});
		},
		// 提交评价
		async handleEvaluate(item, index) {
			const params = {};
			if (this.evaluationType !== 'add') {
				let data = [];
				data.push({
					order_product_id: item.id,
					is_anonymous: this.is_anonymous,
					covers: this.imageList[index],
					scores: item.scores,
					content: item.content
				});
				params.evaluate = JSON.stringify(data);
				this.handleEvaluateCreate(params);
			} else {
				params.order_product_id = item.id;
				params.again_content = item.content;
				params.again_covers = JSON.stringify(this.imageList[index]);
				this.handleEvaluateAgain(params);
			}
		},
		// 发表评价
		async handleEvaluateCreate(params) {
			await order.getevaluateCreate().then(() => {
				if (this.productList.length === 1) {
					this.$mRouter.back();
				} else {
					this.getOrderProductList();
				}
			});
		},
		// 追加评价
		async handleEvaluateAgain(params) {
			await order.getevaluateAgain().then(() => {
				this.$mRouter.back();
			});
		}
	}
};