
const mongoose = require('mongoose')
const dbString = "mongodb+srv://ben:testing_1234@take5cluster.lsnfzzb.mongodb.net/users?retryWrites=true&w=majority"



function connectDB(uri) {
    mongoose.set('strictQuery', false)
    mongoose.connect(uri)
}

module.exports = connectDB