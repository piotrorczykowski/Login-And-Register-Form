const express = require('express')
const userActions = require('../actions/api/userActions')
const userValidator = require('../validators/userValidator')
const router = express.Router()

//  Login with data validation
router.post('/login', userValidator.loginValidator, userActions.login)

//  Register with data validation
router.post('/register', userValidator.registerValidator, userActions.register)

//  Check jwt token
router.get('/auth', userActions.authUser)

module.exports = router;