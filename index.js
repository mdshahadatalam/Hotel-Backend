const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)