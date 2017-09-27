const winston = require('winston')
require('winston-daily-rotate-file')
const fs = require('fs')

let transport = new (winston.transports.Console)({ timestamp: true, level: process.env.LOGLEVEL || 'debug' })
const logDir = process.env.LOG_DIR
if (logDir) {
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir)
  transport = new (winston.transports.DailyRotateFile)({
    filename: `${logDir}/.log`,
    datePattern: 'yyyy-MM-dd',
    prepend: true,
    level: process.env.ENV === 'development' ? 'debug' : 'info',
  })
}
const logger = new (winston.Logger)({
  transports: [
    transport,
  ],
})
module.exports = logger
