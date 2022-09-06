import { MaxKey } from "mongodb";
import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
    const newRoom = new Room(req.body)
    try {
        const saveRoom = await newRoom.save()
        res.status(200).json(saveRoom)
    } catch (error) {
        res.status(500).json(error)
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
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getRooms = async (req, res, next) => {
    const {max, min, ...other} = req.body
    try {
        const room = await Room.find({...other, price:{$gt:max || 0, $lt:min || 999}}).limit(req.query.limit)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}