const OrderServ = require('../services/order.service')
const response = require('../utils/response')

class OrderController {
    async create(req, res) {
        const result = await OrderServ.create(req.body)
        res.status(201).send(response('Order created!', result))
    }

    async update(req, res) {
        const result = await OrderServ.update(req.params.orderId, req.body)
        res.status(200).send(response('Order updated!', result))
    }

    async getUserOrder(req, res) {
        const result = await OrderServ.getUserOrder(req.params.userId)
        res.status(200).send(response('User order data!', result))
    }

    async getAllOrders(req, res) {
        const result = await OrderServ.getAllOrders()
        res.status(200).send(response('All orders!', result))
    }

    async deleteOrder(req, res) {
        const result = await OrderServ.deleteOrder(req.params.orderId)
        res.status(200).send(response('Order deleted!', result))
    }

    async getIncome(req, res) {
        const result = await OrderServ.getIncome()
        res.status(200).send(response('Monthly income!', result))
    }
}

module.exports = new OrderController()