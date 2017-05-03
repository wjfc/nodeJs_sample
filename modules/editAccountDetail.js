const co = require('co');
const sequelize = require('sequelize');
// validator表单验证用
const validator = require('validator');
const moment = require('moment');
const config = require('config');

const AccountDetail = sequelize.models.AccountDetail;

function editAccount(req, res, next) {
    var req = req.body;
    co(function*() {
       var accountDetail = yield AccountDetail.findAll({raw: true});
       if(accountDetail) {
        AccountDetail.create({
            username: req.user,
            password: req.pas,
            telphone: req.tel,
            accountTime: moment().utcOffset('+0800').format('YYYY-MM-DD HH:mm:ss')
        }).then(function() {
            return res.sendSucess('post success')
        }).catch(function(err) {
             return res.sendError({err: err});
        })
    }
    });
    
}
module.exports = editAccount;