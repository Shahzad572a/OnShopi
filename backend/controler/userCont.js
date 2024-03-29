import asyncHandler from 'express-async-handler'
import User from '../models/userMod.js'
import generateToken from '../utils/generateToken.js'

// login
const authtUser = asyncHandler(async(req,res) =>{
   const {email,password} =req.body 
    
   const  user =await User.findOne({email})

   if(user && (await user.matchPassword(password))){
    res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin:user.isAdmin,
    token: generateToken(user._id)
   })   
}else{
    res.status(401)
    throw new Error('Invaild email or password')
}
})



// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
  
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const user = await User.create({
      name,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })
  

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

  // @desc    update user profile
 // #Route  PUT/api/users/profile
  const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })


  // @desc    Get all User  
// @route   GET /api/users/ 
// by admin
  const getUser = asyncHandler(async (req, res) => {
    
    const pageSize = 4
  const page = Number (req.query.pageNumber) || 1

  const key =req.query.key ? {
    name: {
      $regex: req.query.key,
      $options: 'i',
    }
  }: {}

  const count = await User.countDocuments({ ...key })
    const users = await User.find({ ...key })
  
    .limit(pageSize)
  .skip(pageSize * (page-1))
  
  res.json({ users, page, pages: Math.ceil(count / pageSize) })
  })
 
  //remove user profile
// by admin
//Arrow function   ,,,,same
// const removeUser = asyncHandler(async (req, res) => {
//  const user = await User.findById(req.params.id)

//   if(user) {
//     await user.remove()
//      res.json({message:'User removed'})
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
//   })

//Simple function  ,,,,same
  function removeUser(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else if (user) {
        user.remove((err) => {
          if (err) {
            res.status(500).json({ error: err.message })
          } else {
            res.json({ message: 'User removed' })
          }
        })
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    })
  }

  // @desc    Get user by ID
  // @route   GET /api/users/:id 
// by admin
const getUserbyId = asyncHandler(async (req, res) => {
 const user = await User.findById(req.params.id).select('-password')

  if(user) {
     res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
  })


  // @desc    update user  
 // #Route  PUT/api/users/:id 
 const updateUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin || user.isAdmin
   
    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})




export {
  authtUser,
  getUserProfile,
  registerUser,
  updateProfile,
  getUser,
  removeUser,
  getUserbyId,
  updateUserById
}