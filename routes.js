/**
 * Created by sun on 2017/3/16.
 */
/**路由列表**/

var express = require('express');
var router = express.Router();
var index=require('./core/controller/index');

router.get("/",index.indexPage);
router.get("/sponsor",index.sponsor);
module.exports = router;