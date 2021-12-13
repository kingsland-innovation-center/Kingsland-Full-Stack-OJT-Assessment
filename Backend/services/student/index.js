module.exports = function (app) {
    /**
     * Returns all student objects in the database.
     */
    app.get('/:id', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    /**
     * Creates a student in the database and returns the created student object.
     */
    app.post('/', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    /**
     * Deletes a student from the database and returns the deleted student object.
     */
    app.delete('/:id', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })

    /**
     * Modifies a student in the database and returns the modified student object.
     */
    app.patch('/:id', (request, response) => {
        response.status(500).send({
            error: 'Pending Implementations'
        })
    })
}