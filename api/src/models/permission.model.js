const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
})

const Permission = mongoose.model('Permission', permissionSchema)

module.exports = Permission