	
import setting from '@/service/setting.js'

export default {
	data() {
		return {
			msgContents: [
				'界面显示错乱',
				'启动缓慢，卡出翔了',
				'UI无法直视，丑哭了',
				'偶发性崩溃'
			],
			stars: [1, 2, 3, 4, 5],
			imageList: [],
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
			],
			sendDate: {
				type: '1',
				covers: '',
				content: '',
				contact_way: ''
			},
			btnLoading: false
		};
	},
	methods: {
		// 监听反馈类型事件
		handleFeedbackTypeChange(e) {
			this.sendDate.type = e.detail.value;
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
				set.getuploadImage({ filePath: item, name: 'file' })
				.then(r => {
					_this.imageList.push(r.data.url);
				});
			});
		},
		// 删除已选中图片
		close(e) {
			this.imageList.splice(e, 1);
		},
		// 快速输入
		chooseMsg() {
			uni.showActionSheet({
				itemList: this.msgContents,
				success: res => {
					this.sendDate.content = this.msgContents[res.tapIndex];
				}
			});
		},
		// 发送反馈
		async send() {
			this.btnLoading = true;
			this.sendDate.covers = JSON.stringify(this.imageList);
			await
			set.getopinionCreate(...this.sendDate).then(() => {
				this.btnLoading = false;
				this.$mRouter.back();
			})
			.catch(() => {
				this.btnLoading = false;
			});
		}
	}
};