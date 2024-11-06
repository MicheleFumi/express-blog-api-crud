const express = require('express');
const app = express();
const host = process.env.HOST
const port = process.env.PORT
const postRoutes = require('./routes/products')


app.listen(3000,()=>{
    console.log(`server is running at ${host}:${port} `);
   
    
})

app.use('/',postRoutes)