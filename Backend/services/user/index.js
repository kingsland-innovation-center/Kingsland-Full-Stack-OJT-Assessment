module.exports = function (app) {
    /**
     * Returns the user list.
     */
    app.get('/:id', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    /**
     * Registers a new user.
     */
    app.post('/register', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    /**
     * Authenticates a user.
     */
    app.post('/login', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })
}