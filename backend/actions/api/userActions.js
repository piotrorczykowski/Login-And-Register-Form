const User = require('../../db/models/user')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

class UserActions {
    login(req, res) {
        //  Check validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).jsonp(errors.array())
        }

        //  Get user data
        const { email, password } = req.body

        res.send(email + '\n' + password)
    }
    
    async register(req, res) {
        //  Check validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).jsonp(errors.array())
        }

        //  Get user data
        const { firstName, lastName, email, password } = req.body
        
        //  Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        //  Create new user object
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        //  Try add user to database
        try {
            await user.save()
            return res.status(201).json({ message: 'User Added Successfully!' })
        } catch(err) {
            //  Message for duplicate username
            if(err.code === 11000) {
                return res.status(500).json({ message: 'Username already in use' })
            }
            return res.status(500).json({ message: err.message })
        }
    }
}

module.exports = new UserActions()