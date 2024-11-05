const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers.js')



router.get('/' ,postControllers.index)
router.get('/:slug', postControllers.show) 




module.exports = router