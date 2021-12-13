module.exports = function (app) {
    app.get('/list', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    app.post('/register', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    app.post('/login', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })
}