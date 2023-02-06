 import express from 'express'
 import asyncHandler from 'express-async-handler'
 const router = express.Router()
 import ProductMod from '../models/productMod.js'


 router.get(
    '/', 
    asyncHandler(async(req,res)=>{
 const products = await ProductMod.find({})
     
    res.json(products)
}))

router.get('/:id',
asyncHandler(async(req,res)=>{
    const goad =await ProductMod.findById(req.params.id)
    
    if(goad){
        res.json(goad)
    } else{
        res.status(404)
        throw new Error ('Product not found')
        }}))
    



 export default router