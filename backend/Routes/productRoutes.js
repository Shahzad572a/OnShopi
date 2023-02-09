 import express from 'express'
 const router = express.Router() 
 import {getProduct,getProductById} from '../controler/productCont.js'


 router.route('/').get(getProduct)
   

router.route('/:id').get(getProductById)
 
    



 export default router