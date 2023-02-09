import asyncHandler from 'express-async-handler'
import ProductMod from '../models/productMod.js'


const getProduct = asyncHandler(async(req,res) =>{
    const products = await ProductMod.find({})
     
    res.json(products)
})

const getProductById = asyncHandler(async(req,res) =>{
    const product =await ProductMod.findById(req.params.id)
     
    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error ('Product not found')
        }})

        export {
            getProduct,
            getProductById
        }
