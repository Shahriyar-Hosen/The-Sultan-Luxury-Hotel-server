import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    maxPeople:{
        type:Number,
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
    roomNumbers:{
        type:[{number:Number, unavailableDates: {type:[Date]}}]
    }
},{timestamps:true})


export default mongoose.model("Hotel", HotelSchema)