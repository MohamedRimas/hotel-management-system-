const  mongoose=require('mongoose')
const Schema =mongoose.Schema;


const paymentSchema =new Schema({
   cardnumber:String,
   carddate: String,
   cvv:String, 
   fullname: String,
   
   
},{timeseries: true})

module.exports =mongoose.model('payment', paymentSchema)