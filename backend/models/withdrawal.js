const Sequelize = require('sequelize')
const sequelize = require('../config/connections.js')
const withdrawal = sequelize.define('withdrawal',{
    withdrawalid:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    amountwithdraw:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
})

module.exports = {withdrawal}
