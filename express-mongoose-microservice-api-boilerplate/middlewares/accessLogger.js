const fs = require('fs')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')

const logDir = process.env.LOG_DIR

module.exports = (() => {
  if (!logDir) {
    return morgan('dev')
  }
  // ensure log directory exists
  /* eslint-disable no-unused-expressions */
  fs.existsSync(logDir) || fs.mkdirSync(logDir)
  /* eslint-enable no-unused-expressions */
  // create a rotating write stream
  const accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDir,
  })
  return morgan('combined', { stream: accessLogStream })
})()

