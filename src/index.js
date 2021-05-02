const express = require('express');
const app = express()
const personRoute = require('./routes/person')

app.use(personRoute)
app.use(express.static('public'))

const port = process.env.PORT || 2021;
app.listen(port, ()=>{console.log(`Server has started on port ${port}`)})