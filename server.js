const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')

mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})