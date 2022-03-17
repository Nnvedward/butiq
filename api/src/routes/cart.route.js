const CartCtrl = require('../controllers/cart.controller')
const router = require('express').Router()

router.post('/add', CartCtrl.add)
router.patch('/update/:cartId', CartCtrl.update)
router.get('/:userId', CartCtrl.getUserCart)
router.get('/', CartCtrl.getAllCarts)
router.delete('/:cartId', CartCtrl.deleteCart)

module.exports = router