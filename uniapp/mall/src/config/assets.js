import indexConfig from './index.js';
const PATH = indexConfig.assetsPath;
/*
 * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
 * 页面使用：this.$mAssetsPath.grid_1
 * CSS背景：应尽量使用:style="" 行内样式设置背景图
 * PATH说明：本地路径或者服务器路径
 *
 * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
 *
 * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
 */

export default {
    headImg: PATH + '/missing-face.png',	// 默认头像
    errorImage: PATH + '/errorImage.jpg',	// 出错填充图片
    logo: PATH + '/logo.png',			    // 品牌logo
    newsBg: PATH + '/news.png',				// 商城新闻
    userBg: PATH + '/user-bg.png',			// 商城新闻
    vipCardBg: PATH + '/vip-card.png',		// vip背景
    vipPrice: PATH + '/vip-price.png',		// vip价格
    arc: PATH + '/arc.png',			        // 弧形背景
    noNetWorkImg: PATH + '/noNetWork.png',  // 500
    notFoundImg: PATH + '/notFound.png',	// 404
    upgradeTop: PATH + '/upgrade-top.png',  // 升级图标
    backTop: PATH + '/top.png',				// 返回顶部
    shareBg: PATH + '/share-bg.png',		// 分享引导背景
    distribution: PATH + '/distribution.png',// 分销tag
    pinkage: PATH + '/pinkage.png',			// 包邮tag
    presale: PATH + '/presale.png',			// 预售tag
    openSiteBg: PATH + '/open-site-bg.png', // 开放站点
    virtual: PATH + '/virtual.png',			// 虚拟tag
    loginBg: PATH + '/login-bg.png',		// 登录背景
    loginPic: PATH + '/login-pic.png',		// 登录插画
    wholesaleTag: PATH + '/wholesale-tag.png',// 砍价标签
    groupTag: PATH + '/group-tag.png',       // 拼团标签
    bargainTag: PATH + '/bargain-tag.png',   // 砍价标签
    discountTag: PATH + '/discount-tag.png', // 砍价标签
    wechat: PATH + '/wechat.png', 			// 微信授权登录
    apple: PATH + '/apple.png',  			// 微信授权登录
    money: PATH + '/money.png',  			// 微信授权登录
    moneyBg: PATH + '/money-bg.png' 		// 微信授权登录
};
