const router = require('express').Router()

router.use('/cars', require('./cars'))
router.use('/orders', require('./orders'))
router.use('/carts', require('./carts'))
router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
