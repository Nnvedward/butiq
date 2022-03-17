const Cart = require('../models/cart.model')
const CustomError = require('../utils/custom-error')


class CartService {
    // Add to cart
    async add(data) {
        const cart = new Cart(data)
        await cart.save()

        return data = {
            user: cart.user,
            items: cart.items
        }
    }

    // Update cart
    async update(cartId, data) {
        const cart = await Cart.findByIdAndUpdate(
            { _id: cartId },
            { $set: data },
            { new: true }
        )

        if (!cart) throw new CustomError('Cart not found!', 404)

        return data = {
            user: cart.user,
            items: cart.items
        }
    }

    // Get user cart
    async getUserCart(userId) {
        const cart = await Cart.findOne({ user: userId })
        
        if (!cart) throw new CustomError('User cart not found!', 404)

        return cart
    }

    // Get all cart
    async getAllCarts() {
        const carts = await Cart.find()

        if (!carts) throw new CustomError('No cart found!', 404)

        return carts
    }

    // Delete cart
    async deleteCart(cartId) {
        const cart = await Cart.findByIdAndDelete({ _id: cartId })

        if (!cart) throw new CustomError('Cart not found!', 404)

        return cart
    }
}

module.exports = new CartService()