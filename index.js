const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/menu",(req,res)=>{
    fs.readFile("day13/db.json",(err,data)=>{
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