const express = require('express')
const student = require('./services/student')
const user = require('./services/user')

const app = express()

app.use('/student', student)
app.use('/user', user)

app.listen(3100, () => {
    console.log('Server is running on port 3100')
})