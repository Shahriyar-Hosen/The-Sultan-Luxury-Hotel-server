import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body)
    try {
        const saveRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } })
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
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json("Room is deleted")
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getRooms = async (req, res, next) => {
    try {
        const room = await Room.find()
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}