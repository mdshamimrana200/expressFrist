const config = require("dotenv").config()

exports.dev ={
    app :{
        port: process.env.port || 4000
    },
    db : {
        //170.0.0.1 = localhost // 27017 = mongo code
        url : process.env.URL_DB || "mongodb://127.0.0.1:27017"
    }
} 