const { dbUser, dbPassword } = require('./credentials')

const mongoUrl = `mongodb://${dbUser}:${dbPassword}@ds159517.mlab.com:59517/diet_api`

module.exports = {
  mongoUrl
}