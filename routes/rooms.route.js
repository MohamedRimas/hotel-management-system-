const express =require('express');
const { Addrooms, FindAllrooms, FindSingrooms, Updaterooms, Deleterooms } = require('../controllers/rooms.controllers');
const router =express.Router()



router.post('/rooms',Addrooms)

router.get('/rooms',FindAllrooms)

router.get('/rooms/:id',FindSingrooms)


router.put('/rooms/:id',Updaterooms)

router.delete('/rooms/:id',Deleterooms)
module.exports=router;