const express = require('express')
const { routeManger } = require('./routes/rts.js');
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const bodyParser = require("body-parser")
const app = express()
const saltRounds = bcrypt.genSaltSync(10)

const port = 5000

const cors = require('cors');
dotenv.config()

app.use(cors())
//console.log(process.env.DATABASE_USER)

console.log(bcrypt.hashSync("p@ssword", saltRounds))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routeManger)

app.listen(port, () => {
  console.log('server running')
})