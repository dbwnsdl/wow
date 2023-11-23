const express = require('express')
const app = express()
const port = 1000
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/a.html')
})

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/b.html')
})

app.get('/Square', (req, res) => {
    res.sendFile(__dirname + '/c.html')
})

app.get('/fan', (req, res) => {
    res.sendFile(__dirname + '/d.html')
})


app.listen(port, () => {
    console.log('sssssss')
})