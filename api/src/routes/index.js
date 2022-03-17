const router = require('express').Router()

router.use('/users', require('./user.route'))
router.use('/auth', require('./auth.route'))
router.use('/role', require('./role.route'))
router.use('/category', require('./category.route'))
router.use('/manufacturer', require('./manufacturer.route'))
router.use('/item', require('./item.route'))
router.use('/cart', require('./cart.route'))
router.use('/order', require('./order.route'))
router.use('/shipping', require('./shipping.route'))

module.exports = router