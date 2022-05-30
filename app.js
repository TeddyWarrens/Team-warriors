const route=require('./view/post-route');
const express=require('express');
const mongoose = require('mongoose')

const bodyParser=require('body-parser');


const app=express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
DATABASE_URL='mongodb+srv://warriors:warriorscohort6@cluster0.x4242.mongodb.net/?retryWrites=true&w=majority';
app.use('/home',route);
app.get('/',(req,res)=>{
  res.send('helo there');
})
mongoose.connect(DATABASE_URL,()=>{
    app.listen(5000,()=>{
        console.log('server is running at http://localhost:5000')
        })
})

