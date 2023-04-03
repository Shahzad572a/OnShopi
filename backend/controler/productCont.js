import asyncHandler from 'express-async-handler'
import ProductMod from '../models/productMod.js'


const getProduct = asyncHandler(async(req,res) =>{

  const pageSize = 8
  const page = Number (req.query.pageNumber) || 1

    
  const key =req.query.key ? {
    name: {
      $regex: req.query.key,
      $options: 'i',
    }
  }: {}

  const count = await ProductMod.countDocuments({ ...key })
  const products = await ProductMod.find({ ...key})
  .limit(pageSize)
  .skip(pageSize * (page-1))
  
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
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



  
  const sortProducts = async (req, res) => {
    const sortOrder = req.params.sortOrder == 'low' ? 1 : -1;

  try {
    const products = await ProductMod.find().sort({ price: sortOrder });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
  };



  const productReview = asyncHandler(async (req, res) => {
    const {rating ,comment} =req.body
  const product = await ProductMod.findById(req.params.id);
  
    
  if (product) {

    const aReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (aReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

      product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length
      await product.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  });

  const topProductss =asyncHandler(async(req ,res) => {
    const products = await ProductMod.find({}).sort({ rating: -1 }).limit(3)

    res.json(products)

  })
        export {
            getProduct,
            getProductById,
            productRemoved,
            productCreated,
            productUpdated,
            sortProducts,
            productReview,
            topProductss
            
        }
