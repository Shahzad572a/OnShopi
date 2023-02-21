import express from 'express'
const router = express.Router()
import {
  orderedItems,
  orderedById,
  updOrderToPaid
 
  // updateOrderToDelivered,
  // getMyOrders,
  // getOrders,
} from '../controler/orderCon.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, orderedItems)
// router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, orderedById)
router.route('/:id/pay').put(protect, updOrderToPaid)
// router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router