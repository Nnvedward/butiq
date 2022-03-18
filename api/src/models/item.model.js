const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    size: {
        type: Array
    },
    color: {
        type: Array
    },
    price: {
        type: String
    },
    inStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Manufacturer'
    }
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item