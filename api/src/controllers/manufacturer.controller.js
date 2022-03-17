const ManufacturerServ = require('../services/manufacturer.service')
const response = require('../utils/response')

class ManufacturerController {
    async create(req, res) {
        const result = await ManufacturerServ.create(req.body)
        res.status(201).send(response('Manufacturer created!', result))
    }

    async update(req, res) {
        const result = await ManufacturerServ.update(req.params.manufacturerId, req.body)
        res.status(200).send(response('Manufacturer updated!', result))
    }

    async getManufacturer(req, res) {
        const result = await ManufacturerServ.getManufacturer(req.params.manufacturerId)
        res.status(200).send(response('Manufacturer data!', result))
    }

    async getAllManufacturers(req, res) {
        const result = await ManufacturerServ.getAllManufacturers()
        res.status(200).send(response('Manufacturers data!', result))
    }

    async deleteManufacturer(req, res) {
        const result = await ManufacturerServ.deleteManufacturer(req.params.manufacturerId)
        res.status(200).send(response('Manufacturer deleted!', result))
    }
}

module.exports = new ManufacturerController()