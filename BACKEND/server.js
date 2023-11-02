const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 8070

app.use(cors())
app.use(bodyParser.json())