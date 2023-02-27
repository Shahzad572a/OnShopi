import path from 'path'
import express from 'express'
import dotenv from'dotenv'
import colors from 'colors'
import connDB from './config/db.js'
// import products from './data/products.js'

import productRouter from './Routes/productRoutes.js'
import userRouter from './Routes/userRou.js'
import odersRouter from './Routes/orderRou.js'
import imgUpload from './Routes/imgUploadRou.js'
import { notFound, errorHandler } from './middleware/error.js'

dotenv.config()

connDB()

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Api is runing......')
}) 

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use('/api/orders',odersRouter,)
app.use('/api/uploads',imgUpload,)



const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


app.use(notFound)
app.use(errorHandler)

//
// const apiUrl = 'https://your-api.com/codes';

// const getCodes = async () => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const codes = await getCodes();
//
// app.get('/api/products',(req,res)=>{
//     res.json(products)
// })

// app.get('/api/products/:id',(req,res)=>{
//     const good =products.find(p=> p._id === req.params.id)
//     res.json(good)
// })

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`server is runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    )