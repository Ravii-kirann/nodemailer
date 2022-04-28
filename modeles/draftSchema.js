const mongoose = require('mongoose')
const draftSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    subject:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }

})
module.exports = mongoose.model("draftSchema",draftSchema)