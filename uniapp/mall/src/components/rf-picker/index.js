export default {
	data() {
		return {
			pickerChangeValue: [],
			pickerValue: [],
			pickerValueArrayChange: true,
			modeChange: false,
			pickerValueSingleArray: [],
			pickerValueHour: [],
			pickerValueMinute: [],
			pickerValueMulArray: [],
			pickerValueMulTwoOne: [],
			pickerValueMulTwoTwo: [],
			pickerValueMulThreeOne: [],
			pickerValueMulThreeTwo: [],
			pickerValueMulThreeThree: [],
			/* 是否显示控件 */
			showPicker: false
		};
	},
	props: {
		/* mode */
		mode: {
			type: String,
			default: 'selector'
		},
		/* picker 数值 */
		pickerValueArray: {
			type: Array,
			default() {
				return [];
			}
		},
		/* 默认值 */
		pickerValueDefault: {
			type: Array,
			default() {
				return [];
			}
		},
		/* 几级联动 */
		deepLength: {
			type: Number,
			default: 2
		}
	},
	watch: {
		mode(oldVal, newVal) {
			this.modeChange = true;
		},
		pickerValueArray(val) {
			this.initPicker(val);
		}
	},
	methods: {
		initPicker(valueArray) {
			let pickerValueArray = valueArray;
			this.pickerValue = this.pickerValueDefault;
			// 初始化多级联动
			if (this.mode === 'selector') {
				this.pickerValueSingleArray = valueArray;
			} else if (this.mode === 'timeSelector') {
				this.modeChange = false;
				let hourArray = [];
				let minuteArray = [];
				for (let i = 0; i < 24; i++) {
					hourArray.push({
						value: i,
						label: i > 9 ? `${i} 时` : `0${i} 时`
					});
				}
				for (let i = 0; i < 60; i++) {
					minuteArray.push({
						value: i,
						label: i > 9 ? `${i} 分` : `0${i} 分`
					});
				}
				this.pickerValueHour = hourArray;
				this.pickerValueMinute = minuteArray;
			} else if (this.mode === 'multiSelector') {
				this.pickerValueMulArray = valueArray;
			} else if (
				this.mode === 'multiLinkageSelector' &&
				this.deepLength === 2
			) {
				// 两级联动
				let pickerValueMulTwoOne = [];
				let pickerValueMulTwoTwo = [];
				// 第一列
				for (let i = 0, length = pickerValueArray.length; i < length; i++) {
					pickerValueMulTwoOne.push(pickerValueArray[i]);
				}
				// 渲染第二列
				// 如果有设定的默认值
				if (this.pickerValueDefault.length === 2) {
					let num = this.pickerValueDefault[0];
					for (
						let i = 0, length = pickerValueArray[num].children.length;
						i < length;
						i++
					) {
						pickerValueMulTwoTwo.push(pickerValueArray[num].children[i]);
					}
				} else {
					for (
						let i = 0, length = pickerValueArray[0].children.length;
						i < length;
						i++
					) {
						pickerValueMulTwoTwo.push(pickerValueArray[0].children[i]);
					}
				}
				this.pickerValueMulTwoOne = pickerValueMulTwoOne;
				this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
			} else if (
				this.mode === 'multiLinkageSelector' &&
				this.deepLength === 3
			) {
				let pickerValueMulThreeOne = [];
				let pickerValueMulThreeTwo = [];
				let pickerValueMulThreeThree = [];
				// 第一列
				for (let i = 0, length = pickerValueArray.length; i < length; i++) {
					pickerValueMulThreeOne.push(pickerValueArray[i]);
				}
				// 渲染第二列
				this.pickerValueDefault =
					this.pickerValueDefault.length === 3
						? this.pickerValueDefault
						: [0, 0, 0];
				if (this.pickerValueDefault.length === 3) {
					let num = this.pickerValueDefault[0];
					for (
						let i = 0, length = pickerValueArray[num].children.length;
						i < length;
						i++
					) {
						pickerValueMulThreeTwo.push(pickerValueArray[num].children[i]);
					}
					// 第三列
					let numSecond = this.pickerValueDefault[1];
					for (
						let i = 0,
							length =
								pickerValueArray[num].children[numSecond].children.length;
						i < length;
						i++
					) {
						pickerValueMulThreeThree.push(
							pickerValueArray[num].children[numSecond].children[i]
						);
					}
				}
				this.pickerValueMulThreeOne = pickerValueMulThreeOne;
				this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
				this.pickerValueMulThreeThree = pickerValueMulThreeThree;
			}
		},
		show() {
			setTimeout(() => {
				if (this.pickerValueArrayChange || this.modeChange) {
					this.initPicker(this.pickerValueArray);
					this.showPicker = true;
					this.pickerValueArrayChange = false;
					this.modeChange = false;
				} else {
					this.showPicker = true;
				}
			}, 0);
		},
		maskClick() {
			this.pickerCancel();
		},
		pickerCancel() {
			this.showPicker = false;
			this._initPickerVale();
			let pickObj = {
				index: this.pickerValue,
				value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
				label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
			};
			this.$emit('onCancel', pickObj);
		},
		pickerConfirm(e) {
			this.showPicker = false;
			this._initPickerVale();
			let pickObj = {
				index: this.pickerValue,
				value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
				label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
			};
			this.$emit('onConfirm', pickObj);
		},
		showPickerView() {
			this.showPicker = true;
		},
		pickerChange(e) {
			this.pickerValue = e.mp.detail.value;
			let pickObj = {
				index: this.pickerValue,
				value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
				label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
			};
			this.$emit('onChange', pickObj);
		},
		pickerChangeMul(e) {
			if (this.deepLength === 2) {
				let pickerValueArray = this.pickerValueArray;
				let changeValue = e.mp.detail.value;
				// 处理第一列滚动
				if (changeValue[0] !== this.pickerValue[0]) {
					let pickerValueMulTwoTwo = [];
					// 第一列滚动第二列数据更新
					for (
						let i = 0,
							length = pickerValueArray[changeValue[0]].children.length;
						i < length;
						i++
					) {
						pickerValueMulTwoTwo.push(
							pickerValueArray[changeValue[0]].children[i]
						);
					}
					this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
					// 第二列初始化为 0
					changeValue[1] = 0;
				}
				this.pickerValue = changeValue;
			} else if (this.deepLength === 3) {
				let pickerValueArray = this.pickerValueArray;
				let changeValue = e.mp.detail.value;
				let pickerValueMulThreeTwo = [];
				let pickerValueMulThreeThree = [];
				// 重新渲染第二列
				// 如果是第一列滚动
				if (changeValue[0] !== this.pickerValue[0]) {
					this.pickerValueMulThreeTwo = [];
					for (
						let i = 0,
							length = pickerValueArray[changeValue[0]].children.length;
						i < length;
						i++
					) {
						pickerValueMulThreeTwo.push(
							pickerValueArray[changeValue[0]].children[i]
						);
					}
					// 重新渲染第三列
					for (
						let i = 0,
							length =
								pickerValueArray[changeValue[0]].children[0].children.length;
						i < length;
						i++
					) {
						pickerValueMulThreeThree.push(
							pickerValueArray[changeValue[0]].children[0].children[i]
						);
					}
					changeValue[1] = 0;
					changeValue[2] = 0;
					this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
					this.pickerValueMulThreeThree = pickerValueMulThreeThree;
				} else if (changeValue[1] !== this.pickerValue[1]) {
					// 第二列滚动
					// 重新渲染第三列
					this.pickerValueMulThreeThree = [];
					pickerValueMulThreeTwo = this.pickerValueMulThreeTwo;
					for (
						let i = 0,
							length =
								pickerValueArray[changeValue[0]].children[changeValue[1]]
									.children.length;
						i < length;
						i++
					) {
						pickerValueMulThreeThree.push(
							pickerValueArray[changeValue[0]].children[changeValue[1]]
								.children[i]
						);
					}
					changeValue[2] = 0;
					this.pickerValueMulThreeThree = pickerValueMulThreeThree;
				}
				this.pickerValue = changeValue;
			}
			let pickObj = {
				index: this.pickerValue,
				value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
				label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
			};
			this.$emit('onChange', pickObj);
		},
		// 获取 pxikerLabel
		_getPickerLabelAndValue(value, mode) {
			let pickerLable;
			let pickerGetValue = [];
			// selector
			if (mode === 'selector') {
				pickerLable = this.pickerValueSingleArray[value].label;
				pickerGetValue.push(this.pickerValueSingleArray[value].value);
			} else if (mode === 'timeSelector') {
				pickerLable = `${this.pickerValueHour[value[0]].label}-${
					this.pickerValueMinute[value[1]].label
				}`;
				pickerGetValue.push(this.pickerValueHour[value[0]].value);
				pickerGetValue.push(this.pickerValueHour[value[1]].value);
			} else if (mode === 'multiSelector') {
				for (let i = 0; i < value.length; i++) {
					if (i > 0) {
						pickerLable +=
							this.pickerValueMulArray[i][value[i]].label +
							(i === value.length - 1 ? '' : '-');
					} else {
						pickerLable = this.pickerValueMulArray[i][value[i]].label + '-';
					}
					pickerGetValue.push(this.pickerValueMulArray[i][value[i]].value);
				}
			} else if (mode === 'multiLinkageSelector') {
				/* eslint-disable indent */
				pickerLable =
					this.deepLength === 2
						? `${this.pickerValueMulTwoOne[value[0]].label}-${this.pickerValueMulTwoTwo[value[1]].label}`
						: `${this.pickerValueMulThreeOne[value[0]].label}-${this.pickerValueMulThreeTwo[value[1]].label}-${this.pickerValueMulThreeThree[value[2]].label}`;
				if (this.deepLength === 2) {
					pickerGetValue.push(this.pickerValueMulTwoOne[value[0]].value);
					pickerGetValue.push(this.pickerValueMulTwoTwo[value[1]].value);
				} else {
					pickerGetValue.push(this.pickerValueMulThreeOne[value[0]].value);
					pickerGetValue.push(this.pickerValueMulThreeTwo[value[1]].value);
					pickerGetValue.push(this.pickerValueMulThreeThree[value[2]].value);
				}
				/* eslint-enable indent */
			}
			return {
				label: pickerLable,
				value: pickerGetValue
			};
		},
		// 初始化 pickerValue 默认值
		_initPickerVale() {
			if (this.pickerValue.length === 0) {
				if (this.mode === 'selector') {
					this.pickerValue = [0];
				} else if (this.mode === 'multiSelector') {
					this.pickerValue = new Int8Array(this.pickerValueArray.length);
				} else if (
					this.mode === 'multiLinkageSelector' &&
					this.deepLength === 2
				) {
					this.pickerValue = [0, 0];
				} else if (
					this.mode === 'multiLinkageSelector' &&
					this.deepLength === 3
				) {
					this.pickerValue = [0, 0, 0];
				}
			}
		}
	}
};