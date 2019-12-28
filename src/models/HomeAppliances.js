const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    category : {
        type : String,
        required : true,
        trim : true
    },
    sub_category : {
        type : String,
        required : true,
        trim : true
    },
    product : {
        type : String,
        required : true, 
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        trim : true
    }
})

module.exports = Product
