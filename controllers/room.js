import Hotel from "../models/Hotel";
import Room from "../models/Room";

export const createRoom = async(req, res, next)=>{
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body)
    try {
        const saveRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:saveRoom._id}})
            res.status(200).json(saveRoom)
            
        } catch (error) {
            next(error)
        }
        
    } catch (error) {
        next(error)
    }
}
export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateRoom)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteRoom = async (req, res, next) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Room is deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getRooms = async (req, res, next) => {
    try {
        const room = await Hotel.find()
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}