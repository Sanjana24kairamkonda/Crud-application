const express = require('express')
const router = express.Router()
const book1= require('../models/book')
router.get('/',async(req,res)=>
{
    try{
        const b1=await book1.find()
        res.json(b1)
    }catch(err)
    {
        res.send ('error'+err)
    }
})
router.post('/',async(req,res)=>
{
    const b2= new book1({
        title:req.body.title,
        author:req.body.author,
        purchased:req.body.purchased
    })
    try{
        const b3= await b2.save()
        res.json(b3)
    }catch(err){
        res.send('error'+err)
    }

}) 
module.exports=router