import express from 'express'
const router = express.Router() 
import { authtUser,getUserProfile,registerUser } from '../controler/userCont.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser)
router.post('/login',authtUser)
router.route('/profile').get(protect,getUserProfile)
export default router