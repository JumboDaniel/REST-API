const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://revival:revival@cluster0.y5vri.mongodb.net/customers?retryWrites=true&w=majority')
mongoose.connect("mongodb+srv://revival:revival30@cluster0.y5vri.mongodb.net/customers?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)