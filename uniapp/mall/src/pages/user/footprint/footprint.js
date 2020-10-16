/**
 * @des 我的足迹
 *
 * @author lizi
 * @date 2019-11-22 10:47
 * @copyright 2019
 */

import rfLoadMore from '@/components/rf-load-more/rf-load-more';
import rfCalendar from '@/components/rf-calendar/rf-calendar.vue';
import moment from '@/utils/moment';
import $mAssetsPath from '@/config/assets.js';
import user from '@/service/user.js'

export default {
	components: {
		rfLoadMore,
		rfCalendar
	},
	data() {
		return {
			footPrintList: [],
			page: 1,
			loadingType: 'more',
			token: null,
			startTime: moment()
				.startOf('day')
				.format('X'),
			endTime: moment()
				.endOf('day')
				.format('X'),
			options: [{ text: '删除', style: { backgroundColor: '#fa436a' } }],
			loading: true,
			moneySymbol: this.moneySymbol,
			// 控制滑动效果
			theIndex: null,
			oldIndex: null
		};
	},
	filters: {
		// 时间格式化
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm:ss');
		},
		marketingTypeTag(marketingType) {
			let tag;
			switch (marketingType) {
				case 'discount':
					tag = $mAssetsPath.discountTag;
					break;
				case 'bargain':
					tag = $mAssetsPath.bargainTag;
					break;
				case 'group_buy':
					tag = $mAssetsPath.groupTag;
					break;
				case 'wholesale':
					tag = $mAssetsPath.wholesaleTag;
					break;
			}
			return tag;
		}
	},
	// 加载更多
	onReachBottom() {
        if (this.loadingType === 'nomore') return;
		this.page++;
		this.getFootPrintList();
	},
	onLoad() {
		this.initData();
	},
	methods: {
		// 监听日期变化
		async handleDateChange(e) {
			this.page = 1;
			this.footPrintList = [];
			if (parseInt(e.type) !== 0) {
				this.startTime =
					(await moment(
						`${e.year}-${e.month}-${e.date} 00:00:00`,
						'YYYY-MM-DD HH:mm:ss'
					).valueOf()) / 1000;
				this.endTime =
					(await moment(
						`${e.year}-${e.month}-${e.date + 1} 00:00:00`,
						'YYYY-MM-DD HH:mm:ss'
					).valueOf()) / 1000;
			} else {
				this.startTime = undefined;
				this.startTime = undefined;
			}
			this.loading = true;
			this.getFootPrintList();
		},
		// 删除足迹
		async handleDeleteFootPrint(id) {
			await
			user.getfootPrintDel({ page: this.page })
			.then(() => {
				this.$mHelper.toast('删除足迹成功');
				this.page = 1;
				this.footPrintList.length = 0;
				this.getFootPrintList();
				this.oldIndex = null;
				this.theIndex = null;
			});
		},
		// 数据初始化
		initData() {
			this.getFootPrintList();
		},
		// 获取我的足迹列表
		async getFootPrintList() {
			const params = {};
			params.page = this.page;
			// 起始时间和结束时间
			if (this.startTime && this.endTime) {
				params.start_time = this.startTime;
				params.end_time = this.endTime;
			}
			await
			user.getfootPrintList({ ...params })
			.then(r => {
				this.loading = false;
				this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
				this.footPrintList = [...this.footPrintList, ...r.data];
			})
			.catch(() => {
				this.loading = false;
			});
		},
		// 控制左滑删除效果
		touchStart(index, event) {
			// 多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			this.oldIndex = this.theIndex;
			this.theIndex = null;
			// 初始坐标
			this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
		},
		touchMove(index, event) {
			// 多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			let moveX = event.touches[0].pageX - this.initXY[0];
			let moveY = event.touches[0].pageY - this.initXY[1];

			if (this.isStop || Math.abs(moveX) < 5) {
				return;
			}
			if (Math.abs(moveY) > Math.abs(moveX)) {
				// 竖向滑动-不触发左滑效果
				this.isStop = true;
				return;
			}

			if (moveX < 0) {
				this.theIndex = index;
				this.isStop = true;
			} else if (moveX > 0) {
				if (this.theIndex != null && this.oldIndex === this.theIndex) {
					this.oldIndex = index;
					this.theIndex = null;
					this.isStop = true;
					setTimeout(() => {
						this.oldIndex = null;
					}, 150);
				}
			}
		},
		touchEnd(index, $event) {
			// 结束禁止触发效果
			this.isStop = false;
		},
		// 跳转至商品详情
		navTo(type, id) {
			let route = `/pages/product/product?id=${id}`;
			switch (type) {
				case 'discount':
					route = `/pages/marketing/discount/product?id=${id}`;
					break;
				case 'bargain':
					route = `/pages/marketing/bargain/product?id=${id}`;
					break;
				case 'group_buy':
					route = `/pages/marketing/group/product?id=${id}`;
					break;
				case 'wholesale':
					route = `/pages/marketing/wholesale/product?id=${id}`;
					break;
			}
			this.$mRouter.push({ route });
		}
	}
};