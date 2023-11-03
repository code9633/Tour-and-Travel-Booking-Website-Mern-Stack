const mongoose  = require("mongoose")

const tourSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        unique : true
    },
    city:{
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }, 
    distance :{
        type : Number,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    maxGroupSize : {
        type : String,
        required : true
    },
    
    //foregn key
    reviews : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Review"
        }
    ],
    featured : {
        type : Boolean,
        default : false
    },
    
},
{
    timestamps : true
}

)

// first parameter collection name and socond is schemaName

export default mongoose.model("Tour", tourSchema)