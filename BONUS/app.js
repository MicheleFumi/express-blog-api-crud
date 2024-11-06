const express = require('express');
const app = express();
const host = process.env.HOST
const port = process.env.PORT
const products= require('./db/products.js');
const { get } = require('../routers/post');

app.listen(3000,()=>{
    console.log(`server is running at ${host}:${port} `);
   
    
})
// get all products
app.get('/index', (req,res)=>{

    res.json({ 
        data: products,
        count: products.length
     })

})  

// get one product by id
app.get('/product/:id', (req,res)=>{
    const product = products.find((product)=> product.id === parseInt(req.params.id))
    if(!product){
        res.status(404).json({message: 'product not found'})
    }else{
        res.status(200).json({data: product})
    }
})