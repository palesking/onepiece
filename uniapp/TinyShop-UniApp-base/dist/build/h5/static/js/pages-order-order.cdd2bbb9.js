(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"13c2":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("75fc"));n("96cf");var i=r(n("3b8d"));n("ac6a");var s=r(n("f97d")),o=r(n("5028")),c=n("802d"),u=r(n("18aa")),d=n("c4c8"),l=r(n("93f4")),h={components:{rfLoadMore:s.default,rfCountDown:u.default},data:function(){return{tabCurrentIndex:null,loadingType:"more",navList:this.$mConstDataConfig.orderNavList,moneySymbol:this.moneySymbol,orderList:[],page:1,loading:!0,isRefreshing:!0,guessYouLikeList:[],singleSkuText:this.singleSkuText}},computed:{second:function(){return function(t){return Math.floor(t-new Date/1e3)}}},filters:{time:function(t){return(0,o.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(t){var e;return l.default.orderStatus.forEach((function(n){n.key===parseInt(t,10)&&(e=n.value)})),e}},onShow:function(){this.initData()},onLoad:function(t){this.tabCurrentIndex=parseInt(t.state,10)+1},onPullDownRefresh:function(){this.page=1,this.orderList.length=0,this.getOrderList("refresh")},onReachBottom:function(){"nomore"!==this.loadingType&&0!==this.orderList.length&&(this.page++,this.getOrderList())},methods:{timeUp:function(t){this.isRefreshing&&(this.isRefreshing=!1,this.handleOrderClose(t.id))},handleOrderOperation:function(t,e){switch(e){case"detail":this.navTo("/pages/order/detail?id=".concat(t.id));break;case"evaluation":this.navTo("/pages/order/evaluation/evaluation?order_id=".concat(t.id));break;case"close":this.handleOrderClose(t.id);break;case"delete":this.handleOrderDelete(t.id);break;case"shipping":this.navTo("/pages/order/shipping/shipping?id=".concat(t.id));break;case"delivery":this.handleOrderTakeDelivery(t.id);break}},navTo:function(t){this.$mRouter.push({route:t})},handleOrderClose:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(d.orderClose),{id:e}).then((function(){n.isRefreshing=!0,n.$mHelper.toast("订单取消成功"),setTimeout((function(){n.loading=!0,n.page=1,n.orderList.length=0,n.getOrderList()}),500)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleOrderDelete:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.delete("".concat(c.orderDelete,"?id=").concat(e),{}).then((function(){n.$mHelper.toast("订单删除成功"),setTimeout((function(){n.page=1,n.orderList.length=0,n.getOrderList()}),500)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleOrderTakeDelivery:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(c.orderTakeDelivery),{id:e}).then((function(){n.page=1,n.orderList.length=0,n.getOrderList()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),initData:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.page=1,this.orderList.length=0,t.next=4,this.getOrderList();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getOrderList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.navList[this.tabCurrentIndex],r={},(n.state||0===n.state)&&(r.synthesize_status=n.state),r.page=this.page,t.next=6,this.$http.get("".concat(c.orderList),r).then(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("refresh"===e&&uni.stopPullDownRefresh(),s.loadingType=10===n.data.length?"more":"nomore",s.orderList=[].concat((0,a.default)(s.orderList),(0,a.default)(n.data)),0!==s.orderList.length){t.next=6;break}return t.next=6,s.getGuessYouLikeList();case 6:s.loading=!1;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){s.loading=!1,"refresh"===e&&uni.stopPullDownRefresh()}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getGuessYouLikeList:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(d.guessYouLikeList)).then((function(t){e.guessYouLikeList=t.data}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeTab:function(t){this.page=1,this.orderList.length=0,this.tabCurrentIndex=t.target.current,this.loading=!0,this.getOrderList()},tabClick:function(t){this.page=1,this.orderList.length=0,this.tabCurrentIndex=t,this.loading=!0,this.getOrderList()},getMoreOrderList:function(){"nomore"!==this.loadingType&&0!==this.orderList.length&&(this.page++,this.getOrderList())}}};e.default=h},b631:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"uni-page-body[data-v-48caab3e],.order[data-v-48caab3e]{background:#f8f8f8;height:100%}uni-page-body .order-search[data-v-48caab3e],.order .order-search[data-v-48caab3e]{padding:%?10?% %?20?%;position:relative}uni-page-body .order-search .order-search-input[data-v-48caab3e],.order .order-search .order-search-input[data-v-48caab3e]{width:100%;background-color:#fff;border-radius:%?40?%;padding:%?10?% 0 %?10?% %?30?%;color:#909399}uni-page-body .order-search .iconfont[data-v-48caab3e],.order .order-search .iconfont[data-v-48caab3e]{position:absolute;right:%?48?%;top:%?22?%}uni-page-body .swiper-box[data-v-48caab3e],.order .swiper-box[data-v-48caab3e]{height:calc(100% - %?160?%)}uni-page-body .list-scroll-content[data-v-48caab3e],.order .list-scroll-content[data-v-48caab3e]{height:100%}uni-page-body .uni-swiper-item[data-v-48caab3e],.order .uni-swiper-item[data-v-48caab3e]{height:auto}body.?%PAGE?%[data-v-48caab3e]{background:#f8f8f8}",""]),t.exports=e},bd7d:function(t,e,n){"use strict";var r=n("e950"),a=n.n(r);a.a},c9b2:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={"rf-load-more":n("f97d").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"order"},[n("v-uni-view",{staticClass:"order-search",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/index/search/search?keyword=搜索我的订单&type=order")}}},[n("v-uni-view",{staticClass:"order-search-input"},[t._v("请输入订单关键字")]),n("v-uni-view",{staticClass:"iconfont iconsousuo2"})],1),n("v-uni-view",{staticClass:"navbar"},t._l(t.navList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"nav-item",class:t.tabCurrentIndex===r?"text-"+t.themeColor.name+" current":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(r)}}},[t._v(t._s(e.text))])})),1),n("v-uni-swiper",{staticClass:"swiper-box",attrs:{duration:"300"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}},t._l(t.navList,(function(e,r){return n("v-uni-swiper-item",{key:r,staticClass:"tab-content"},[n("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.getMoreOrderList.apply(void 0,arguments)}}},[t._l(t.orderList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"rf-order-item"},[n("v-uni-view",{staticClass:"i-top b-b"},[n("v-uni-text",{staticClass:"time in1line"},[t._v("订单号："+t._s(e.order_sn))]),0!==parseInt(e.order_status,10)?n("v-uni-text",{staticClass:"state",class:"text-"+t.themeColor.name},[t._v(t._s(t._f("orderStatusFilter")(e.order_status)))]):n("v-uni-view",{staticClass:"example-body"},[n("rf-count-down",{attrs:{"show-day":!1,second:t.second(e.close_time),color:"#FFFFFF","background-color":t.themeColor.color,"border-color":t.themeColor.color},on:{timeup:function(n){arguments[0]=n=t.$handleEvent(n),t.timeUp(e)}}})],1)],1),t._l(e.product,(function(r,a){return n("v-uni-view",{key:a,staticClass:"goods-box-single",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.navTo("/pages/order/detail?id="+e.id)}}},[n("v-uni-image",{staticClass:"goods-img",attrs:{src:r.product_picture,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"title in2line"},[t._v(t._s(r.product_name))]),n("v-uni-text",{staticClass:"attr-box"},[t._v(t._s(r.sku_name||t.singleSkuText)+" * "+t._s(r.num))]),2==r.point_exchange_type?n("v-uni-text",[n("v-uni-text",{staticClass:"point",class:"text-"+t.themeColor.name},[t._v(t._s(r.product_money)+" + "+t._s(e.point)+"积分")])],1):4==r.point_exchange_type?n("v-uni-text",[n("v-uni-text",{staticClass:"point"},[t._v(t._s(e.point)+"积分")])],1):n("v-uni-text",{staticClass:"price"},[n("v-uni-text",{class:"text-"+t.themeColor.name},[t._v(t._s(t.moneySymbol)+t._s(r.product_money)),0===r.gift_flag?n("v-uni-text",[t._v("+ "+t._s(e.point+"积分"||!1))]):t._e()],1)],1)],1)],1)})),n("v-uni-view",{staticClass:"price-box"},[t._v("共"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.product_count))]),t._v("件商品 实付款"),n("v-uni-text",{staticClass:"price",class:"text-"+t.themeColor.name},[t._v(t._s(t.moneySymbol)+t._s(e.pay_money))])],1),n("v-uni-view",{staticClass:"action-box b-t"},[0==e.order_status?n("v-uni-button",{staticClass:"action-btn",class:"text-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleOrderOperation(e,"close")}}},[t._v("取消订单")]):t._e(),4!=e.order_status&&2!=e.order_status||1==e.product[0].is_virtual?t._e():n("v-uni-button",{staticClass:"action-btn",class:"text-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleOrderOperation(e,"shipping")}}},[t._v("查看物流")]),-4==e.order_status?n("v-uni-button",{staticClass:"action-btn",class:"text-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleOrderOperation(e,"delete")}}},[t._v("删除订单")]):t._e(),n("v-uni-button",{staticClass:"action-btn",class:"bg-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleOrderOperation(e,"detail")}}},[t._v("订单详情")]),0==e.order_status||202==e.order_status?n("v-uni-button",{staticClass:"action-btn",class:"bg-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("/pages/user/money/pay?id="+e.id)}}},[t._v("立即支付")]):t._e(),3!=e.order_status&&4!=e.order_status||0!=e.is_evaluate?t._e():n("v-uni-button",{staticClass:"action-btn",class:"bg-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleOrderOperation(e,"evaluation")}}},[t._v("批量评价")]),2==e.order_status?n("v-uni-button",{staticClass:"action-btn",class:"bg-"+t.themeColor.name,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleOrderOperation(e,"delivery")}}},[t._v("确认收货")]):t._e()],1)],2)})),t.orderList.length>0?n("rf-load-more",{attrs:{status:t.loadingType}}):t._e(),0!==t.orderList.length||t.loading?t._e():n("rf-empty",{attrs:{list:t.guessYouLikeList,info:"暂无订单"}})],2)],1)})),1),n("rfLoading",{attrs:{isFullScreen:!0,active:t.loading}})],1)},i=[]},e8b3:function(t,e,n){"use strict";n.r(e);var r=n("13c2"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},e950:function(t,e,n){var r=n("b631");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("7f424e3a",r,!0,{sourceMap:!1,shadowMode:!1})},ebc4:function(t,e,n){"use strict";n.r(e);var r=n("c9b2"),a=n("e8b3");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("bd7d");var s,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"48caab3e",null,!1,r["a"],s);e["default"]=c.exports}}]);