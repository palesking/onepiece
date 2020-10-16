import moment from '@/utils/moment';
import rfRate from '@/components/rf-rate/rf-rate';
import order from '@/service/order.js'

export default {
	components: {
		rfRate
	},
	data() {
		return {
			evaluateStat: {},
			labelList: [],
			labelIndex: 0,
			evaluationList: [],
			page: 1,
			headImg: this.$mAssetsPath.headImg,
			singleSkuText: this.singleSkuText
		};
	},
	filters: {
		// 时间格式化
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		},
		// 计算评论与追评时间
		againDay(val) {
			const day =
				moment(val.again_addtime * 1000).format('DD') -
				moment(val.created_at * 1000).format('DD');
			return day ? `${day}天后追加` : '当天追加';
		}
	},
	onLoad(options) {
		this.initData(options);
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.evaluationList.length = 0;
		this.page = 1;
		this.getEvaluationList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getEvaluationList();
	},
	methods: {
		// 初始化数据
		initData(options) {
			this.evaluateStat = JSON.parse(options.evaluateStat);
			if (!this.evaluateStat) return;
			this.id = this.evaluateStat.product_id;
			this.labelList = [
				{ name: '全部', number: options.comment_num, type: {} },
				{
					name: '好评',
					number: this.evaluateStat.good_num || 0,
					type: { explain_type: 3 }
				},
				{
					name: '中评',
					number: this.evaluateStat.ordinary_num || 0,
					type: { explain_type: 2 }
				},
				{
					name: '差评',
					number: this.evaluateStat.negative_num || 0,
					type: { explain_type: 1 }
				},
				// {name:'文字',number: this.evaluateStat.good_num || 0, type: { has_content: 1 }},
				{
					name: '有图',
					number: this.evaluateStat.cover_num || 0,
					type: { has_cover: 1 }
				},
				// {name:'视频',number: this.evaluateStat.good_num || 0, type: { has_video: 1 }},
				{
					name: '追加',
					number: this.evaluateStat.again_num || 0,
					type: { has_again: 1 }
				}
			];
			this.getEvaluationList();
		},
		// 获取评论列表
		async getEvaluationList(type, index = 0, params) {
			if (params) {
				this.page = 1;
				this.evaluationList = [];
			}
			await order.getevaluateList({
				product_id: this.id,
				page: this.page,
				...params
			})
			.then(r => {
				this.labelIndex = index;
				this.evaluationList = [...this.evaluationList, ...r.data];
			})
			.catch(() => {
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		}
	}
};