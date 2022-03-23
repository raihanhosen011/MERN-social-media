// external imports 
const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar:{
      type: String,
      default : "https://cutt.ly/UAXRFXO"  
    },
    gender: {
      type: String,
      default: "male",
    },
    role: {
      type: String,
      default: "user",
    },
    address: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    profession: {
      type: String,
      default: "",
    },
    story: {
      type: String,
      default: "",
      maxlength: 200,
    },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    saved: [{ type: mongoose.Types.ObjectId, ref: 'post' }]

},{ timestamps: true })

let user = mongoose.model('user', userSchema)

module.exports = user