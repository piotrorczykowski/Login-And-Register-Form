const express = require('express')
const router = express.Router()
const userActions = require('../actions/api/userActions')

router.post('/login', userActions.login)
router.post('/register', userActions.register)

module.exports = router;