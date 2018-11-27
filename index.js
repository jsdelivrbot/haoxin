const express = require('express')
const PORT = process.env.PORT || 5000

var app = express()
app.use('/', express.static('public'))

app.listen(PORT, () => console.log(`http://localhost:5000`))