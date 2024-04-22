const express =  require("express")
const app = express();
const controller = require("./controller/controller")
app.set('json spaces', 4);
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
const PORT = process.env.PORT || 8084
app.get("/post", controller.postjob)
app.get("/category", controller.categoryjob)
app.listen(PORT, ()=>{
    console.log(`app in running on port http://127.0.0.1:${PORT}`);
})