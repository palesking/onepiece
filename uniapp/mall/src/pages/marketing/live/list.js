/**
 * @des 佣金明细
 * @author lizi
 * @date 2020-01-13 11:18
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more.vue';
import moment from '@/utils/moment';
import uniTag from '@/components/uni-tag/uni-tag';
import marketing from '@/service/marketing.js'

export default {
	components: {
		rfLoadMore,
		uniTag
	},
	data() {
		return {
			loading: true,
			typeClass: 'valid',
			state: 1,
			tabCurrentIndex: 0,
			liveTypeList: this.$mConstDataConfig.liveTypeList,
			liveList: [],
			loadingType: 'more',
			page: 1,
			headImg: this.$mAssetsPath.headImg
		};
	},
	filters: {
		time(val) {
			return moment(val * 1000).format('MM/DD HH:mm');
		},
		filterStateText(val) {
			switch (parseInt(val, 10)) {
				case 101:
					return '直播中';
				case 102:
					return '未开始';
				case 103:
					return '已结束';
			}
		},
		filterStateTag(val) {
			switch (parseInt(val, 10)) {
				case 101:
					return 'success';
				case 102:
					return 'warning';
				case 103:
					return 'error';
			}
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.page = 1;
		this.loading = true;
		this.liveList = [];
		this.getLiveList('refresh');
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getLiveList();
	},
	onLoad(options) {
		this.initData(options);
	},
	methods: {
		// 顶部tab点击
		tabClick(index, state) {
			this.page = 1;
			this.liveList.length = 0;
			this.loading = true;
			this.tabCurrentIndex = index;
			this.state = state;
			this.getLiveList();
		},
		// 数据初始化
		initData(options) {
			this.state = options.state || 101;
			if (this.state.toString() === '2') {
				this.tabCurrentIndex = 1;
			} else if (this.state.toString() === '3') {
				this.tabCurrentIndex = 2;
			}
			this.getLiveList();
		},
		// 获取直播记录
		async getLiveList(type) {
			await marketing.getminiProgramLiveIndex( { page: this.page, live_status: this.state} )
			.then(r => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.liveList = [
					...this.liveList,
					...r.data
				];
			})
			.catch(() => {
				this.loading = false;
				if (type === 'refresh') {
					uni.stopPullDownRefresh();
				}
			});
		},
        navToLive(item) {
            const roomId = item.room_id;
            if (!roomId || this.state !== 101) return;
            // #ifdef MP-WEIXIN
            this.$mRouter.push({ route: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${[roomId]}` });
            // #endif
            // #ifndef MP-WEIXIN
            this.$mHelper.toast('请从微信小程序进入带货直播间');
            // #endif
        }
	}
};