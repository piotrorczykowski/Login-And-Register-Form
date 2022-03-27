const express = require('express')
const router = express.Router()

router.get('/login', function(req, res) {
    res.send('Welcome from login')
})

router.get('/register', function(req, res) {
    res.send('Welcome from register')
})


module.exports = router;