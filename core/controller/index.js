/**
 * 首页
 */
exports.indexPage = function (req, res, next) {
    res.render("index",{

    });
};

/**
 * 赞助
 * @param req
 * @param res
 * @param next
 */
exports.sponsor=function (req,res,next) {
    res.render("sponsor",{

    })
}