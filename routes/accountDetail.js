const express = require('express');
const router = express.Router();
const accountList = require('../modules/accountDetail');
const editAccountList = require('../modules/editAccountDetail');
// Router实例是一个完整的中间件和路由系统，下面定义了一些路由，
// 并将它们挂载在应用的路径上。
// 在index.js文件里，使用app.use('/dev', accountListRouter);
// 接下来通过访问/dev/accountList就可以获取到数据了。
router.get('/accountList', accountList);
router.post('/editAccountList', editAccountList);
module.exports = router;