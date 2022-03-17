const CategoryCtrl = require('../controllers/category.controller')
const router = require('express').Router()

router.post('/create', CategoryCtrl.create)
router.patch('/update/:categoryId', CategoryCtrl.update)
router.get('/find/:categoryId', CategoryCtrl.getCategory)
router.get('/', CategoryCtrl.getAllCategories)
router.delete('/:categoryId', CategoryCtrl.deleteCategory)

module.exports = router