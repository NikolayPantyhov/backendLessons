require('dotenv').config()
const dbConfig = require("./config/db")[process.env['APP_ENV']]
const { criticalLog, warningLog, debugLog } = require('./config/logger')

criticalLog('critical message', __filename)
warningLog('warning message', __filename)
debugLog('debug message', __filename)


for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 100)
}

for (var i = 0; i < 10; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, i * 100);
  })(i);
}