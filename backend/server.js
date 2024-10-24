const express = require('express')
const morgan = require('morgan')
const api = require('./src/apis/index')
const cors = require('cors')
const app = express()
const port = 5000

app.use(morgan('combined'))

// const corsOptions = {
//     origin: 'http://127.0.0.1:3000', // Allow your frontend origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };

app.use(cors());


api(app)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})