import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router()

//create
router.post('/', verifyAdmin, createRoom)
//update
router.put('/:id', verifyAdmin, updateRoom)
//update available room
router.put('/availability/:id', updateRoomAvailability)
//delete
router.delete('/:id', verifyAdmin, deleteRoom)
//get
router.get('/find/:id', getRoom)
//get all
router.get('/', getRooms)

export default router