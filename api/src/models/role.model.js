const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    isAdmin :{
        type: Boolean,
        default: false
    }
})

const Role = mongoose.model('Role', roleSchema)

module.exports = Role