const UserServ = require('../services/user.service')
const response = require('../utils/response')

class UserController {
    async update(req, res) {
        const result = await UserServ.update(req.params.userId, req.body)
        res.status(201).send(response('User updated successfully!', result))
    }

    async getUser(req, res) {
        const result = await UserServ.getUser(req.params.userId)
        res.status(200).send(response('User data', result))
    }

    async getAllUsers(req, res) {
        const result = await UserServ.getAllUsers(req.query)
        res.status(200).send(response('All users', result))
    }

    async deleteUser(req, res) {
        const result = await UserServ.deleteUser(req.params.userId)
        res.status(200).send(response('User deleted!', result))
    }

    async getUserStats(req, res) {
        const result = await UserServ.getUserStats()
        res.status(200).send(response('User stats', result))
    }
}


module.exports = new UserController()