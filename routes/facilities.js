import express from "express";
import { createFacilities, getFacilities, getFacility } from "../controllers/facilities.js";
const router = express.Router()



// create
router.post('/', createFacilities)
// update
// delete
// get
router.get('/', getFacilities)
// get by id
router.get('/:id', getFacility)

export default router