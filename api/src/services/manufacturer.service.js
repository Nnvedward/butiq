const Manufacturer = require('../models/manufacturer.model')
const CustomError = require('../utils/custom-error')

class ManufacturerService {
    // Create Manufacturer
    async create(data) {
        const manufacturer = new Manufacturer(data)
        await manufacturer.save()

        return data = {
            manufacturer: manufacturer.name,
            location: manufacturer.location
        }
    }

    // Update manufacturer
    async update(manufacturerId, data) {
        const manufacturer = await Manufacturer.findByIdAndUpdate(
            { _id: manufacturerId },
            { $set: data },
            { new: true }
        )

        if (!manufacturer) throw new CustomError('Manufacturer not found!', 404)

        return data = {
            manufacturer: manufacturer.name,
            location: manufacturer.location
        }
    }

    // Get manufacturer
    async getManufacturer(manufacturerId) {
        const manufacturer = await Manufacturer.findById({ _id: manufacturerId })
        if (!manufacturer) throw new CustomError('Manufacturer not found!', 404)

        return manufacturer
    }

    // Get all manufacturers
    async getAllManufacturers() {
        const manufacturers = await Manufacturer.find()
        if (!manufacturers) throw new CustomError('No manufacturers found!', 404)

        return manufacturers
    }

    // Delete manufacturer
    async deleteManufacturer(manufacturerId) {
        const manufacturer = await Manufacturer.findByIdAndDelete({ _id: manufacturerId })

        if (!manufacturer) throw new CustomError('Manufacturer not found!', 404)

        return manufacturer
    }
}

module.exports = new ManufacturerService()