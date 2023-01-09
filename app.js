const express = require('express')
const app = express()
const taskRoute = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/notFound')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))


app.use('/take_5/api/v1', taskRoute)
app.use(notFound)


async function init_database() {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => console.log("Server Hit"))
    } catch (err) {
        console.log(err)
    }
}

init_database()
