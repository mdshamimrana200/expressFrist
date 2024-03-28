 
const mongoose = require("mongoose");
const { v4 } = require("uuid");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        default: v4()
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phonNumber: {
        type: String,
    },
    createdOn: {
        type: Date,
        default : Date.now
    },
})

module.exports = mongoose.model("AllUser", userSchema)