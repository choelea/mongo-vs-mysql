/**
 * Module dependencies.
 */

const mongoose = require('mongoose')

const Product = mongoose.model('Product')
const co = require('co')

/**
 * Clear database
 *
 * @param {Object} t<Ava>
 * @api public
 */

exports.cleanup = (done) => {
  co(function* f() {
    yield Product.remove()
    // yield Article.remove()
    done()
  })
}
