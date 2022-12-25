const express =require('express');
const { Addpayment } = require('../controllers/payment.controller');
const router =express.Router()



router.post('/payment',Addpayment)


module.exports=router;