const mongoose = require('mongoose')

const manufacturerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
})

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema)

module.exports = Manufacturer