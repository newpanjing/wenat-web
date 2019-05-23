var proxy = require('../socket/socket-proxy-server');
proxy.start();
/**
 * 首页
 */
exports.indexPage = function (req, res, next) {

    var referer = req.header('referer');
    if(!referer){
        referer = '';
    }
    res.render("index", {
        data:{
            referer: referer
        }
    });
};

/**
 * 赞助
 * @param req
 * @param res
 * @param next
 */
exports.sponsor = function (req, res, next) {
    res.render("sponsor", {})
}

/**
 * 在线的网站
 * @param req
 * @param res
 * @param next
 */
exports.sites = function (req, res, next) {

    proxy.getClients(function (data) {
        res.render("sites", {data: data});
    });
}
