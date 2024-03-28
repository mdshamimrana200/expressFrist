const routers = require("express").Router();
const {getUser, postUser, putUser, deleteUser, getOneUser, getOneUserName} = require("../controllers/controllers");


routers.get("/",getUser)
routers.get("/:id",getOneUser)
routers.get("/name/:name",getOneUserName)
routers.post("/",postUser)
routers.put("/:id",putUser)
routers.delete("/:id",deleteUser)

module.exports = routers