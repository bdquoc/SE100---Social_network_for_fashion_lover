const registerEndPoint = require('./register')
const loginEndPoint = require('./login')

function api(app) {

    app.post('/api/v1/register', registerEndPoint)
    
    app.post('/api/v1/login', loginEndPoint)
    app.get('/api/v1/login', loginEndPoint)
}

module.exports = api