module.exports = {
  HOST: 'localhost',
  USER: 'node_user',
  PASSWORD: 'node_password',
  PORT: 5433,
  DB: 'db_bootcamp',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 5,
    acquire: 30000,
    idle: 10000
  }
}