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
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: String
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
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item