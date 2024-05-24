/* require('dotenv').config();
const Sequelize = require('sequelize');

console.log("Database Name:", process.env.DB_NAME);
console.log("Database User:", process.env.DB_USER);
console.log("Database Password:", process.env.DB_PASSWORD);
console.log("Database Host:", process.env.DB_HOST);
console.log("Database Port:", process.env.DB_PORT);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 */