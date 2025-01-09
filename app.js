const express = require('express')
const app = express()

const userRoutes = require("./routes/user.routes")

app.use(userRoutes)

module.exports = app


// app.get('/test', (req, res) => {
    
//     res.send('hola desde mi servidor NodeJS!')
// })