module.exports = function (app) {
    app.get('/', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    app.post('/create', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    app.delete('/', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    app.patch('/', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })
}