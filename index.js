//imported file from browser
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express()

// port setting
const port = process.env.PORT || 5000

//imported file from own file
import authRouter from './routes/auth.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'
import usersRouter from './routes/users.js'

//middleware 
app.use(cors())
app.use(express.json())
app.use(cookieParser())


//connected mongoose
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('mongoose connected');
    } catch (error) {
        throw error
    }
}
mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected');
});


//middleware
app.use('/api/auth', (authRouter))
app.use('/api/hotels', (hotelsRouter))
app.use('/api/rooms', (roomsRouter))
app.use('/api/users', (usersRouter))

app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || 'Something is wrong'
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    })
    next()
})



// initial route
app.get('/', (req, res) => {
    res.send('running sultan luxury hotel server')
})



// port listener
app.listen(port, () => {
    connect()
    console.log('listening', port)
})







// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run(){
//     try{
//         await client.connect()
//         const roomsCollection = client.db('sultanLuxuryHotel').collection('roomsSuites')
//         const facilitiesCollection = client.db('sultanLuxuryHotel').collection('facilities')
//         const blogsCollection = client.db('sultanLuxuryHotel').collection('blogs')
//         const testimonialsCollection = client.db('sultanLuxuryHotel').collection('testimonials')
//         const menuCollection = client.db('sultanLuxuryHotel').collection('restaurantMenu')
//         app.get('/roomsSuites', async (req, res)=>{
//             const rooms = await roomsCollection.find().toArray()
//             res.send(rooms)
//         })
//         app.get('/roomsSuites/:id', async (req, res)=>{
//             const id = req.params.id
//             const query = {_id:ObjectId(id)}
//             const rooms = await roomsCollection.findOne(query)
//             res.send(rooms)
//         })
//         app.get('/facilities', async (req, res)=>{
//             const facilities = await facilitiesCollection.find().toArray()
//             res.send(facilities)
//         })
//         app.get('/blogs', async (req, res)=>{
//             const blogs = await blogsCollection.find().toArray()
//             res.send(blogs)
//         })
//         app.get('/testimonials', async (req, res)=>{
//             const testimonials = await testimonialsCollection.find().toArray()
//             res.send(testimonials)
//         })
//         app.get('/restaurantMenu', async (req, res)=>{
//             const menus = await menuCollection.find().toArray()
//             res.send(menus)
//         })
//     }finally{
//     }
// }
// run().catch(console.dir)


