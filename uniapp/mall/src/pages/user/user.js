 /**
     * @des 个人中心
     *
     * @author lizi
     * @date 2020-01-10 11:41
     * @copyright 2019
     */
	
    import listCell from '@/components/rf-list-cell';
    import {mapMutations} from 'vuex';
    import rfBadge from '@/components/rf-badge/rf-badge'
    import user from '@/service/user.js'

    let startY = 0, moveY = 0, pageAtTop = true;
    export default {
        components: {
            listCell,
            rfBadge
        },
        data() {
            return {
                settingList: this.$mConstDataConfig.settingList,
                orderSectionList: this.$mConstDataConfig.orderSectionList,
                amountList: this.$mConstDataConfig.amountList,
                headImg: this.$mAssetsPath.headImg,
                vipCardBg: this.$mAssetsPath.vipCardBg,
                arc: this.$mAssetsPath.arc,
                userBg: this.$mAssetsPath.userBg,
                coverTransform: 'translateY(0px)',
                coverTransition: '0s',
                moving: false,
                userInfo: { // 用户信息
                    promoter: null  // 分销商信息
                },
                footPrintList: [], // 足迹列表
                loading: true,
		            hasLogin: false
            }
        },
        // 小程序分享
        onShareAppMessage() {
            return {
                title: '欢迎来到粒子商城',
                path: '/pages/index/index'
            }
        },
        async onShow() {
            // 初始化数据
            this.initData();
        },
        // #ifndef MP
        onNavigationBarButtonTap(e) {
            const index = e.index;
            if (index === 0) {
                this.navTo('/pages/set/set');
            } else if (index === 1) {
                // #ifdef APP-PLUS
                const pages = getCurrentPages();
                const page = pages[pages.length - 1];
                const currentWebview = page.$getAppWebview();
                currentWebview.hideTitleNViewButtonRedDot({
                    index
                });
                // #endif
                this.$mRouter.push({route: '/pages/index/notice/notice'});
            }
        },
        // #endif
        methods: {
            // h5分享
            shareToH5() {
                // #ifdef H5
                this.$mHelper.toast('请复制连接进行分享');
                // #endif
            },
            ...mapMutations(['login']),
            // 数据初始化
            async initData() {
            	this.hasLogin = this.$mStore.getters.hasLogin;
                if (this.hasLogin) {
                    await this.getMemberInfo();
                } else {
                    this.loading = false;
                    this.resetSectionData();
                }
            },
            // 设置购物车数量角标
            async initCartItemCount() {
							if (parseInt(uni.getStorageSync('cartNum'), 10) > 0) {
                await uni.setTabBarBadge({
                  index: this.$mConstDataConfig.cartIndex,
                  text: uni.getStorageSync('cartNum')
                });
							} else {
                uni.removeStorageSync('cartNum');
                uni.removeTabBarBadge({index: this.$mConstDataConfig.cartIndex});
							}
            },
            // 获取用户信息
            async getMemberInfo() {
                await
                user.getmemberInfo()
                .then(async r => {
                    this.loading = false;
                    this.userInfo = r.data;
                    await uni.setStorageSync('cartNum', r.data.cart_num);
                    // 获取足迹列表
                    await this.getFootPrintList();
                    await this.setSectionData(r.data);
                    await this.initCartItemCount();
                })
                .catch(() => {
                    this.hasLogin = false;
                    this.userInfo = {};
                    this.resetSectionData();
                    this.loading = false;
                });
            },
            // 清空个人中心的各模块状态
            resetSectionData() {
                uni.removeTabBarBadge({index: this.$mConstDataConfig.cartIndex});
                this.amountList[0].value = 0;
                this.amountList[1].value = 0;
                this.amountList[2].value = 0;
                this.orderSectionList[0].num = 0;
                this.orderSectionList[1].num = 0;
                this.orderSectionList[2].num = 0;
                this.orderSectionList[3].num = 0;
                this.orderSectionList[4].num = 0;
            },
            // 给个人中心的各模块赋值
            setSectionData(data) {
                const orderSynthesizeNumArr = [];
                for (let item in data.order_synthesize_num) {
                    orderSynthesizeNumArr.push(data.order_synthesize_num[item])
                }
                for (let i = 0; i < this.orderSectionList.length; i++) {
                    this.orderSectionList[i].num = orderSynthesizeNumArr[i].toString();
                }
                this.amountList[0].value = data.account.user_money || 0;
                this.amountList[1].value = data.coupon_num || 0;
                this.amountList[2].value = data.account.user_integral || 0;
                // 更新userInfo缓存
                uni.setStorageSync('userInfo', data);
            },
            // 获取足迹列表
            async getFootPrintList() {
                await
                user.getfootPrintList()
                .then(r => {
                        this.footPrintList = r.data
                });
            },
            // 统一跳转接口,拦截未登录路由
            navTo(route) {
                if (!route) {
                    return;
                }
                if (!this.hasLogin) {
                    uni.showModal({
                        content: '你暂未登陆，是否跳转登录页面？',
                        success: (confirmRes) => {
                            if (confirmRes.confirm) {
                                this.$mRouter.push({route: '/pages/public/logintype'});
                            }
                        }
                    });
                } else {
                    this.$mRouter.push({route});
                }
            },
            /**
             *  会员卡下拉和回弹
             *  1.关闭bounce避免ios端下拉冲突
             *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
             *    transition设置0.1秒延迟，让css来过渡这段空窗期
             *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
             */
            coverTouchstart(e) {
                if (pageAtTop === false) {
                    return;
                }
                this.coverTransition = 'transform .1s linear';
                startY = e.touches[0].clientY;
            },
            coverTouchmove(e) {
                moveY = e.touches[0].clientY;
                let moveDistance = moveY - startY;
                if (moveDistance < 0) {
                    this.moving = false;
                    return;
                }
                this.moving = true;
                if (moveDistance >= 80 && moveDistance < 100) {
                    moveDistance = 80;
                }
                if (moveDistance > 0 && moveDistance <= 80) {
                    this.coverTransform = `translateY(${moveDistance}px)`;
                }
            },
            coverTouchend() {
                if (this.moving === false) {
                    return;
                }
                this.moving = false;
                this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
                this.coverTransform = 'translateY(0px)';
            }
        }
    }