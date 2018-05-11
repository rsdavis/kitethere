const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()


const server = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// connect to mLab
const mLabUser = process.env.MLAB_DB_USER
const mLabPassword = process.env.MLAB_DB_PASSWORD
var mongodb = 'mongodb://' + mLabUser + ':' + mLabPassword + '@ds249818.mlab.com:49818/kitethere'

mongoose.Promise = global.Promise;
mongoose.connect(mongodb)
  .then( () => console.log('DB Connection Successful') )
  .catch( (err) => { console.log(err); process.exit(1); } );

server.use('/api', require('../api/routers/locationsRouter.js'))
server.use(require('../client/nuxt-render.js'))

server.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
