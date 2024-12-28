const mongoose = require('mongoose')
const {Schema} = mongoose;

const bannerSchema = new Schema({
    subHead:String,
    head:String,
    tittle:String,
    buttonText:String,
    showButton:Boolean,
})
module.exports = mongoose.model('Banner',bannerSchema)