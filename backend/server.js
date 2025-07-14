const express = require('express');
const { routeManger } = require('./routes/customerRoute.js');
const dotenv = require('dotenv');
const bodyParser = require("body-parser")
const app = express()
const port = 5000
const cors = require('cors');
dotenv.config()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routeManger)


app.listen(port, () => {
  console.log(`server running on ${port}`)
})