const ShippingServ = require('../services/shipping.service')
const response = require('../utils/response')

class ShippingController {
    async create(req, res) {
        const result = await ShippingServ.create(req.body)
        res.status(201).send(response('Shipping order created!', result))
    }

    async update(req, res) {
        const result = await ShippingServ.update(req.params.shippingId, req.body)
        res.status(200).send(response('Shipping order updated!', result))
    }

    async getShipping(req, res) {
        const result = await ShippingServ.getShipping(req.params.shippingId)
        res.status(200).send(response('Shipping order data!', result))
    }

    async getAllShipping(req, res) {
        const result = await ShippingServ.getAllShipping()
        res.status(200).send(response('All Shipping!', result))
    }

    async deleteShipping(req, res) {
        const result = await ShippingServ.deleteShipping(req.params.shippingId)
        res.status(200).send(response('Shipping order deleted!', result))
    }
}

module.exports = new ShippingController()