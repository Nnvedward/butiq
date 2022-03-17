const Role = require('../models/role.model')
const Permission = require('../models/permission.model')
const RolePermission = require('../models/role-permission.model')
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

    // Create Permissions
    async createPermission(data) {
        const permission = new Permission(data)
        await permission.save()

        return data = {
            permission: permission.name
        }
    }

    // Manage permissions
    async managePermission(roleId) {
        const rolepermission = await RolePermission.findOne({ role: roleId })
        const permissions = await Permission.find()

        if (!rolepermission) {
            permissions.forEach(async (permission) => {
                await RolePermission({
                    role: roleId,
                    permission: permission._id
                }).save();
            })
        }
        else {
            permissions.forEach(async (permission) => {
                const permissionExistence = await RolePermission.findOne({ role: roleId, permission: permission });

                if (!permissionExistence) {
                    await RolePermission({
                        role: roleId,
                        permission: permission._id
                    }).save();
                }
            })
        }
        // Get all permisions
        const result = await RolePermission.find({ role: roleId }).populate("role permission", "-isAdmin")
        return result
    }

    // Manage role-permissions
    async manageRolePermission(roleId, requestRolePermissions) {

        // Loop through the role-permission request
        requestRolePermissions.forEach( async(reqRolePer) => {
            const rolePermission = await RolePermission.findOne({ _id: reqRolePer._id })
            if (!rolePermission) throw new CustomError('Role permission not found!', 404)

            const data = {
                isAssigned: reqRolePer.isAssigned
            }

            await rolePermission.updateOne(
                { $set: data },
                { new: true }
            );
        })

        // Return updated data
        const response = await RolePermission.find({ role: roleId }).populate('role permission', "-isAdmin")
        return response
    }

    // Get all assigned role-permissions 
    async getAssignedRolePermissions(roleId) {
        const rolePermissions = await RolePermission.find({ role: roleId, isAssigned: true }).populate('role permission', "-isAdmin")

        if (!rolePermissions) throw new CustomError('No assigned Role-Permissions!', 404)

        return rolePermissions
    }
}

module.exports = new RoleService()