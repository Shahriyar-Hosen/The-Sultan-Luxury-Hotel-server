import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    cheapestPrice:{
        type:Number,
        require:true
    },
    photos:{
        type:[String]
    },
    rating:{
        type:Number,
        min:0,
        max:1
    },
    rooms:{
        type:[String]
    },
    feature:{
        type:Boolean,
        default:false
    },
})


export default mongoose.model("Hotel", HotelSchema)