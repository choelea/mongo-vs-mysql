require('../app')
const mongoose = require('mongoose')
const { cleanup } = require('./helper')
const co = require('co')

const Product = mongoose.model('Product')
const PRODUCT = { code: 'test1', name: 'Product Name1', price: 1 }

before((done) => { cleanup(done) })

describe('try', () => {
  it('should create a new product', (done) => {
    co(function* test() {
      const product = new Product(PRODUCT)
      yield product.save()
      done()
    })
  })
})

after((done) => { cleanup(done) })
