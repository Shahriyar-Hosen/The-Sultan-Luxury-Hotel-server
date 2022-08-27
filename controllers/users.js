import Users from "../models/Users.js"

export const register = async (req, res, next) => {
    try {
        const newUser = new Users({
            userName:req.body.userName,
            email:req.body.email,
            password:req.body.password
        })
        await newUser.save()
        res.state(200).send('user has been created')
    } catch (err) {

    }
}