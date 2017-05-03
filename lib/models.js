const path = require('path');
const glob = require('glob');
const _ = require('lodash');
const config = require('config');
const Sequelize = require('sequelize');

const seqConfig = config.sequelize;
//console.log(config)
const sequelize = new Sequelize(
  seqConfig.database,
  seqConfig.username,
  seqConfig.password,
  seqConfig.options);

let models = {};

let defines = glob.sync('*.js', {
  root: '',
  cwd: 'models/'
});

defines.forEach(function (define) {
  let model = sequelize.import(path.resolve('models/' + define));
  models[model.name] = model;
});

Sequelize.models = models;

_.forIn(models, function (model) {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = function () {
  return sequelize;//原来是sequelize.sync,由于变量导出后不能.transaction所以改了,app.js里面也相应改变
  //return sequelize.sync({ force: true });//清空数据
};