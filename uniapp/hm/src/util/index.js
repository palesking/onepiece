
import Request from './request';
const http = new Request();

http.setConfig(config => {
	/* 设置全局配置 */
	config.baseUrl = 'http://demo.rageframe.com/api'; /* 根域名不同 */
	const systemInfo = uni.getSystemInfoSync();
	// const systemInfoHeaders = {
	// 	'device-name': systemInfo.brand, // 设备名称
	// 	width: systemInfo.screenWidth, // 屏幕宽度
	// 	height: systemInfo.screenHeight, // 屏幕高度
	// 	os: systemInfo.platform, // 客户端平台
	// 	'os-version': systemInfo.system // 操作系统版本
	// };
	config.header = {
		...config.header,
		// ...systemInfoHeaders
	};
	console.log(config)
	return config;
});


export { http };