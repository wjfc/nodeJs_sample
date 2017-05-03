
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
// compression压缩文件用
const compression = require('compression');
// 处理.env文件，将其赋值给process.env
const dotenv = require('dotenv').config();
// 处理config文件
const config = require('config');
const response = require('./lib/response');

const app = express();
// 创建log日志文件夹,并确保文件中存在logDirectory目录
const logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const logger = require('./lib/logger').logger;
// 日志文件夹创建结束

const sequelize = require('./lib/models')();
const corsJson = {
     credentials:true,
    //   origin:'http://localhost:3000',
}
app.use(cors(corsJson))
// bodyParser解析请求体
// bodyParser.urlencoded()解析文本格式。
app.use(bodyParser.urlencoded({
  extended: true
}));
// bodyParser.json()解析json格式。
app.use(bodyParser.json());
app.use(response);
app.use(compression());
// 路由部分开始
const accountListRouter = require('./routes/accountDetail');
app.use('/dev', accountListRouter);

// 路由部分结束

sequelize.sync().then(function() {
    app.listen(3000, function() {
        logger.info('app is running on 3000')
    });
})
 .catch(function(err) {
        logger.error(`sequelize error: ${err}`);
    });
// 暴露app用于单元测试 
module.exports = app;