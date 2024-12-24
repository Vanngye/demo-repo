const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs/promises");
app.use(cors());

app.get("/sum", async function(req, res) {
    
    const a = req.query.a.toString();
    const b = parseInt(req.query.b);
    const comb={
        "company": a,
        "age":b
        
       };
    let existingData = [];
        try {
            const fileContent = await fs.readFile("data.json", "utf-8");
            existingData = JSON.parse(fileContent); // Parse JSON from the file
        } catch (err) {
            if (err.code !== "ENOENT") {
                throw err; // If it's not a "file not found" error, rethrow
            }
        }
        existingData.push(comb);

    await fs.writeFile('data.json', JSON.stringify(existingData, null, 2));

    res.json({
        existingData
    })
});


app.listen(3002);