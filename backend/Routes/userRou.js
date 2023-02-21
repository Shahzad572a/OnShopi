import express from 'express'
const router = express.Router() 
import { 
    authtUser,
    getUserProfile,
    registerUser,
    updateProfile,
    getUser          
} from '../controler/userCont.js'
import { protect ,admin} from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect,admin,getUser)
router.post('/login',authtUser)
router.route('/profile')
.get(protect,getUserProfile)
.put(protect,updateProfile)
export default router