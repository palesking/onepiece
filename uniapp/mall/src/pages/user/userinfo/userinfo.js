/**
 * @des 修改用户信息
 *
 * @author stav stavyan@qq.com
 * @date 2020-01-10 14:28
 * @copyright 2019
 */

import avatar from '@/components/rf-avatar/rf-avatar.vue';
import moment from '@/utils/moment.js';
import user from '@/service/user.js'

export default {
	components: { avatar },
	data() {
		return {
			loadProgress: 0,
			CustomBar: this.CustomBar,
			profileInfo: {},
			genders: [
				{
					value: '0',
					name: '未知'
				},
				{
					value: '1',
					name: '男'
				},
				{
					value: '2',
					name: '女'
				}
			],
			date: moment().format('YYYY-MM-DD'),
			token: null,
			loading: true,
			headImg: this.$mAssetsPath.headImg,
			userBg: this.$mAssetsPath.userBg,
			btnLoading: false
		};
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 上传头像
		uploadImage() {
			// 从相册选择图片
			const _this = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: function(res) {
					_this.handleUploadFile(res.tempFilePaths);
				}
			});
		},
		// 上传头像
		handleUploadFile(data) {
			const _this = this;
			const filePath = data.path || data[0];
            user.getuploadImage({
                filePath,
                name: 'file'
            })
            .then(r => {
                _this.profileInfo.head_portrait = r.data.url;
                _this.handleUpdateInfo(_this.profileInfo);
            });
		},
		// 监听日期更改
		bindDateChange(e) {
			this.date = e.target.value;
		},
		// 监听性别更改
		handleGenderChange(e) {
			this.profileInfo.gender = e.detail.value;
		},
		// 数据初始化
		initData() {
			this.token = uni.getStorageSync('accessToken') || undefined;
			this.getMemberInfo();
		},
		// 获取用户信息
		async getMemberInfo() {
			await user.getmemberInfo()
            .then(r => {
                this.loading = false;
                this.profileInfo = r.data;
                this.date = this.profileInfo.birthday;
            })
            .catch(() => {
                this.loading = false;
            });
		},
		// 更新用户信息
		async toUpdateInfo() {
			this.handleUpdateInfo();
		},
		// 更新用户信息
		async handleUpdateInfo() {
			this.btnLoading = true;
			this.loadProgress = this.loadProgress + 6;
			const timer = setInterval(() => {
				this.loadProgress = this.loadProgress + 6;
			}, 50);
			await 
            this.$http
            .put(`/tiny-shop/v1/member/member/update?id=${this.profileInfo.id}`, {
                ...this.profileInfo,
                birthday: this.date
            })
            .then(() => {
                clearInterval(timer);
                this.loadProgress = 0;
                this.$mHelper.toast('恭喜您, 资料修改成功!');
                setTimeout(() => {
                    this.$mRouter.back();
                }, 1 * 1000);
            })
            .catch(() => {
                this.btnLoading = false;
            });
		}
	}
};