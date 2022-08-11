const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('express server is working successfully')
})

app.listen(port,() => {
    console.log('express server is working successfully')
})