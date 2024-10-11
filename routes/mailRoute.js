const express=require('express')
const { mailController } = require('../controllers/mailController')

const router=express.Router()

router.post('/sendmail',mailController)

module.exports=router