const express = require('express')
const cors = require('cors')
require('express-async-errors')

const { PORT } = process.env
const bodyParser = require("body-parser")

const app = express()

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(cors())

// Parse JSON data
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Api routes
app.use('/api', require('./src/routes'))

// Ping route for testing connection
app.get("/ping", (req, res) => res.status(200).send("Hello world!"));

// Error middleware
require('./src/middlewares/error.middleware')(app)

// Listen to server port
app.listen(PORT, async () => {
    //Initialize MongoDB
    await require("./src/db/mongodb.config")()
    console.log(`:::> Server listening on port ${PORT} @ http://localhost:${PORT}`);
});

// On  server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});

module.exports = app