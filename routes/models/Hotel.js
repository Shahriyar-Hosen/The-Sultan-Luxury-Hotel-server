import mongoose from "mongoose";

const { Schema } = mongoose;
const HotelSchema = new mongoose.Schema({
    name:{
        type:string,
        require:true
    },
    name:{
        type:string,
        require:true
    },
    type:{
        type:string,
        require:true
    },
    city:{
        type:string,
        require:true
    },
    distance:{
        type:string,
        require:true
    },
    address:{
        type:string,
        require:true
    },
    description:{
        type:string,
        require:true
    },
    cheapestPrice:{
        type:number,
        require:true
    },
    photos:{
        type:[string]
    },
    rating:{
        type:number,
        min:0,
        max:1
    },
    rooms:{
        type:[string]
    },
    feature:{
        type:boolean,
        default:false
    },
})


export default mongoose.model("Hotel", HotelSchema)