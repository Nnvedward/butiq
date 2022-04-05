const RoleServ = require('../services/role.service')
const response = require('../utils/response')

class RoleController {
    async createRole(req, res) {
        const result = await RoleServ.createRole(req.body)
        res.status(201).send(response('Role created', result))
    }

    async getRole(req, res) {
        const result = await RoleServ.getRole(req.params.roleId)
        res.status(200).send(response('Role data', result))
    }

    async getUserRole(req, res) {
        const result = await RoleServ.getUserRole()
        res.status(200).send(response('User role', result))
    }
}

module.exports = new RoleController()