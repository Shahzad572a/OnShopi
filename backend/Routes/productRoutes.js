 import express from 'express'
 const router = express.Router() 
 import {getProduct,
    getProductById,
    productCreated,
    productRemoved, 
    productUpdated,
    sortProducts
} from '../controler/productCont.js'
 import { protect ,admin} from '../middleware/authMiddleware.js'


 router.route('/')
 .get(getProduct)
 .post(protect,admin,productCreated)
   

router.route('/:id')
.get(getProductById)
.delete(protect,admin,productRemoved)
.put(protect,admin,productUpdated)

router.route('/sort/:sortOrder')
.get(sortProducts);
 
    



 export default router