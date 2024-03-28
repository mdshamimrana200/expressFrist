const routers = require("./routers/routarse");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("./model/db")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
res.status(200).sendFile(path.join(__dirname + "/view/index.html"))
   
})

app.use("/users",routers)
app.use((req,res)=>{
    res.status(404).send(404)
})

module.exports = app ; 