const ItemCtrl = require('../controllers/item.controller')
const router = require('express').Router()

router.post('/create', ItemCtrl.create)
router.patch('/update/:itemId', ItemCtrl.update)
router.get('/find/:itemId', ItemCtrl.getItem)
router.get('/', ItemCtrl.getAllItems)
router.delete('/:itemId', ItemCtrl.deleteItem)

module.exports = router