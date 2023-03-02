const express = require('express')
const { register, login } = require('../controllers/customerControls.js')


const routeManger = express.Router()
//routeManger.get('/',register)

routeManger.post('/registerCustomer',register)

routeManger.post('/Auth',login)

  
module.exports ={routeManger}