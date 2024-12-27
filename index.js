const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://mdshahadat25:YRY8rbNOKXr4xUnW@cluster0.kj5c3.mongodb.net/Hotel?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)



// mdshahadat25
// YRY8rbNOKXr4xUnW