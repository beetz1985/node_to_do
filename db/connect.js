
const mongoose = require('mongoose')




function connectDB(uri) {
    mongoose.set('strictQuery', false)
    mongoose.connect(uri)
}

module.exports = connectDB
