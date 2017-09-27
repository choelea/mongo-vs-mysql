const { wrap: async } = require('co')
const mongoose = require('mongoose')

const { assign } = Object
const Product = mongoose.model('Product')
/* GET users listing. */
exports.list = async(function* list(req, res) {
  const options = {}
  if (req.query.cate) {
    assign(options, { categories: req.query.cate })
  }
  const products = yield Product.find(options).exec()
  res.json(products)
})

exports.createOne = async(function* list(req, res) {
  try {
    const product = new Product(req.body)
    const newProduct = yield product.save()
    res.json(newProduct)
  } catch (err) {
    res.status(500).json(err)
  }
})

