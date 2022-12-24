const express =require('express')

const app = express()
app.get('/',(req,res)=>{
    res.send('Api is runing')
}) 

app.listen(5000, console.log('server is runing on port 5000'))