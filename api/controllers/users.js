import User from "../models/Users.js"

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User is deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}