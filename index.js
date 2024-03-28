
const app = require("./app");
const { dev } = require("./config/config");

const port = dev.app.port;
 

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})