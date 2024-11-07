const express = require('express')
const app = express()
const host = process.env.HOST
const port = process.env.PORT
app.use(express.static('public'))
const postRouter = require('./routers/post.js')
app.use(express.json())
const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/logger.js')


app.listen(3000,(req, res)=>{
    console.log(`server is running at ${host}:${port} `);
   
    
})

// MIDDLEWARES FOR ERROR HANDLING
app.use(loggerMiddleware)

app.use("/post",notFoundMiddleware)

app.use("/post",postRouter)   

app.use("/index",postRouter)

app.use("/",postRouter)

app.put('/:slug',postRouter)

app.delete('/:slug',postRouter)





