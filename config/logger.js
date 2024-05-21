const levels = [
  'Emergency',
  'Alert',
  'Critical',
  'Error',  // prod
  'Warning',
  'Notice',  // dev
  'Informational',
  'Debug'   // local
]

const availableLevel = {
  Critical: "Critical",
  Warning: "Warning",
  Debug: "Debug"
}

const logger = (level, msg, file) => {

  const env = process.env['APP_ENV']

  if (!levels.includes(level))
    throw new Error(`invalid log level in file ${file}`)


  if (env === 'prod' && levels.indexOf(level) > 3)
    return

  if (env === 'dev' && levels.indexOf(level) > 5)
    return

  console.log(`Log level: ${level}, message: ${msg}, file: ${file}`)
}

const criticalLog = (msg, file) => {
  logger(availableLevel.Critical, msg, file)
}

const warningLog = (msg, file) => {
  logger(availableLevel.Warning, msg, file)
}

const debugLog = (msg, file) => {
  logger(availableLevel.Debug, msg, file)
}

module.exports = {
  criticalLog,
  warningLog,
  debugLog
}