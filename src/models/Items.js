const mongoose = require('mongoose')

const Item = mongoose.model('Item', {
    product : {
        type : String,
        required : true, 
        trim : true
    },
    quantity : {
        type : Number,
        required : true,
        trim : true
    },
    cost : {
        type : Number,
        required : true,
        trim : true
    }
})

module.exports = Item
