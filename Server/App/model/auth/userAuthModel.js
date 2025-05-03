const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    clientName :{type:String,required :true},
    clientEmail :{type:String,required :true},
    clientPhone :{type:String,required :true},
    clientPassword :{type:String,required :true},
    clientRole:{type:Number, required:true}
});

let userAuthModel = mongoose.model("User", userSchema);
module.exports  = userAuthModel;