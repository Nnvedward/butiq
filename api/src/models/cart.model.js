const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Item'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart