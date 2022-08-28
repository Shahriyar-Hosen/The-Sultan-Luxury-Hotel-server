import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router()
// router.get('/checkAuthentication',verifyToken,(req, res, next)=>{
//     res.send('you are logged in')
// })
// router.get('/checkUser/:id',verifyUser,(req, res, next)=>{
//     res.send('you are logged in and you can delete your account')
// })
// router.get('/checkAdmin/:id',verifyAdmin,(req, res, next)=>{
//     res.send('you are logged in and you can delete all accounts')
// })
//update
router.put('/:id', verifyUser, updateUser)
//delete
router.delete('/:id', verifyUser, deleteUser)
//get
router.get('/:id', verifyUser, getUser)
//get all
router.get('/', verifyAdmin, getUsers)

export default router