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
        const role = await findOne({ _id: roleId })
        if (!role) throw new CustomError('Role not found!', 404)

        return data = {
            role: role.name
        }
    }
}
module.exports = new RoleService()