let mongoose = require('mongoose')

let enquerySchema = new mongoose.Schema({
    userName:String,
    phoneNumber: {
        type:Number,
    },
    userEmail:{
        type:String,
    },
    userTitle:String,
    userDescription:String
    
},{
    timestamps: true
    // it will create 2 column created, updated date
})


let enqModel = mongoose.model("enqueryForm", enquerySchema)
module.exports = enqModel;