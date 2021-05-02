const express = require('express');
const router = express.Router()


router.get('/person', (req, res)=>{
    if (req.query.name) {
        res.send(`You have requested a person ${req.query.name}`)
    }
})

router.get('/person/:name', (req, res)=>{
    res.send(`You have requested a person${req.params.name}`)
})

router.get('/error', (req, res)=>{
    throw new Error ('Error Test')
})

module.exports = router 