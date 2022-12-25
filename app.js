var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config()



const routerRooms=require('./routes/rooms.route')
const routerpayment=require('./routes/payment.route')




var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true, 
     useUnifiedTopology: true 

    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });


 app.use('/api',routerRooms)
 app.use('/api',routerpayment)
 





module.exports = app;
