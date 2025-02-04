const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const app_name = process.env.APP_NAME

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))
    console.log(`Request is server by the ${app_name}`)
})

app.listen(port, () => {
    console.log(`Server listen to ${port}`)
})

