(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-shipping-shipping"],{"4dbe":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e._l(e.shippingDetail.data,(function(t,a){return i("v-uni-view",{key:a},[i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-text",{staticClass:"name"},[e._v("商品信息")])],1),i("v-uni-view",{staticClass:"g-item"},[i("v-uni-image",{attrs:{src:t.order_product.product_picture,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[e._v(e._s(t.order_product.product_name))])],1)],1)],1),i("v-uni-view",{staticClass:"yt-list"},[t.buyer_name?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon",class:"bg-"+e.themeColor.name},[e._v("收")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("收货人")]),i("v-uni-text",{staticClass:"cell-tip",class:"text-"+e.themeColor.name},[e._v(e._s(t.buyer_name))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1):e._e(),t.express_no?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon",class:"bg-"+e.themeColor.name},[e._v("单")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("快递单号")]),i("v-uni-text",{staticClass:"cell-tip"},[e._v(e._s(t.express_no))]),i("v-uni-text",{staticClass:"cell-tip copy",class:"text-"+e.themeColor.name,on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.copy(t.express_no)}}},[e._v("复制")])],1):e._e(),t.express_company?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon",class:"bg-"+e.themeColor.name},[e._v("司")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("快递公司")]),i("v-uni-text",{staticClass:"cell-tip",class:"text-"+e.themeColor.name},[e._v(e._s(t.express_company))])],1):e._e()],1),"1"===t.shipping_type.toString()?i("v-uni-view",{staticClass:"uni-timeline"},[e._l(t.trace,(function(a,n){return i("v-uni-view",{key:n,staticClass:"uni-timeline-item",class:[0===n?"text-"+e.themeColor.name+" uni-timeline-first-item":"",n===t.trace.length-1?"uni-timeline-last-item":""]},[i("v-uni-view",{staticClass:"uni-timeline-item-divider"}),i("v-uni-view",{staticClass:"uni-timeline-item-content"},[i("v-uni-view",[e._v(e._s(a.value))]),i("v-uni-view",{staticClass:"datetime"},[e._v(e._s(a.time))])],1)],1)})),0===t.trace.length?i("v-uni-view",[e._v("暂无物流信息")]):e._e()],2):e._e(),"0"===t.shipping_type.toString()?i("v-uni-view",{staticClass:"uni-timeline"},[e._v("该订单无需物流")]):e._e()],1)})),0===e.shippingDetail.count?i("rf-empty",{attrs:{info:"暂无物流信息"}}):e._e()],2)},l=[]},"5f32":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("96cf");var n=a(i("3b8d")),l=a(i("5028")),s=i("c4c8"),c={data:function(){return{shippingDetail:{},shippingTimeLine:[]}},filters:{time:function(e){return 0===parseInt(e,10)?"暂未操作":(0,l.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,i=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return i.forEach((function(i){i.key===parseInt(e,10)&&(t=i.value)})),t},filterProductStatus:function(e){var t=null;if(0!==parseInt(e.refund_status,10)){var i=[{key:1,value:"退款申请"},{key:2,value:"等待退货"},{key:3,value:"等待确认收货"},{key:4,value:"等待确认退款"},{key:5,value:"同意退款"},{key:-1,value:"退款已拒绝"},{key:-2,value:"退款已关闭"},{key:-3,value:"退款不通过"}];i.forEach((function(i){i.key===parseInt(e.refund_status,10)&&(t=i.value)}))}else if(4===parseInt(e.order_status,10)){var a=[{key:0,value:"未评价"},{key:1,value:"已评价"},{key:2,value:"已追评"}];a.forEach((function(i){i.key===parseInt(e.is_evaluate,10)&&(t=i.value)}))}else{var n=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];n.forEach((function(i){i.key===parseInt(e.order_status,10)&&(t=i.value)}))}return t},filterShippingType:function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]}},onLoad:function(e){this.initData(e)},methods:{copy:function(e){this.$mHelper.h5Copy(e)},navTo:function(e){this.$mRouter.push({route:e})},initData:function(e){this.getOrderDetail(e.id)},getOrderDetail:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(s.orderProductExpressDetails),{order_id:t}).then((function(e){e.data.data.forEach((function(e){var t=[];e.trace.forEach((function(e){t.push({time:e.datetime,value:e.remark})})),e.trace=t})),i.shippingDetail=e.data}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=c},6013:function(e,t,i){"use strict";var a=i("ee16"),n=i.n(a);n.a},"8ab4":function(e,t,i){"use strict";i.r(t);var a=i("5f32"),n=i.n(a);for(var l in a)"default"!==l&&function(e){i.d(t,e,(function(){return a[e]}))}(l);t["default"]=n.a},ad2e:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-1f21c650]{background:#f8f8f8}.goods-section[data-v-1f21c650]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-1f21c650]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-1f21c650]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-1f21c650]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-1f21c650]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-1f21c650]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?220?%;height:%?170?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-1f21c650]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?16?%;overflow:hidden}.goods-section .g-item .title[data-v-1f21c650]{font-size:%?28?%;line-height:%?32?%}.goods-section .g-item .spec[data-v-1f21c650]{font-size:%?22?%;color:#909399}.goods-section .g-item .price-box[data-v-1f21c650]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;color:#303133}.goods-section .g-item .price-box .price[data-v-1f21c650]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-1f21c650]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .price-box .status[data-v-1f21c650]{font-size:%?24?%;color:#4399fc}.goods-section .g-item .step-box[data-v-1f21c650]{position:relative}.yt-list[data-v-1f21c650]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-1f21c650]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-1f21c650]{background:#fafafa}.yt-list-cell.b-b[data-v-1f21c650]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-1f21c650]{height:%?32?%;width:%?32?%;font-size:%?22?%;text-align:center;line-height:%?32?%;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-1f21c650]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-1f21c650]{background:#3ab54a}.yt-list-cell .cell-more[data-v-1f21c650]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-1f21c650]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-1f21c650]{font-size:%?26?%}.yt-list-cell .cell-tip.disabled[data-v-1f21c650]{color:#909399}.yt-list-cell.desc-cell .cell-tit[data-v-1f21c650]{max-width:%?90?%}.yt-list-cell .desc[data-v-1f21c650]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.yt-list-cell .copy[data-v-1f21c650]{margin-left:%?10?%}.uni-timeline[data-v-1f21c650]{padding:%?30?% %?40?%;background-color:#fff}body.?%PAGE?%[data-v-1f21c650]{background:#f8f8f8}",""]),e.exports=t},b4c1:function(e,t,i){"use strict";i.r(t);var a=i("4dbe"),n=i("8ab4");for(var l in n)"default"!==l&&function(e){i.d(t,e,(function(){return n[e]}))}(l);i("6013");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1f21c650",null,!1,a["a"],s);t["default"]=o.exports},ee16:function(e,t,i){var a=i("ad2e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("5fec6f8e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);