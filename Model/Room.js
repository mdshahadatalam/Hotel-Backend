const mongoose = require('mongoose')
const {Schema} = mongoose;

const RoomSchema = new Schema({
    subHead:String,
    head:String,
    Price:String,
    showImg:Boolean,
})
module.exports = mongoose.model('Room',RoomSchema)