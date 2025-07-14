const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DATABASE_HOST,
    });

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL Database'))
    .catch((err) => console.error('Database connection failed:', err));

module.exports = sequelize;



