const express = require('express');
const app = express()
const personRoute = require('./routes/person')
const CustomerRoute = require('./routes/customer')
const path = require('path');
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next)=>{
    console.log(`${new Date().toString()}=> ()${req.originalUrl}`)
    next()
})

app.use(personRoute)
app.use(CustomerRoute)
app.use(express.static('public'))

app.use((req, res , next)=>{
    res.sendFile(path.join(__dirname, './../public/404.html'))
})

app.use((err, req, res, next)=>{
    res.sendFile(path.join(__dirname, './../public/500.html'))
})

const port = process.env.PORT || 2021;
app.listen(port, ()=>{console.log(`Server has started on port ${port}`)}) 