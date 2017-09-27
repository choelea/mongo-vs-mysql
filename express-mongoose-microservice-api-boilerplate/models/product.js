const mongoose = require('mongoose')

const Schama = mongoose.Schema

const ProductSchema = new Schama({
  code: { type: String, required: true, index: true, unique: true, trim: true, lowercase: true },
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0, max: 100000 },
  categories: [String],
})

mongoose.model('Product', ProductSchema)
