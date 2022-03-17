const AuthServ = require('../services/auth.service')
const response = require('../utils/response')

class AuthController {
    async signup(req, res) {
        const result = await AuthServ.signup(req.body)
        res.status(201).send(response('User created', result))
    }
    async signin(req, res) {
        const result = await AuthServ.signin(req.body)
        res.status(200).send(response('User login successful', result))
    }
}

module.exports = new AuthController