const express = require('express')
const products = require('../controllers/products')
const categories = require('../controllers/categories')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'Home Page' })
})

/* Products Related */
router.get('/products', products.list)
router.post('/products', products.createOne)

router.get('/categories', categories.list)
router.post('/categories', categories.createOne)

module.exports = router
