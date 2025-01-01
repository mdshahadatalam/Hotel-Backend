require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const Banner = require('./Model/Banner')



mongoose.connect(`mongodb+srv://${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}@cluster0.kj5c3.mongodb.net/Hotel?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())



app.post('/banner', function (req, res) {

  let data = new Banner(req.body)
  data.save()
  res.send('data received')
  console.log(req.body);
  
})

app.get('/bannerItem',async function(req,res){
 let data = await Banner.findOne()
 res.send(data)
})

app.put('/banner/:id',function(req,res){
  Banner.findByIdAndUpdate(req.params.id,req.body).then(()=>{
    res.send({message:"Navbar Updated"})
  })
  console.log(req.body);
  
 
  })






app.listen(3000)



// mdshahadat25
// YRY8rbNOKXr4xUnW