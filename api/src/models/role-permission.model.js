const mongoose = require('mongoose')

const rolePermissionSchema = new mongoose.Schema({
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    permission: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Permission'
    },
    isAssigned: {
        type: Boolean,
        default: false
    }
})

const RolePermission = mongoose.model('RolePermission', rolePermissionSchema)

module.exports = RolePermission