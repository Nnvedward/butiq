const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    autoIndex: true
}


module.exports = async () => {
    try {
         await mongoose.connect(process.env.MONGODB_URL, options)
         console.log(':::> Connected to MongoDB database')
    } catch (error) {
         console.log("<::: Couldn't connect to database ", error)
    }
};