const express = require('express')
const { register, login, dashboard } = require('../controllers/customerControls.js')
const { verifyAuth } = require('../middleware/auth.js')

const routeManger = express.Router()
//routeManger.get('/',register)
routeManger.post('/registerCustomer',register)
routeManger.post('/Auth',login)
routeManger.post('/dashboard',verifyAuth,dashboard)
  
module.exports ={routeManger}