const express = require('express');
const router = express.Router();
const productsController =require('../controller/ProductsControllers.js')

// get all products
router.get('/products', productsController.index)  

// get one product by id
router.get('/products/:id', productsController.show)

// create a new product
router.post('/products', productsController.store)

// update an existing product
router.put('/products/:id', productsController.update)

// delete an existing product
router.delete('/products/:id', productsController.destroy)

module.exports = router;