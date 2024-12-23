const registerEndPoint = require('./register')
const loginEndPoint = require('./login')
const messageEndPoint = require('./message')

function api(app) {

    app.post('/api/v1/register', registerEndPoint)
    
    app.post('/api/v1/login', loginEndPoint)
    app.get('/api/v1/login', loginEndPoint)

    app.use('/api/v1/message', messageEndPoint)
}

module.exports = api