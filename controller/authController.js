// external imports 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// internal imports 
const User = require('../models/userModel')

let authController = {
   
   // handle user signup  
   signup : async (req, res) => {
      try {
          const { username, email, password } = req.body  
          
          const newUsername = username.replace(/ /g, '')
          const newPassword = password.replace(/ /g,'').toLowerCase()

          // Checking if user-provided username already exists
          const checked_username = await User.findOne({ username: newUsername })
          if(checked_username){
            res.status(400).json({
              errors:{
                signup : {
                  msg : 'this username is already exist!'
                }
              }
            })
            return;
          }

          // Checking if user-provided email already exists
          const checked_email = await User.findOne({ email })
          if(checked_email){
            res.status(400).json({
              errors:{
                signup:{
                  msg : 'this email already exist!'
                }
              }
            })
            return;
          }

          if(!checked_email && !checked_username){
             const hashedPassword = await bcrypt.hash(newPassword, 10)
             
             const newUser = new User({
                ...req.body,
                username : newUsername,
                password : hashedPassword
             })

             // create JSON WEB TOKEN for authentication ...
             let access_token = await createAccessToken({id: newUser._id})
             let refresh_token = await createRefreshToken({id: newUser._id})

             res.cookie('refreshToken', refresh_token, {
               httpOnly: true,
               path: '/api/refresh_token',
               maxAge: 30*24*60*60*1000 // 30days
             })

             await newUser.save()

             res.status(200).json({
                succesMsg : "registation successfull!",
                token: access_token,
                user : {
                  ...newUser._doc,
                  password: ''
                }
             })             
          }else{
            res.json({
              errors: {
                common : "Signup faild!"
              }
            })
          }
      } catch (err){
        res.json({
          errors : {
            common : err.message  
          }   
        })  
      } 
   },

   // handle user signin
   signin : async (req, res) => {
      try {
        const { username, password } = req.body

        const newUsername = username.replace(/ /g, '')
        const newPassword = password.replace(/ /g,'').toLowerCase()

        // checking if entered-username is not true
        const user = await User.findOne({
          $or : [
            {username: newUsername},
            {email: newUsername}
          ]
        })
        if(!user){
          return res.json({
            errors : {
              signin : {
                msg : "this username is not found :("
              }
            }  
          })
        }

        // compare password with saved password & checking if password is true?
        const comparePass = await bcrypt.compare(newPassword, user.password)
        if (!comparePass) {
          return res.json({
            errors : {
              signin : {
                msg : "You entered an incorrect password :("
              }
            }  
          })
        }

        // create JSON WEB TOKEN for authentication ...
        let access_token = await createAccessToken({id: user._id})
        let refresh_token = await createRefreshToken({id: user._id})

        res.cookie('refreshToken', refresh_token, {
           httpOnly: true,
           path: '/api/refresh_token',
           maxAge: 30*24*60*60*1000 // 30days
        })

        res.status(200).json({
          succesMsg : "login successfull!",
          token: access_token,
          user : {
            ...user._doc,
            password: ''
          }
        })  
      } catch (err){
        res.json({
          errors : {
            common : err.message  
          }   
        }) 
      }
   },

   // handle user signout
   signout : async (req, res) => {
     try {
       res.clearCookie('refreshtoken', {path: '/api/refresh_token'})
       
       res.json({
         succesMsg : "Logout successfull" 
       })
     } catch (err){
        res.json({
          errors : {
            common : err.message  
          }   
        }) 
     }
   },

   // handle genarate access token
   genarateAccessToken : async (req, res) => {
     try {
        const refresh_token = req.cookies.refreshToken
        if(!refresh_token) return res.json({ errors : {common : "Login now :)"} })

        if(refresh_token){
           jwt.verify(refresh_token, process.env.JWT_REFRESH_TOKEN_PK, async (err, result) => {
              if(err) return res.json({ errors : {common : "Login now :)"} })

              let user = await User.findById(result.id).select('-password')
              const access_token = await createAccessToken({ id : user._id })

              res.json({ 
                token : access_token,
                user  
              })
           })
        }
     } catch (err){
        res.json({
          errors : {
            common : err.message  
          }   
        }) 
     }
   }

}


const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_PK, {expiresIn: '1d' })
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_PK, {expiresIn: "30d"})
}


module.exports = authController