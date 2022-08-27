import User from "../models/Users.js"

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        res.status(200).send('user has been created')
    } catch (err) {
        next(err)
    }
}