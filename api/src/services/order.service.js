const Order = require('../models/order.model')
const CustomError = require('../utils/custom-error')

class OrderService {
    // Create Order
    async create(data) {
        const order = new Order(data)
        await order.save()

        return data = {
            user: order.user,
            items: order.items,
            amount: order.amount,
            status: order.status
        }
    }

    // Update Order
    async update(orderId, data) {
        const order = await Order.findByIdAndUpdate(
            { _id: orderId },
            { $set: data },
            { new: true }
        )

        if (!order) throw new CustomError('Order not found!', 404)

        return data = {
            user: order.user,
            items: order.items,
            amount: order.amount,
            status: order.status
        }
    }

    // Get user orders
    async getUserOrder(userId) {
        const orders = await Order.find({ user: userId })
        
        if (!orders) throw new CustomError('User orders not found!', 404)

       return orders
    }

    // Get all orders
    async getAllOrders() {
        const orders = await Order.find()

        if (!orders) throw new CustomError('No order found!', 404)

        return orders
    }

    // Delete order
    async deleteOrder(orderId) {
        const order = await Order.findByIdAndDelete({ _id: orderId })

        if (!order) throw new CustomError('Order not found!', 404)

        return order
    }
}

module.exports = new OrderService()