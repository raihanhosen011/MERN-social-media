// external imports 
const router = require('express').Router()

// internal imports
const authController = require('../controller/authController')

// all routers
router.post('/signup', authController.signup)
router.post('/signin', authController.signin)
router.post('/signout', authController.signout)
router.post('/refresh_token', authController.genarateAccessToken)

module.exports = router