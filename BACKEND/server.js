const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 8070

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

const connection  =  mongoose.connection
connection.once('open', ()=>{
    console.log("Mongodb connection sucess!!")
})

app.listen(PORT, ()=>{
    console.log(`Server is up ans running on port number ":${PORT}`)
})