const sequelize = require("./config/connections");
const { Customer } = require("./models/customer");
const { deposit } = require("./models/savings");
const { withdrawal } = require("./models/withdrawal");

sequelize.sync().then(rs=>{
    console.log(rs)
}).catch(err=>{
    console.log(err)
})
