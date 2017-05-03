// 定义数据库模型（表）
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AccountDetail', {
        username: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
         password: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
         telphone: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
         accountTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
    })
}