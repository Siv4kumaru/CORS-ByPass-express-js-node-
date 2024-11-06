const express = require('express')
const app = express()
const fetch = require("node-fetch")
const cors = require('cors')

app.use(cors());

app.get("/",async (req, res) => {
    const response= await fetch('https://taxinformation.cbic.gov.in/api/cbic-rule-section-msts/viewBySectionAllRules/1000006')
    res.json(await response.json());
})
app.get("/next",async (req, res) => {
    const response= await fetch('https://taxinformation.cbic.gov.in/api/cbic-rule-section-msts/viewBySectionAllRules/1000006')
    res.json(await response.json());
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
