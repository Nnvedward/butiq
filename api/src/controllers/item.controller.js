const ItemServ = require('../services/item.service')
const response = require('../utils/response')

class ItemController {
    async create(req, res) {
        const result = await ItemServ.create(req.body)
        res.status(201).send(response('Item created!', result))
    }

    async update(req, res) {
        const result = await ItemServ.update(req.params.itemId, req.body)
        res.status(200).send(response('Item updated!', result))
    }

    async getItem(req, res) {
        const result = await ItemServ.getItem(req.params.itemId)
        res.status(200).send(response('Item data!', result))
    }

    async getAllItems(req, res) {
        const result = await ItemServ.getAllItems()
        res.status(200).send(response('Item datas!', result))
    }

    async deleteItem(req, res) {
        const result = await ItemServ.deleteItem(req.params.itemId)
        res.status(200).send(response('Item deleted!', result))
    }
}

module.exports = new ItemController()