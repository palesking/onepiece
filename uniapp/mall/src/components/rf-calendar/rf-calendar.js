import Calendar from './util.js';
	import rfCalendarItem from './rf-calendar-item'
	export default {
		components: {
			rfCalendarItem
		},
		props: {
			/**
			 * 当前日期
			 */
			date: {
				type: String,
				default: ''
			},
			/**
			 * 打点日期
			 */
			selected: {
				type: Array,
				default () {
					return []
				}
			},
			/**
			 * 是否开启阴历日期
			 */
			lunar: {
				type: Boolean,
				default: false
			},
			/**
			 * 开始时间
			 */
			startDate: {
				type: String,
				default: ''
			},
			/**
			 * 结束时间
			 */
			endDate: {
				type: String,
				default: ''
			},
			/**
			 * 范围
			 */
			range: {
				type: Boolean,
				default: false
			},
			/**
			 * 插入
			 */
			insert: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				show: false,
				weeks: [],
				calendar: {},
				nowDate: '',
				aniMaskShow: false
			}
		},
		watch: {
			selected(newVal) {
				this.cale.setSelectInfo(this.nowDate.fullDate, newVal)
				this.weeks = this.cale.weeks
			}
		},
		created() {
			// 获取日历方法实例
			this.cale = new Calendar({
				date: this.date,
				selected: this.selected,
				startDate: this.startDate,
				endDate: this.endDate,
				range: this.range,
			})
			this.init(this.cale.date.fullDate)
		},
		methods: {
			// 取消穿透
			clean() {},
			init(date) {
				this.weeks = this.cale.weeks
				this.nowDate = this.calendar = this.cale.getInfo(date)
			},
			open() {
				this.show = true
				this.$nextTick(() => {
					this.aniMaskShow = true
				})
			},
			close() {
				this.aniMaskShow = false
				this.$nextTick(() => {
					setTimeout(() => {
						this.show = false
					}, 300)
				})
			},
			confirm() {
				this.setEmit('confirm')
				this.close()
			},
			change(type) {
				if (!this.insert) return
				this.setEmit('change', type)
			},
			monthSwitch() {
				let {
					year,
					month
				} = this.nowDate
				this.$emit('monthSwitch', {
					year,
					month:Number(month)
				})
			},
			setEmit(name, type) {
				let {
					year,
					month,
					date,
					fullDate,
					lunar,
					extraInfo
				} = this.calendar
				this.$emit(name, {
					range: this.cale.multipleStatus,
					year,
					month,
					date,
					fulldate: fullDate,
					lunar,
					extraInfo: extraInfo || {},
					type,
				})
			},
			choiceDate(weeks) {
				if (weeks.disable) return
				this.calendar = weeks
				// 设置多选
				this.cale.setMultiple(this.calendar.fullDate)
				this.weeks = this.cale.weeks
				this.change()
			},
			backtoday() {
				this.cale.setDate(this.date)
				this.weeks = this.cale.weeks
				this.nowDate = this.calendar = this.cale.getInfo(this.date)
				this.change()
			},
			searchAll () {
				this.change(0)
			},
			pre() {
				const preDate = this.cale.getDate(this.nowDate.fullDate, -1, 'month').fullDate
				this.setDate(preDate)
				this.monthSwitch()
			},
			next() {
				const nextDate = this.cale.getDate(this.nowDate.fullDate, +1, 'month').fullDate
				this.setDate(nextDate)
				this.monthSwitch()
			},
			setDate(date) {
				this.cale.setDate(date)
				this.weeks = this.cale.weeks
				this.nowDate = this.cale.getInfo(date)
			}
		}
	}