const express = require('express')
const cors = require('cors')
require('dotenv').config()

//const api_helper = require('./API_helper')
const errorHandler = require('./middleware/error')

const PORT = process.env.PORT || 5000


const app = express()


// Enable cors
app.use(cors())

// Routes
app.use('/api', require('./routes/index'))

app.use('/api', require('./routes/orderByHemoglobin'))

app.use('/api', require('./routes/patientInfo'))

app.use('/api', require('./routes/patientActivity'))

// Error handler middleware
app.use(errorHandler)


app.listen(PORT, () => {console.log("Server started on port 5000")})

