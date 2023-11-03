const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        requried : true,
        unique : true
    },
    password : {
        type : String, 
        required : true
    },
    photo : {
        type : String
    }, 
    role : {
        type : String, 
        default : "user"
    }
},
{timestamps : true}
)