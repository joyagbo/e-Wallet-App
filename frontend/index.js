const express = require('express')
const app = express()
const port = 4000

var transactions = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing",
    date: "24 June 2020",
    due: "Tomorrow"

  },

  {
    text: "Lorem Ipsum is simply dummy text of the printing",
    date: "24 June 2020",
    due: "Tomorrow"

  },

  {
    text: "Lorem Ipsum is simply dummy text of the printing",
    date: "24 June 2020",
    due: "Tomorrow"
  },

  {
    text: "Lorem Ipsum is simply dummy text of the printing",
    date: "24 June 2020",
    due: "Tomorrow"

  }
]

var users = [{ username: "Joy", email: "joy@gmail.com", balance: 500 }, { username: "", email: "" }]

app.use(express.static('public')) //code for making styles show

app.set('view engine', 'ejs')

app.get('/dashboard', (req, res) => { //routes

  res.render('index', { users: users, transactions: transactions })
})

app.get('/', (req, res) => {
  res.render('login')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})