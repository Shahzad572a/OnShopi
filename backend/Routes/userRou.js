import express from 'express'
const router = express.Router() 
import { 
    authtUser,
    getUserProfile,
    registerUser,
    updateProfile,
    getUser,
    removeUser,
    getUserbyId,
    updateUserById     
} from '../controler/userCont.js'
import { protect ,admin} from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect,admin,getUser)
router.post('/login',authtUser)
router.route('/profile')
.get(protect,getUserProfile)
.put(protect,updateProfile)
router.route('/:id')
.delete(protect,admin, removeUser)
.get(protect,admin,getUserbyId)
.put(protect,admin,updateUserById)

 

 
export default router