 import express from 'express'
 const router = express.Router() 
 import {getProduct,
    getProductById,
    productCreated,
    productRemoved, 
    productUpdated,
    sortProducts,
    productReview,
    topProductss
} from '../controler/productCont.js'
 import { protect ,admin} from '../middleware/authMiddleware.js'


 router.route('/')
 .get(getProduct)
 .post(protect,admin,productCreated)
   
 router.route('/:id/reviews').post(protect,productReview)
 router.get('/top',topProductss) 

router.route('/:id')
.get(getProductById)
.delete(protect,admin,productRemoved)
.put(protect,admin,productUpdated)




router.route('/sort/:sortOrder')
.get(sortProducts);
 
    



 export default router