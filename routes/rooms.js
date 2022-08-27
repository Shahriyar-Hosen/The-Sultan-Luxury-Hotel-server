import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/Room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router()

//create
router.post('/:hotelId', verifyAdmin, createRoom)
//update
router.put('/:id', verifyAdmin, updateRoom)
//delete
router.delete('/:id', verifyAdmin, deleteRoom)
//get
router.get('/:id', getRoom)
//get all
router.get('/', getRooms)

export default router