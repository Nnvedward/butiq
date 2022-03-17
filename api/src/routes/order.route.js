const OrderCtrl = require('../controllers/order.controller')
const router = require('express').Router()

router.post('/create', OrderCtrl.create)
router.patch('/update/:orderId', OrderCtrl.update)
router.get('/:userId', OrderCtrl.getUserOrder)
router.get('/', OrderCtrl.getAllOrders)
router.delete('/:orderId', OrderCtrl.deleteOrder)

module.exports = router