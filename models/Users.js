
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
    img: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
)


export default mongoose.model("User", userSchema)