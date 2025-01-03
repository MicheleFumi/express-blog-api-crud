const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers.js')



router.get('/', postControllers.index)
router.get('/:slug', postControllers.show)
router.post('/', postControllers.store)
router.put('/:slug', postControllers.update)
router.delete('/:index', postControllers.destroy)


module.exports = router