let CustomerModel = require('../models/customer.model')
const express = require('express')
const router = express.Router()


//Create new customer
router.post('/customer', (req, res)=>{
    if (!req.body) {
        return res.status(400).send('Error 400 Bad Request')
    }
    // let user ={
    //     name='!John Doe',
    //     email='johndoe@gmail.com'
    // }
    let model = new CustomerModel(req.body);
    model.save()
    .then(doc =>{
        if (!doc || doc.length === 0) {
            return res.status(500).send('Empty')
        }
        res.status(201).send(doc)
    })
    .catch(err =>{
        res.status(500).json('err')
    })
})

router.get('/customer', (req, res)=>{
    if(!req.query.email){
        return res.status(400).send('missing url parameters')
    }
    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

router.put('/customer', (req, res)=>{
    if(!req.query.email){
        return res.status(400).send('missing url parameters')
    }
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body,{
        new:true
    })
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

router.delete('/customer', (req, res)=>{
    if(!req.query.email){
        return res.status(400).send('missing url parameters')
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
module.exports = router