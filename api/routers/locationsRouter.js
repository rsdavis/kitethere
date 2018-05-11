const express = require('express')
// const twilio = require('twilio')

const Location = require('../schema/locationsSchema.js')
// const Address = require('../schema/addressSchema.js')

const router = express.Router()
// const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
// const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN

// var twilioClient = new twilio(twilioAccountSid, twilioAuthToken)

router.get('/spots', function (req, res) {
  let query = Location.aggregate([
    { "$group": {_id: "$spotID", doc: {$last: "$$ROOT"}} }
  ])

  query.exec((err, docs) => {
    if (err) { return res.status(500).json(err) }
    const spots = docs.map(doc => { return doc.doc })
    res.json(spots)
  })
})

router.get('/spots/:spotID', function (req, res) {
  let query = Location.findOne({ 'spotID': req.params.spotID }).sort('-version')

  query.exec((err, doc) => {
    res.json(doc)
  })
})

/*
router.post('/spots', function (req, res) {

  let location = new Location(req.body)
  location.save()

  // send twilio message
  twilioClient.messages.create({
    body: 'New spot added: ' + location.spotID + ' - ' + location.name,
    to: '+16098650264',
    from: '+12678438391'
  }).then(message => {
    console.log("Twilio message sent: " + message.sid)
  }).catch(error => {
    console.log("Error sending twilio message")
    console.log(error)
  })

  res.json(location)
})

router.post('/address', function (req, res) {
  let address = new Address(req.body)
  address.save()
  res.json(address)
})

router.put('/spots/:spotID', function (req, res) {
  let location = new Location(req.body)
  location.spotID = req.params.spotID
  Location.find({ 'spotID': req.params.spotID }).count((err, count) => {
    location.version = count
    location.save()
    res.json(location)
  })
})
*/

module.exports = router
