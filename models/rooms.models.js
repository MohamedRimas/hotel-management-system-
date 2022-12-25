const  mongoose=require('mongoose')
const Schema =mongoose.Schema;


const roomsSchema =new Schema({
   fullname:String,
   nic: String,
   phone:String, 
   email: String,
   check_in: Date,
   check_out: Date,
   no_of_rooms: String,
   totalmember: String,
   payment: String,
},{timeseries: true})

module.exports =mongoose.model('rooms',roomsSchema)