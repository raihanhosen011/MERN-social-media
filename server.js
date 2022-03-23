// external imports 
const express = require('express')
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// internal imports
const authRouter = require('./routes/authRouter')

const app = express()
dotenv.config()

// connect with mongoDB
mongoose
  .connect(process.env.MONGO_CONNNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database successfully connected ... :)'))
  .catch(() => console.log('Oops, disconneted fron database ... :('))

// request parser ...
app.use([
   express.json(),
   express.urlencoded({ extended: true }),
   cookieParser(),
   cors()
])

// setup router
app.use('/api/', authRouter)

app.listen(process.env.APPLICATION_PORT, () => {
  console.log(`App run on PORT:${process.env.APPLICATION_PORT}`)
})