const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,"08134715847",{
    dialect:"mysql", host:"localhost"
});

module.exports = sequelize;