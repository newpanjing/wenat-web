/**
 * Created by sun on 2017/3/23.
 */
exports.config = {
    site: {
        name: 'WeNAT',
        title: 'WeNAT 内网穿透服务',
        keywords: "内网穿透、内网接口调试、微信接口调试、支付宝接口调试、本地电脑做网站",
        description: "WeNAT是一个穿透内网的工具，利用wenat的服务器，和本地电脑，建立一条专属的通道，并将外网的请求转发到本地，从而实现穿透。"
    },
    download: {
        date: '2017年03月24日',
        version: '1.0.3',
        url: 'http://download.wezoz.com/wenat-client-1.0.3.jar'
    },
    //路由服务
    routing: {
        host: "127.0.0.1",
        port: 5001
    }
}