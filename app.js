require('dotenv').config()
const dbConfig = require("./config/db")[process.env['APP_ENV']]
const { criticalLog, warningLog, debugLog } = require('./config/logger')

criticalLog('critical message', __filename)
warningLog('warning message', __filename)
debugLog('debug message', __filename)

