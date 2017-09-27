const mongoose = require('mongoose')

const Schama = mongoose.Schema

const CategorySchema = new Schama({
  code: { type: String, required: true, index: true, unique: true, trim: true, lowercase: true },
  name: { type: String, required: true, trim: true },
})

mongoose.model('Category', CategorySchema)
