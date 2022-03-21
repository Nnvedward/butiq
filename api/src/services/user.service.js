const User = require('../models/user.model')
const CustomError = require('../utils/custom-error')

class UserService {
    // Edit User
    async update(userId, data) {
        const user = await User.findByIdAndUpdate(
            { _id: userId },
            { $set: data },
            { new: true }
        )

        if (!user) throw new CustomError('User does not exist!', 404)

        return user
    }

    // Get user profile
    async getUser(userId) {
        const user = await User.findOne({ _id: userId })
        if (!user) throw new CustomError('User not found!', 404)

        return user
    }

    // Get all users
    async getAllUsers(query) {
        let users

        if (query.new) {
            users = await User.find().sort({ _id: -1 }).limit(5)
        } else {
            users = await User.find()
        }

        if (!users) throw new CustomError('No user found!', 404)

        return users
    }

    // Delete user
    async deleteUser(userId) {
        const user = await User.findByIdAndDelete({ _id: userId })
        if (!user) throw new CustomError('No user found!', 404)

        return user
    }

    // Get User Stats
    async getUserStats() {
        const date = new Date()
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ])

        return data
    }
}

module.exports = new UserService()