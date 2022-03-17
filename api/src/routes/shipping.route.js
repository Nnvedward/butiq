const ShippingCtrl = require('../controllers/shipping.controller')
const router = require('express').Router()

router.post('/create', ShippingCtrl.create)
router.patch('/update/:shippingId', ShippingCtrl.update)
router.get('/:shippingId', ShippingCtrl.getShipping)
router.get('/', ShippingCtrl.getAllShipping)
router.delete('/:shippingId', ShippingCtrl.deleteShipping)

module.exports = router