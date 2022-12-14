import express from 'express'
import dotenv from'dotenv'
import colors from 'colors'
import connDB from './config/db.js'
import products from './data/products.js'


dotenv.config()

connDB()

const app = express()
app.get('/',(req,res)=>{
    res.send('Api is runing......')
}) 

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const good =products.find(p=> p._id === req.params.id)
    res.json(good)
})

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`server is runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    )