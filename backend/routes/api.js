const express = require('express')
const userActions = require('../actions/api/userActions')
const router = express.Router()

router.post('/login', userActions.login)
router.post('/register', userActions.register)

module.exports = router;