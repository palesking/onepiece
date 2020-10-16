/**
	 *@des 封装商品详情
	 *@author stav stavyan@qq.com
	 *@blog https://stavtop.club
	 *@date 2020/05/15 16:22:24
	 */
	import rfItemPopup from '@/components/rf-item-popup';
	import moment from '@/utils/moment.js';
	import rfAttrContent from '@/components/rf-attr-content/index.vue';
	import rfRate from '@/components/rf-rate/rf-rate';
	import rfBadge from '@/components/rf-badge/rf-badge';
	import uniTag from '@/components/uni-tag/uni-tag';
	import rfNav from '@/components/rf-nav';
	import rfLive from '@/components/rf-live';
	// import { cartItemCount, cartItemCreate } from '@/api/product';
	// import { collectCreate, collectDel, pickupPointIndex, transmitCreate } from '@/api/basic';
    // import { couponReceive, addressList } from '@/api/userInfo';
	import { mapMutations } from 'vuex';
    export default {
        name: 'rfProductDetail',
        props: {
            product: {
                type: Object,
                default() {
                    return {
                    };
                }
            },
            userInfo: {
                type: Object,
                default() {
                    return {};
                }
            },
            url: {
                type: String,
                default: ''
            },
            marketType: {
                type: String,
                default: 'buy_now'
            }
        },
		components: {
			rfNav,
			rfItemPopup,
			rfBadge,
			rfLive,
			rfRate,
			uniTag,
			rfAttrContent
		},
		data() {
			return {
                appServiceQr: this.$mSettingConfig.appServiceQr,
				kefuShow: false,
				addressClass: 'none',
				canvasShow: true,
				logo: this.$mSettingConfig.appLogo,
				vipPrice: this.$mAssetsPath.vipPrice,
				posterShow: false,
				serviceClass: 'none', // 服务弹窗
				ladderPreferentialClass: 'none', // 阶梯优惠弹窗
				attributeValueClass: 'none', // 商品参数弹窗
				specClass: 'none', // 商品参数弹窗
				couponClass: 'none', // 优惠券弹窗
				shareClass: 'none', // 分享引导弹窗
				fullGiveClass: 'none', // 满减送弹窗
				cartType: null, // 下单类型
				couponList: [], // 优惠券列表
				currentStock: null,
				currentSkuPrice: null,
				currentSkuName: null,
				currentCartCount: 1,
				evaluateList: [],
				hasLogin: this.$mStore.getters.hasLogin,
				cartNum: uni.getStorageSync('cartNum'),
				addressTypeList: this.$mConstDataConfig.addressTypeList,
				tabCurrentIndex: 0,
				loading: true,
				errorInfo: '',
				headImg: this.$mAssetsPath.headImg,
				isPointExchange: false,
				shareBg: this.$mAssetsPath.shareBg,
				appServiceType: this.$mSettingConfig.appServiceType,
				productPosterQrType: this.$mSettingConfig.productPosterQrType,
				appName: this.$mSettingConfig.appName,
				shareFrom: '',
				poster: {},
				promoCode: '',
				addressList: [],
                moneySymbol: this.moneySymbol,
				state: 1,
                singleSkuText: this.singleSkuText,
				thirdPartyQrCodeImg: ''
			};
		},
		async onShareAppMessage () {
            // #ifdef MP
            await this.$http.post('/tiny-shop/v1/common/transmit/create', {
                topic_type: 'product',
                topic_id: this.productId
            }).then(() => {
                return {
                    title: this.productDetail.name,
                    path: `/pages/product/product?id=${this.productId}`
                };
            });
            // #endif
		},
		filters: {
			time(val) {
				return moment(val * 1000).format('YYYY-MM-DD HH:mm');
			},
			pointExchangeTypeFilter(val) {
				const type = [
					'',
					'非积分兑换',
					'积分加现金',
					'积分兑换或直接购买',
					'只支持积分兑换'
				];
				return type[parseInt(val, 10)];
			},
			integralGiveTypeFilter(val) {
				const type = ['固定积分', '百分比'];
				return type[parseInt(val, 10)];
			},
			givePointFilter(val) {
				return val.integral_give_type === '1'
					? Math.round((parseInt(val.give_point, 10) / 100) * parseInt(val.minSkuPrice, 10))
					: parseInt(val.give_point, 10);
			}
		},
        computed: {
            type() {
                return 'buy_now';
            },
			// 购买按钮禁用
			buyBtnDisabled() {
				return parseInt(this.currentStock || this.product.stock, 10) === 0;
			},
			// 添加购物车按钮禁用
			addCartBtnDisabled() {
				return (
					this.product.point_exchange_type === '2' ||
					this.product.point_exchange_type === '4' ||
					parseInt(this.currentStock || this.product.stock, 10) === 0 ||
					this.product.is_virtual === '1'
				);
			},
			// 最小购买数量
			minNum() {
				return 1;
			},
			// 最小购买数量
			maxNum() {
				let maxNum = 0;
				return maxNum;
			},
			favorite () {
				return !!this.product.myCollect;
			},
			// 计算倒计时时间
			second() {
				return function(val) {
					return Math.floor(val - new Date() / 1000);
				};
			},
			currentProductPrice () {
                let price;
            if (this.type === 'buy_now') {
            if (this.product.memberDiscount && this.product.memberDiscount.length !== 0) {
            // eslint-disable-next-line
            this.product.minSkuPrice = this.product.minSkuPrice * (1 - this.product.memberDiscount.discount / 100).toFixed(2);
            // eslint-disable-next-line
            this.product.maxSkuPrice = this.product.maxSkuPrice ? (this.product.maxSkuPrice * (1 - this.product.memberDiscount.discount / 100)).toFixed(2) : 0;
            }
            // eslint-disable-next-line
            price = this.currentSkuPrice || ((this.product.maxSkuPrice && (this.product.minSkuPrice !== this.product.maxSkuPrice)) ? (this.product.minSkuPrice + ' ~ ' + this.product.maxSkuPrice) : parseFloat(this.product.minSkuPrice).toFixed(2));
            return price;
            }
            return parseFloat(price || '0').toFixed(2);
			}
		},
        methods: {
            ...mapMutations(['setCartNum']),
			// 返回上一页
			navBack() {
				this.$mRouter.back();
			},
            hide() {
                this.kefuShow = false;
            },
            // 分享商品
            share() {
            // #ifdef H5
            if (this.$mPayment.isWechat()) {
            this.shareClass = 'show';
            } else {
            this.$mHelper.h5Copy(this.url);
            }
            // #endif
            // #ifdef APP-PLUS
				this.$mHelper.handleAppShare(this.url, this.appName, this.product.name, this.product.picture);
				// #endif
			},
			// 通用跳转
			navTo(route) {
				if (this.appServiceType === '1' && route === '/pages/product/service/index') {
					this.kefuShow = true;
					return;
				}
				if (!this.hasLogin) {
					this.$mHelper.backToLogin();
				} else {
					if (this.appServiceType === '0') {
						this.$mHelper.toast('暂不提供客服功能');
					} else {
						this.$mRouter.push({ route });
					}
				}
			},
			// 弹窗显示
			showPopupService(type, list) {
				if (list.length === 0) return;
				this[type] = 'show';
			},
			// 关闭服务弹窗
			hideService() {
				this.specClass = 'none';
				this.couponClass = 'none';
				this.serviceClass = 'none';
				this.ladderPreferentialClass = 'none';
				this.attributeValueClass = 'none';
				this.fullGiveClass = 'none';
			},
			// 获取优惠券
			async getCoupon(item) {
				if (!this.hasLogin) {
					await this.$mHelper.backToLogin();
					return;
				}
				await this.$http
                .post('/tiny-shop/v1/marketing/coupon-type/create', {
                    id: item.id
                })
                .then(() => {
                    this.$mHelper.toast('领取成功');
                });
			},
			// 跳转至评价列表
			toEvaluateList() {
				if (!this.product.evaluateStat || parseInt(this.product.comment_num, 10) === 0) return;
				this.$mRouter.push({
					route: `/pages/order/evaluation/list?comment_num=${
						this.product.comment_num
					}&evaluateStat=${JSON.stringify(this.product.evaluateStat)}`
				});
			},
			// 顶部tab点击
			tabClick(index, state) {
				this.page = 1;
				this.addressList.length = 0;
				this.tabCurrentIndex = index;
				this.state = state;
				const api = (this.state === 1 ? '/tiny-shop/v1/member/address/index' : '/tiny-shop/v1/common/pickup-point/index');
				this.getAddressList(api);
			},	// 获取收货地址列表
			async getAddressList(api) {
				await this.$http
					.get(api, {
					})
					.then(r => {
						this.addressList = r.data;
					});
			},
			// 规格弹窗开关
			toggleSpec(row) {
				if (!this.product.id) return;
				if (this.specClass === 'show') {
					this.currentStock = row.stock;
					this.currentSkuPrice = row.price;
					this.currentSkuName = row.skuName;
					this.currentCartCount = row.cartCount;
					const skuId = row.skuId;
					if (parseInt(this.currentStock, 10) === 0) {
						this.$mHelper.toast('库存不足');
						return;
					}
					if (this.cartType === 'cart') {
						this.handleCartItemCreate(skuId);
					} else if (this.cartType === 'buy') {
						this.buy(skuId);
					}
					this.cartType = null;
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			// 海报弹窗开关
			async openPoster() {
				this.$mHelper.toast('该版本不支持生成海报');
			},
			hideSpec() {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			},
			hideShareSpec() {
				this.shareClass = 'hide';
				setTimeout(() => {
					this.shareClass = 'none';
				}, 250);
			},
			// 添加商品至购物车
			async handleCartItemCreate(skuId) {
				await this.$http
                .post('/tiny-shop/v1/member/cart-item/create', {
                    sku_id: skuId,
                    num: this.currentCartCount
                })
                .then(() => {
                    this.$mHelper.toast('添加购物车成功');
                    this.$http.get('/tiny-shop/v1/member/cart-item/count').then(r => {
                        this.setCartNum(r.data);
                        this.cartNum = r.data;
                    });
                });
			},
			// 收藏
			async toFavorite() {
				if (!this.product.id) return;
				if (!this.hasLogin) {
					this.specClass = 'none';
					await this.$mHelper.backToLogin();
				} else {
					this.favorite ? this.handleCollectDel() : this.handleCollectCreate();
				}
			},
			// 收藏商品
			async handleCollectCreate() {
				await this.$http
                .post('/tiny-shop/v1/common/collect/create', {
                    topic_id: this.product.id,
                    topic_type: 'product'
                })
                .then(() => {
                    this.$mHelper.toast('收藏成功');
                    this.$emit('product');
                });
			},
			// 取消收藏商品
			async handleCollectDel() {
				await this.$http
                .delete(`${'/tiny-shop/v1/common/collect/delete'}?id=${this.product.myCollect.id}`)
                .then(() => {
                    this.$mHelper.toast('取消收藏成功');
                    this.$emit('product');
                });
			},
			async buy(skuId) {
                const params = {};
                params.data = JSON.stringify({ sku_id: skuId, num: this.currentCartCount });
				if (
					this.product.point_exchange_type === '2' ||
					this.product.point_exchange_type === '4' ||
					(this.product.point_exchange_type === '3' &&
						this.isPointExchange)
				) {
					params.type = 'point_exchange';
				} else {
					params.type = this.type;
				}
				this.$mRouter.push({
					route: `/pages/order/create/order?data=${JSON.stringify(params)}&promo_code=${this.promoCode}`
				});
			},
			addCart(type, isPointExchange) {
				if (!this.product.id) return;
				if (!this.hasLogin) {
					this.$mHelper.backToLogin();
					return;
				}
				this.specClass = 'show';
				this.cartType = type;
				this.isPointExchange = isPointExchange;
			},
			stopPrevent() {}
        }
    };