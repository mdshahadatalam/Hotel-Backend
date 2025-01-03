const mongoose = require('mongoose')
const {Schema} = mongoose;

const ServiceSchema = new Schema({
    serImg:String,
    subHead:String,
    paragraph:String,
    showImg:Boolean,
})
module.exports = mongoose.model('Service',ServiceSchema)