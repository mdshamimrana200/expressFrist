const routers = require("./routers/routarse");
const express = require("express");
const app = express();
require("./model/db")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("<h1>I AM HOME")
})

app.use("/users",routers)
app.use((req,res)=>{
    res.status(404).send(404)
})

module.exports = app ; 