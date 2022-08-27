
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: Number,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
    {
        Timestamp: true
    }
)


export default mongoose.model("User", userSchema)