import express from 'express'
const router = express.Router()
import {
  orderedItems,
  orderedById,
  updOrderToPaid,
  orderInProfile,
  orderInAdmin
   
} from '../controler/orderCon.js'
import { admin, protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, orderedItems).get(protect ,admin ,orderInAdmin)
router.route('/myorders').get(protect, orderInProfile)
router.route('/:id').get(protect, orderedById)
router.route('/:id/pay').put(protect, updOrderToPaid)
// router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router