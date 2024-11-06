const products = require('../db/products.js');
const fs = require('fs')

const index= (req,res)=>{

    res.json({ 
        data: products,
        count: products.length
     })

}

const show = (req,res)=>{
    const product = products.find((product)=> product.id === parseInt(req.params.id))
    if(!product){
        res.status(404).json({message: 'product not found'})
    }else{
        res.status(200).json({data: product})
    }
}

const store = (req,res)=>{
    const newProduct = {
         id : products[products.length -1].id + 1 , 
         nome : req.body.nome,
         prezzo : parseInt(req.body.prezzo),
         categoria : req.body.categoria,
         disponibile : req.body.disponibile
         
     }
     products.push(newProduct)
     res.status(201).json({data : products, count : products.length})
     fs.writeFileSync('./db/products.json',`module.exports=${JSON.stringify(products, null , 4)}`)

}

const update = (req,res)=>{
    const product = products.find((product)=>product.id === parseInt(req.params.id))
    if(!product){
        return res.status(404).json({message: 'product not found'})
    }

    product.id = products[products.length -1].id + 1 , 
    product.nome = req.body.nome,
    product.prezzo = req.body.prezzo,
    product.categoria = req.body.categoria,
    product.disponibile = req.body.disponibile

    fs.writeFileSync('./db/products.js',`module.exports=${JSON.stringify(products, null, 4)}`)

    res.status(201).json({data: products})
}
const destroy= (req,res)=>{
    const product = products.find((product)=>product.id === parseInt(req.params.id))
    if(!product){
        return res.status(404).json({message:'product not found'})
     }
     const newList = products.filter((product)=> product.id !== parseInt(req.params.id))

    fs.writeFileSync('./db/products.js', `module.exports=${JSON.stringify(newList, null, 4)}`)
    res.status(201).json({
        status:200,
        data: products
    })
}


module.exports = {
    index,
    show,
    store,
    update,
    destroy
};
