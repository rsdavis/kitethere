const mongoose = require('mongoose')
const shortid = require('shortid')

let schema = new mongoose.Schema({
  spotID: { 'type': String, 'default': shortid.generate },
  version: { 'type': Number, 'default': 0 },
  date: { type: Date, default: Date.now },
  name: String,
  description: String,
  position: {'lat': Number, 'lng': Number},
  sections: [{'heading': String, 'body': String, '_id': false}],
  images: [{'name': String, 'url': String, '_id': false}]
})

schema.index({ spotID: 1, version: 1 })
module.exports = mongoose.model('location', schema)
