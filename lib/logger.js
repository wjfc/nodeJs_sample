// 第三方日志库
const winston = require('winston');
const expressWinston = require('express-winston');
const moment = require('moment');
require('winston-daily-rotate-file')

var logger = new(winston.Logger)({
    transports: [
        new winston.transports.Console({
            timestamp: function() {
                return moment().format("YYYY-MM-DD HH:mm:ss SSS");
            },
            prettyPrint: true,
            colorize: true,
            level: 'info'
        }),
        new winston.transports.DailyRotateFile({
            filename: './logs/main.log',
            datePattern: 'yyyyMMdd.',
             prepend: true,
            maxsize: 1024 * 1024 * 5,
            json: false,
            prettyPrint: true,
            maxFiles: 10,
            timestamp: function () {
                return moment().format("YYYY-MM-DD HH:mm:ss SSS");
      },
            level: 'info'
        })
    ]
});
module.exports = {
    logger: logger
}