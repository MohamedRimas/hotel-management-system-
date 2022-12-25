const payment =require('../models/payment.model');

const Addpayment =async(req, res)=>{
    try {
        const data =await payment.find()
            res.status(201).json(data)
        
    } catch (error) {
        console.log(error.message)
        
    }
    }

    module.exports={
        Addpayment,
       
    
    
    }