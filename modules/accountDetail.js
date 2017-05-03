const sequelize = require('sequelize');

function list(req, res, next) {
    const AccountDetail = sequelize.models.AccountDetail;
    return AccountDetail.findAll()
    .then(function(models){
        res.sendSuccess({
            success: models
        })
    })
    .catch(function(err) {
        console.log(err)
        res.sendError(err.name)
    })
}
module.exports = list;