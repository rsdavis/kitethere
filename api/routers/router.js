const express = require('express')

const router = express.Router()

router.get('/items', function (req, res) {
  res.json({'hello': 'world'})
})

router.post('/items', function (req, res) {
})

module.exports = router
