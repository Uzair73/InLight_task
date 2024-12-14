const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./Routes/auth')
const postRoutes = require('./Routes/post')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

// routes
app.use('/auth', authRoutes)
app.use('/post', postRoutes)

const PORT =  5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});