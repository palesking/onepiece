/**
 *@des 商品规范组件
 *@author lizi
 *@blog www.lizidata.com
 *@date 2020/05/03 19:17:15
 */
import rfNumberBox from '@/components/rf-number-box';
export default {
	name: 'rfAttrContent',
	components: { rfNumberBox },
	props: {
		showBuyBtn: {
			type: Boolean,
			default: false
		},
        isSelectedNum: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'buy_now'
        },
		product: {
			type: Object,
			default() {
				return {};
			}
		},
		minNum: {
			type: Number,
			default: 1
		},
		maxNum: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			styleObject: null,
			specList: [],
			specChildList: [],
			skuId: this.product && this.product.sku_id,
			price: null,
			stock: null,
			cartCount: parseInt(this.product.min_buy, 10) || this.minNum || 1,
			picture: null,
			specSelected: [],
			vipPrice: this.$mAssetsPath.vipPrice,
            moneySymbol: this.moneySymbol,
			skuName: null
		};
	},
	computed: {
		currentDiscountPrice() {
            const decimal = this.product.marketing.decimal_reservation_number;
            const discount = this.product.marketing.discount;
            const price = this.price;
            switch (parseInt(decimal, 10)) {
            case -1:
                return (price * discount / 100).toFixed(2);
            case 0:
                return (price * discount / 100).toFixed(0);
            case 1:
                return (price * discount / 100).toFixed(1);
            default:
                return (price * discount / 100).toFixed(2);
			}
		},
		currentProductPrice () {
        let price = this.price;
        if (this.type === 'discount') {
            price = this.currentSkuPrice || this.currentDiscountPrice;
        }
        if (this.type === 'group_buy') {
            price = this.currentSkuPrice || this.product.marketing.ladder.price;
        }
        if (this.product.memberDiscount && this.product.memberDiscount.length !== 0) {
            price = price * (1 - this.product.memberDiscount.discount / 100);
        }
        return parseFloat(price || '0').toFixed(2);
		}
	},
	async mounted() {
		await this.initData();
	},
    methods: {
        initData() {
            this.specList = this.product.base_attribute_format;
            this.specList.forEach(item => {
                this.specChildList = [...this.specChildList, ...item.value];
            });
            if (this.product.sku_name) {
                this.specChildList.forEach(item => {
                    if (this.product.sku_name.indexOf(item.title) !== -1) {
                        item.selected = true;
                        this.specSelected.push(item);
                    }
                });
            }
            let skuStrArr = [];
            this.specSelected.forEach(item => {
                skuStrArr.push(item.base_spec_value_id);
            });
            this.product.sku.forEach(item => {
                if (item.data === skuStrArr.join('-')) {
                    this.stock = item.stock;
            if (this.type === 'buy_now') {
                this.price = item.price;
            } else {
                this.price = this.product.marketing_type === 'wholesale' ? item.wholesale_price : item.price;
            }
                this.skuName = item.name;
                this.skuId = item.id;
            }
            });
        },
		numberChange(data) {
            this.cartCount = parseInt(data.number, 10);
		},
		// 选择规格
		selectSpec(index, pid, type) {
			let list = this.specChildList;
			list.forEach(item => {
				if (item.base_spec_id === pid) {
					this.$set(item, 'selected', false);
				}
			});
			if (parseInt(type, 10) === 3) {
				this.picture = list[index].data;
			}
			if (parseInt(type, 10) === 2) {
				this.styleObject = {
					color: list[index].data,
					border: `1px solid ${list[index].data}`
				};
			}
			this.$set(list[index], 'selected', true);
			// 存储已选择
			/**
			 * 修复选择规格存储错误
			 * 将这几行代码替换即可
			 * 选择的规格存放在specSelected中
			 */
			this.specSelected = [];
			list.forEach(item => {
				if (item.selected === true) {
					this.specSelected.push(item);
				}
			});
			let skuStr = [];
			this.specSelected.forEach(item => {
				skuStr.push(item.base_spec_value_id);
			});
			this.product.sku.forEach(item => {
				if (item.data === skuStr.join('-')) {
					this.picture = item.picture;
					this.stock = item.stock;
					this.price = this.product.marketing_type === 'wholesale' ? item.wholesale_price : item.price;
					this.skuId = item.id;
					this.skuName = item.name;
				}
			});
		},
		toggleSpec(type) {
			if (!this.skuId) {
				this.$mHelper.toast('请选择规格');
				return;
			}
            if (this.stock < 1) {
                this.$mHelper.toast('库存不足');
                return;
            }
            this.$emit('toggle', {
                stock: this.stock,
                skuId: this.skuId,
                cartCount: this.cartCount,
                skuName: this.skuName || this.singleSkuText,
                price: this.price,
                type: type
            });
		}
	}
};