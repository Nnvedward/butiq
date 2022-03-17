const Shipping = require('../models/shipping.model')
const CustomError = require('../utils/custom-error')

class ShippingService {
    // Create shipping order
    async create(data) {
        const shipping = new Shipping(data)
        await shipping.save()

        return data = {
            address: shipping.address,
            order: shipping.order,
            cost: shipping.cost
        }
    }

    // Update Shipping order
    async update(shippingId, data) {
        const shipping = await Shipping.findByIdAndUpdate(
            { _id: shippingId },
            { $set: data },
            { new: true }
        )

        if (!shipping) throw new CustomError('Shipping not found!', 404)

        return data = {
            address: shipping.address,
            order: shipping.order,
            cost: shipping.cost
        }
    }

    // Get shipping order
    async getShipping(shippingId) {
        const shipping = await Shipping.findOne({ _id: shippingId })
        
        if (!shipping) throw new CustomError('Shipping not found!', 404)

       return shipping
    }

    // Get all shipping orders
    async getAllShipping() {
        const shippings = await Shipping.find()

        if (!shippings) throw new CustomError('No shipping order found!', 404)

        return shippings
    }

    // Delete shipping order
    async deleteShipping(shippingId) {
        const shipping = await Shipping.findByIdAndDelete({ _id: shippingId })

        if (!shipping) throw new CustomError('Shipping order not found!', 404)

        return shipping
    }
}

module.exports = new ShippingService()