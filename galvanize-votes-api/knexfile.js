// Update with your config settings.
// comment

require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: `postgres:///${process.env.LOCAL_DATABASE_NAME}`
    }
  }
}