
import setting from '@/service/setting.js'


export default {
	data() {
		return {
			invoiceData: {
				type: 2,
				title: '',
				duty_paragraph: '',
				is_default: ''
			},
			invoiceType: [
				{ name: '公司', value: 1 },
				{ name: '个人', value: 2 }
			],
			reqBody: {},
			btnLoading: false
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		async initData(options) {
			let title = '新增发票';
			if (options.type === 'edit') {
				title = '编辑发票';
				await this.getInvoiceDetail(options.id);
			}
			this.manageType = options.type;
			uni.setNavigationBarTitle({
				title
			});
		},
		// 获取发票详情
		async getInvoiceDetail(id) {
			await
			setting.getinvoiceDetail({ id }).then(async r => {
				this.invoiceData = r.data;
			});
		},
		handleInvoiceTypeChange(e) {
			this.invoiceData.type = e.detail.value;
		},
		switchChange(e) {
			this.invoiceData.is_default = e.detail.value ? '1' : '0';
		},
		// 提交
		confirm() {
			this.reqBody['title'] = this.invoiceData['title'];
			let checkSendCode;
			if (parseInt(this.invoiceData['type'], 10) === 1) {
				this.reqBody['duty_paragraph'] = this.invoiceData['duty_paragraph'];
				checkSendCode = this.$mGraceChecker.check(
					this.reqBody,
					this.$mFormRule.cInvoiceRule
				);
			} else if (parseInt(this.invoiceData['type'], 10) === 2) {
				checkSendCode = this.$mGraceChecker.check(
					this.reqBody,
					this.$mFormRule.pInvoiceRule
				);
			}
			if (!checkSendCode) {
				this.$mHelper.toast(this.$mGraceChecker.error);
				return;
			}
			this.btnLoading = true;
			if (this.manageType === 'edit') {
				this.handleInvoiceUpdate(this.invoiceData);
			} else {
				this.handleInvoiceCreate(this.invoiceData);
			}
		},
		// 编辑发票
		async handleInvoiceUpdate(params) {
			await
			setting.getinvoiceUpdate(params).then(() => {
				this.btnLoading = false;
				this.$mHelper.toast('恭喜您, 发票修改成功！');
				this.$mRouter.back();
			})
			.catch(() => {
				this.btnLoading = false;
			});
		},
		// 新增发票
		async handleInvoiceCreate(params) {
			await
			setting.getorderInvoiceCreate(params).then(() => {
				this.btnLoading = false;
				this.$mHelper.toast('恭喜您, 发票添加成功！');
				this.$mRouter.back();
			})
			.catch(() => {
				this.btnLoading = false;
			});
		}
	}
};