const routers = require("express").Router();
const {getUser, postUser, putUser, deleteUser, getOneUser} = require("../controllers/controllers");


routers.get("/",getUser)
routers.get("/:id",getOneUser)
routers.post("/",postUser)
routers.put("/:id",putUser)
routers.delete("/:id",deleteUser)

module.exports = routers