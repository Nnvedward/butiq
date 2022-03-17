const router = require('express').Router()
const RoleCtrl = require('../controllers/role.controller')

router.post('/role', RoleCtrl.createRole)
router.get('/:roleId', RoleCtrl.getRole)
router.post('/permission', RoleCtrl.createPermission)
router.get('/manage-permission/:roleId', RoleCtrl.managePermission)
router.post('/manage-role-permission/:roleId', RoleCtrl.manageRolePermission)
router.get('/assigned-permission/:roleId', RoleCtrl.getAssignedRolePermissions)

module.exports = router