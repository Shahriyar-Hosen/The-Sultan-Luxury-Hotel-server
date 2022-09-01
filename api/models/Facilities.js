import mongoose from "mongoose";

const facilitiesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    photo:{
        type:String,
    },
})
export default mongoose.model('Facility', facilitiesSchema)