/**
 * @des 收货地址列表
 * @author lizi
 * @date 2020-03-10 18:00
 * @copyright 2019
 */

import rfPickRegions from '@/components/rf-pick-regions/index.vue';
import user from '@/service/user.js'

export default {
	components: {
		rfPickRegions
	},
	data() {
		return {
			addressData: {
				realname: '',
				mobile: '',
				address_details: '',
				address_name: '请选择地址',
				address: '',
				is_default: false,
				province_id: '',
				city_id: '',
				area_id: ''
			},
			btnLoading: false,
			multiArray: [[], [], []],
			multiIndex: [0, 0, 0],
			loading: true
		};
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 获取选择的地区
		handleGetRegions(e) {
			this.addressData.province_id = e.province_id;
			this.addressData.city_id = e.city_id;
			this.addressData.area_id = e.area_id;
		},
		// 数据初始化
		async initData(options) {
			let title = '新增收货地址';
			if (options.type === 'edit') {
				title = '编辑收货地址';
				await this.getAddressDetail(options.id);
			} else {
				setTimeout(() => {
					this.loading = false;
				}, 1 * 1000);
			}
			this.manageType = options.type;
			uni.setNavigationBarTitle({
				title
			});
		},
		// 获取收货地址
		async getAddressDetail(id) {
			await
			user.getaddressDetail({ id })
			.then(async r => {
				this.addressData = await r.data;
				this.loading = false;
			})
			.catch(() => {
				this.loading = false;
			});
		},
		handleRealNameChange(e) {
			this.addressData.realname = e.detail.value;
		},
		bindAddressDetailsChange(e) {
			this.addressData.address_details = e.detail.value;
		},
		handleMobileChange(e) {
			this.addressData.mobile = e.detail.value;
		},
		switchChange(e) {
			this.addressData.is_default = e.detail.value;
		},
		// 提交
		confirm() {
			let data = this.addressData;
			if (!data.realname) {
				this.$mHelper.toast('请填写收货人姓名');
				return;
			}
			if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(data.mobile)) {
				this.$mHelper.toast('请输入正确的手机号码');
				return;
			}
			this.btnLoading = true;
			if (this.manageType === 'edit') {
				this.handleAddressUpdate(data);
			} else {
				this.handleAddressCreate(data);
			}
		},
		async handleAddressUpdate(data) {
			await
			user.getaddressUpdate({
				realname: data.realname,
				mobile: data.mobile,
				address_details: data.address_details,
				is_default: data.is_default ? 1 : 0,
				province_id: data.province_id,
				city_id: data.city_id,
				area_id: data.area_id
			})
			.then(() => {
				this.btnLoading = false;
				this.$mHelper.toast('收货地址修改成功！');
				this.$mRouter.back();
			})
			.catch(() => {
				this.btnLoading = false;
			});
		},
		async handleAddressCreate(data) {
			await
			user.getaddressCreate({
				realname: data.realname,
				mobile: data.mobile,
				address_details: data.address_details,
				is_default: data.is_default ? 1 : 0,
				province_id: data.province_id,
				city_id: data.city_id,
				area_id: data.area_id
			})
			.then(() => {
				this.btnLoading = false;
				this.$mHelper.toast('收货地址修改成功！');
				this.$mRouter.back();
			})
			.catch(() => {
				this.btnLoading = false;
			});
		}
	}
};