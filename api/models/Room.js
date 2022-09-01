import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    shift:{
        type:String,
        require:true
    },
    instructions:{
        type:String,
        require:true
    },
    extraBeds:{
        type:String,
        require:true
    },
    pets:{
        type:String,
        require:true
    },
    checkIn:{
        type:[String]
    },
    checkOut:{
        type:[String]
    },
    maxPeople:{
        type:Number,
        require:true
    },
    description:{
        type:[String],
    },
    amenities:{
        type:[String],
    },
    photos:{
        type:[String]
    },
    roomNumbers:{
        type:[{number:Number, unavailableDates: {type:[Date]}}]
    }
},{timestamps:true})


export default mongoose.model("Room", RoomSchema)