const ManufacturerCtrl = require('../controllers/manufacturer.controller')
const router = require('express').Router()

router.post('/create', ManufacturerCtrl.create)
router.patch('/update/:manufacturerId', ManufacturerCtrl.update)
router.get('/find/:manufacturerId', ManufacturerCtrl.getManufacturer)
router.get('/', ManufacturerCtrl.getAllManufacturers)
router.delete('/:manufacturerId', ManufacturerCtrl.deleteManufacturer)

module.exports = router