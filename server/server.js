const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

server.use('/api', require('../api/routers/router.js'))
server.use(require('../client/nuxt-render.js'))

server.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
