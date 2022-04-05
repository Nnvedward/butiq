const Role = require('../models/role.model')
const CustomError = require('../utils/custom-error')

class RoleService {
    // Create Roles
    async createRole(data) {
        const role = new Role(data)
        await role.save()

        return data = {
            role: role.name
        }
    }

    // Get Role
    async getRole(roleId) {
        const role = await Role.findOne({ _id: roleId })
        if (!role) throw new CustomError('Role not found!', 404)

        return data = {
            role: role.name
        }
    }

    // Get User Role
    async getUserRole() {
        const userRole = await Role.findOne({ name: 'User'})
        if (!userRole) throw new CustomError('Role does not exist', 404)

        return userRole._id
        
    }
}
module.exports = new RoleService()