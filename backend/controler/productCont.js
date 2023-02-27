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

  // remove by Admin
        const productRemoved = asyncHandler(async(req,res) =>{
            const product =await ProductMod.findById(req.params.id)
             
            if(product){
                await product.remove()
                res.json('Product removed')
            } else{
                res.status(404)
                throw new Error ('Product not found')
                }})


               
                // created by Admin
const productCreated = asyncHandler(async (req, res) => {
    const product = new ProductMod({
      name: 'Sample name',
      price: 0,
      user: req.user._id,
      image: '/images/sample.jpg',
      brand: 'Sample brand',
      category: 'Sample category',
      countInStock: 0,
      numReviews: 0,
      description: 'Sample description',
    });
  
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  });


//   updated by admin 
  const productUpdated = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body;
  
    const product = await ProductMod.findById(req.params.id);
  
    if (product) {
      product.name = name;
      product.price = price;
      product.description = description;
      product.image = image;
      product.brand = brand;
      product.category = category;
      product.countInStock = countInStock;
  
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  });
        export {
            getProduct,
            getProductById,
            productRemoved,
            productCreated,
            productUpdated
        }
