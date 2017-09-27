require('../app')
const mongoose = require('mongoose')
const { cleanup } = require('./helper')
const co = require('co')

const Product = mongoose.model('Product')

const cats1 = ['cate-1', 'cate-2']
const cats2 = ['cate-1', 'cate-3']
const cates = [cats1, cats2]
const targetCates = ['cate-1', 'cate-4'] // will use cate-4 as the target category which will be used as find criteria to test performance

before((done) => { cleanup(done) })

/* eslint-disable no-plusplus */
describe('try to create huge documents into Product', function f() {
  this.timeout(900000) //  This is mandatory, otherwise the test will failed: http://mochajs.org/#timeouts
  it('should create a 1000000 product', (done) => {
    co(function* test() {
      for (let i = 0; i < 1000000; i++) {
        const product = new Product({ code: `p-${i}`, name: `Product ${i}`, price: 19, categories: cates[i % 2] })
        yield product.save()
      }
      done()
    })
  })

  it('should create a 20 product', (done) => {
    co(function* test() {
      for (let i = 0; i < 20; i++) {
        const product = new Product({ code: `pp-${i}`, name: 'ihpone', price: 19, categories: targetCates })
        yield product.save()
      }
      done()
    })
  })
})

// after((done) => { cleanup(done) })  // Comment out so that the data will not be cleaned
