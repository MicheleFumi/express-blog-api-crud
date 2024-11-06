const products = require('../db/products.js');

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



module.exports = {
    index,
    show,
};
