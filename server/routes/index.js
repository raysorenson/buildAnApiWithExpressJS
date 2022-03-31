const express = require('express')
const chirpsRouter = require('./chirps')
const router = express.Router() //router declared

router.use('/chirps', chirpsRouter)


module.exports = router