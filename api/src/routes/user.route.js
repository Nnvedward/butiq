const router = require('express').Router()
const UserCtrl = require('../controllers/user.controller')
const { auth, authAndAdmin } = require('../middlewares/auth.middleware')

router.get('/stats', authAndAdmin, UserCtrl.getUserStats)
router.patch('/:userId', auth, UserCtrl.update)
router.get('/:userId', auth, UserCtrl.getUser)
router.get('/', authAndAdmin, UserCtrl.getAllUsers)
router.delete('/:userId', auth, UserCtrl.deleteUser)

module.exports = router