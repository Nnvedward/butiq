const mongoose = require('mongoose')

const shippingSchema = new mongoose.Schema({
    address : {
        type: String,
        required: true,
        trim: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    cost: {
        type: Number,
        required: true,

    }
}, {
    timestamps: true
})

const Shipping = mongoose.model('Shipping', shippingSchema)

module.exports = Shipping