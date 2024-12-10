const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors")
const path = require("path");

app.use(express.json())
app.use(cors())

app.get("/menu", (req, res) => {
    const filePath = path.join(__dirname, "db.json"); // Adjusted to point to the root folder
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            if (err.code === "ENOENT") {
                return res.status(404).send({ error: "File not found" });
            }
            return res.status(500).send({ error: err.message });
        }

        try {
            const jsonData = JSON.parse(data); // Parse the JSON data
            res.status(200).json(jsonData); // Send it as JSON response
        } catch (parseError) {
            console.error("JSON parse error:", parseError.message);
            res.status(500).send({ error: "Invalid JSON format in db.json" });
        }
    });
}).listen(3000,()=>{
    console.log("server is running on port 3000");
})