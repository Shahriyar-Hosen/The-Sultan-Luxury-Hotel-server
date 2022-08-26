const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(cors())
app.use(express.json())

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('mongodb');
      } catch (error) {
       throw error
      }

}
mongoose.connection.on('disconnected', ()=> {
    console.log('mongodb disconnected');
  });
mongoose.connection.on('connected', ()=> {
    console.log('mongodb connected');
  });

app.get('/', (req, res)=>{
    res.send('running sultan luxury hotel server')
})
app.listen(port,()=>{
    connect()
    console.log('listening',port)
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


