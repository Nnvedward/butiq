const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const Role = require('../models/role.model')
const CustomError = require('../utils/custom-error')

class AuthService {
    // User sign up
    async signup(data) {
        let user = await User.findOne({ username: data.username })
        if (user) throw new CustomError('Username already exist!')

        user = new User(data)

        // Generate token
        const token = await user.generateAuthToken()

        await user.save()

        return data = {
            id: user._id,
            username: user.username,
            token: token
        }
    }

    // User Sign in
    async signin(data) {
        if (!data.username) throw new CustomError("Username is required!");
        if (!data.password) throw new CustomError("Password is required!");

        // Check if user exist
        const user = await User.findOne({ username: data.username})
        if (!user) throw new CustomError('Incorrect username or password!')

        // Check if password is correct
        const isCorrect = await bcrypt.compare(data.password, user.password)
        if (!isCorrect) throw new CustomError('Incorrect username or password')

        // Generate Token
        const token = await user.generateAuthToken()

        // Fetch the role
        const role = await Role.populate(user, {path: 'role'})

        return data = {
            uid: user._id,
            username: user.username,
            role: role.role.name,
            token: token
        }
    }
}

module.exports = new AuthService