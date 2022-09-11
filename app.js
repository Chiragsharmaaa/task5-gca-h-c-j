const express = require('express');

const app = express()

const userRoutes = require('./routes/login')
const messageRoutes = require('./routes/messages')


app.use(express.urlencoded({ extended: true }))

app.use(userRoutes)
app.use(messageRoutes)

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>')
// })



app.listen(3000);