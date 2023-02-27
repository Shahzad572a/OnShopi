 import express from 'express'
 const router = express.Router() 
 import {getProduct,getProductById,productCreated,productRemoved, productUpdated} from '../controler/productCont.js'
 import { protect ,admin} from '../middleware/authMiddleware.js'


 router.route('/')
 .get(getProduct)
 .post(protect,admin,productCreated)
   

router.route('/:id')
.get(getProductById)
.delete(protect,admin,productRemoved)
.put(protect,admin,productUpdated)
 
    



 export default router