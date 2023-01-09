const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Everyone has a first name"],
        trim:true,
        maxLength: [20, "Your name has exceeded the max length"]
    }, 
    
    completed: {
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('users', taskSchema)