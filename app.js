const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/AliensDBex'
const app = express()

app.use(express.json())

//Connecting to database
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
const con = mongoose.connection
con.on('open',()=>{
    console.log("Connected to db")
})


const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)


app.listen(3000,()=>{
    console.log(`Server started on http://localhost:3000`);
    
})