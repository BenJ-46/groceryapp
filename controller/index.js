const router = require('express').Router()

router.use('/api', require('./groceryController'))

module.exports = router