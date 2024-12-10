const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors")
const path = require("path");

app.use(express.json())
app.use(cors())

app.get("/menu",(req,res)=>{
    const filePath = path.join(__dirname,"menu.json");
    fs.readFile(filePath,(err,data)=>{
        if(err) {
            res.send(err.message);
        }
        else{
            res.send(data)  
        }
    });
}).listen(3000,()=>{
    console.log("server is running on port 3000");
})