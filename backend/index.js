const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} ...`)
})