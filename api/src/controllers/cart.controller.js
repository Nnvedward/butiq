const CartServ = require('../services/cart.service')
const response = require('../utils/response')

class CartController {
    async add(req, res) {
        const result = await CartServ.add(req.body)
        res.status(201).send(response('Cart Added!', result))
    }

    async update(req, res) {
        const result = await CartServ.update(req.params.cartId, req.body)
        res.status(200).send(response('Cart updated!', result))
    }

    async getUserCart(req, res) {
        const result = await CartServ.getUserCart(req.params.userId)
        res.status(200).send(response('User cart data!', result))
    }

    async getAllCarts(req, res) {
        const result = await CartServ.getAllCarts()
        res.status(200).send(response('Cart datas!', result))
    }

    async deleteCart(req, res) {
        const result = await CartServ.deleteCart(req.params.cartId)
        res.status(200).send(response('Cart deleted!', result))
    }
}

module.exports = new CartController()