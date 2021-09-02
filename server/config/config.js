require('dotenv').config();
const env = process.env;

module.exports = {
  development: {
    username: env.RDS_USERNAME,
    password: env.RDS_PASSWORD,
    database: env.RDS_DATABASE_NAME,
    host: env.RDS_HOSTNAME,
    port: env.RDS_PORT,
    dialect: 'mysql',
  },
  test: {
    username: null,
    password: null,
    database: null,
    host: null,
    dialect: null,
  },
  production: {
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    host: env.DATABASE_HOST,
    dialect: 'mysql',
  },
};
