const { default: mongoose } = require("mongoose");
const { dev } = require("../config/config");
const url = dev.db.url

mongoose.connect(url)
.then(data=>console.log("connected"))
.catch(()=>console.log("not connected"))