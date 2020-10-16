import _default from './default.js'

// 生产环境配置
let production = {
    _default,
    assetsPath: '/static', // 静态资源路径
    baseUrl: 'http://demo.rageframe.com/api', // 后台接口请求地址
    hostUrl: 'http://h5.tinyshop.rageframe.com', // H5地址(前端运行地址)
    websocketUrl: '', // websocket服务端地址
    weixinAppId: '' // 微信公众号appid
}

module.exports = production