const express =require('express')
const products =require('./data/products')

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
app.listen(5000, console.log('server is runing on port 5000'))